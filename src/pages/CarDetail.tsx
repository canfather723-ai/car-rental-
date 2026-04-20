import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CAR_DATA } from '../data';
import { ArrowLeft, Check, Gauge, Zap, Wind, Navigation } from 'lucide-react';
import { getStripe } from '../lib/stripe';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function CarDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = CAR_DATA.find((c) => c.id === id);
  const [loading, setLoading] = useState(false);
  const [aiDescription, setAiDescription] = useState<string | null>(null);
  const [purchaseMode, setPurchaseMode] = useState<'full' | 'installment'>('full');
  const [installmentMonths, setInstallmentMonths] = useState<12 | 24 | 36>(24);

  const monthlyPayment = Math.round((car.priceBuy * 1.1) / installmentMonths);

  useEffect(() => {
    async function fetchAiReview() {
      if (!car) return;
      try {
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: `Write a sophisticated, 30-word marketing blurb for a ${car.year} ${car.make} ${car.model}. Focus on prestige and performance. No emojis.`,
        });
        setAiDescription(response.text);
      } catch (err) {
        console.error("AI Error:", err);
      }
    }
    fetchAiReview();
  }, [car]);

  if (!car) return <div>Car not found</div>;

  const handleAction = async (type: 'rent' | 'buy' | 'installment') => {
    setLoading(true);
    const price = type === 'rent' 
      ? car.priceRent 
      : type === 'buy' 
        ? car.priceBuy 
        : monthlyPayment; // For installment, we'll charge the first month
    
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          carId: car.id,
          carName: `${car.make} ${car.model}`,
          price,
          type,
          months: type === 'installment' ? installmentMonths : undefined
        }),
      });

      const session = await response.json();
      
      if (session.error) {
        alert(session.error);
        return;
      }

      if (session.url) {
        window.location.href = session.url;
      } else {
        // Fallback for older sessions if needed, though server is updated
        const stripe = await getStripe();
        if (stripe) {
          await (stripe as any).redirectToCheckout({ sessionId: session.id });
        }
      }
    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black min-h-screen pt-24 pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs uppercase tracking-widest font-bold">Back to Inventory</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-32"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-sm border border-white/10 group">
              <img
                src={car.image}
                alt={car.model}
                className="w-full h-full object-cover grayscale-[0.2] transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-8 grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-white/5 border border-white/5 rounded-sm" />
              ))}
            </div>
          </motion.div>

          {/* Right: Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 block mb-4">{car.category}</span>
            <h1 className="text-5xl md:text-7xl font-sans font-medium tracking-tighter mb-4 text-white">
              {car.make} <span className="text-white/40">{car.model}</span>
            </h1>
            <div className="flex gap-4 mb-8">
               <span className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] text-white/60 tracking-widest uppercase">{car.year} Model</span>
               <span className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] text-white/60 tracking-widest uppercase">Verified Condition</span>
            </div>

            <div className="mb-10 min-h-[60px]">
              {aiDescription ? (
                  <p className="text-lg text-white/60 leading-relaxed font-light italic border-l-2 border-white/20 pl-6">
                    "{aiDescription}"
                  </p>
              ) : (
                  <div className="h-2 w-32 bg-white/5 animate-pulse rounded-full" />
              )}
            </div>

            <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm border border-white/5">
                        <Gauge className="text-white/60 w-6 h-6" />
                    </div>
                    <div>
                        <span className="text-[10px] uppercase text-white/30 block">Top Speed</span>
                        <span className="text-sm font-mono text-white">{car.specs.topSpeed}</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm border border-white/5">
                        <Zap className="text-white/60 w-6 h-6" />
                    </div>
                    <div>
                        <span className="text-[10px] uppercase text-white/30 block">0-60 MPH</span>
                        <span className="text-sm font-mono text-white">{car.specs.acceleration}</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm border border-white/5">
                        <Navigation className="text-white/60 w-6 h-6" />
                    </div>
                    <div>
                        <span className="text-[10px] uppercase text-white/30 block">Engine</span>
                        <span className="text-sm font-mono text-white">{car.specs.engine}</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm border border-white/5">
                        <Wind className="text-white/60 w-6 h-6" />
                    </div>
                    <div>
                        <span className="text-[10px] uppercase text-white/30 block">Transmission</span>
                        <span className="text-sm font-mono text-white">{car.specs.transmission}</span>
                    </div>
                </div>
            </div>

            <div className="space-y-6 pt-12 border-t border-white/10">
              <div className="flex items-center justify-between mb-2">
                 <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Payment Infrastructure</span>
                 <div className="flex gap-3 items-center">
                    {/* Stripe Stylized Badge */}
                    <div className="flex items-center gap-2 px-2.5 py-1.5 bg-white/[0.03] border border-white/10 rounded-sm group hover:border-white/20 transition-colors">
                       <div className="w-4 h-4 bg-[#635BFF] flex items-center justify-center rounded-[2px] text-[8px] font-black text-white shadow-[0_0_10px_rgba(99,91,255,0.3)]">S</div>
                       <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/50 group-hover:text-white/80">Stripe</span>
                    </div>
                    {/* MoMo Stylized Badge */}
                    <div className="flex items-center gap-2 px-2.5 py-1.5 bg-white/[0.03] border border-white/10 rounded-sm group hover:border-white/20 transition-colors">
                       <div className="w-4 h-4 bg-[#FFCC00] flex items-center justify-center rounded-full text-[8px] font-black text-[#003366] shadow-[0_0_10px_rgba(255,204,0,0.2)]">M</div>
                       <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/50 group-hover:text-white/80">MoMo</span>
                    </div>
                    {/* Security Badge */}
                    <div className="h-4 w-[1px] bg-white/10 mx-1" />
                    <Check className="w-3 h-3 text-white/30" />
                 </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase text-white/40 block tracking-widest text-center mb-1">Flexible Payment</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-white/60 uppercase tracking-widest font-bold">Mobile Money Supported</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-12">
                <div>
                  <span className="text-xs uppercase text-white/40 block tracking-widest">Daily Rental</span>
                  <span className="text-3xl font-mono text-white">${car.priceRent}</span>
                </div>
                <button
                  disabled={loading}
                  onClick={() => handleAction('rent')}
                  className="px-12 py-5 bg-white text-black font-bold uppercase text-xs tracking-[0.2em] hover:bg-white/90 transition-all rounded-sm disabled:opacity-50"
                >
                  {loading ? 'Processing...' : 'Reserve for Rent'}
                </button>
              </div>

              {/* Purchase Block */}
              <div className="p-8 bg-white/5 rounded-sm border border-white/5">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-[0.4em] text-white/60 font-sans">Ownership Options</h3>
                  <div className="flex bg-black p-1 rounded-sm border border-white/10">
                    <button 
                      onClick={() => setPurchaseMode('full')}
                      className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold transition-all ${purchaseMode === 'full' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
                    >
                      Buy Now
                    </button>
                    <button 
                      onClick={() => setPurchaseMode('installment')}
                      className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold transition-all ${purchaseMode === 'installment' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
                    >
                      Installments
                    </button>
                  </div>
                </div>

                {purchaseMode === 'full' ? (
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs uppercase text-white/40 block tracking-widest mb-1">Full Acquisition</span>
                      <span className="text-4xl font-mono text-white tracking-tighter">${car.priceBuy.toLocaleString()}</span>
                    </div>
                    <button
                      disabled={loading}
                      onClick={() => handleAction('buy')}
                      className="px-12 py-5 border border-white/20 text-white font-bold uppercase text-xs tracking-[0.2em] hover:bg-white/10 transition-all rounded-sm disabled:opacity-50"
                    >
                      {loading ? 'Processing...' : 'Buy Now'}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      {[12, 24, 36].map((m) => (
                        <button
                          key={m}
                          onClick={() => setInstallmentMonths(m as any)}
                          className={`flex-1 py-3 text-[10px] uppercase border transition-all ${installmentMonths === m ? 'border-white text-white bg-white/10' : 'border-white/10 text-white/40 hover:border-white/30'}`}
                        >
                          {m} Months
                        </button>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs uppercase text-white/40 block tracking-widest mb-1">Monthly Payment</span>
                        <span className="text-4xl font-mono text-white tracking-tighter">${monthlyPayment.toLocaleString()}</span>
                        <span className="text-[10px] text-white/20 block mt-1 uppercase tracking-widest italic">10% fixed APR included</span>
                      </div>
                      <button
                        disabled={loading}
                        onClick={() => handleAction('installment')}
                        className="px-10 py-5 bg-white text-black font-bold uppercase text-xs tracking-[0.2em] hover:bg-white/90 transition-all rounded-sm disabled:opacity-50"
                      >
                        {loading ? 'Processing...' : 'Start Financing'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

