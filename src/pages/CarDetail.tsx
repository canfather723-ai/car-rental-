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
    <div className="bg-white min-h-screen pt-24 pb-20 overflow-x-hidden text-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-brand-teal transition-colors mb-8 group"
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
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-gray-100 shadow-xl group">
              <img
                src={car.image}
                alt={car.model}
                className="w-full h-full object-cover transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-8 grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gray-50 border border-gray-100 rounded-lg" />
              ))}
            </div>
          </motion.div>

          {/* Right: Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-brand-teal font-bold uppercase tracking-[0.3em] text-xs mb-4 block">{car.category}</span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 text-[#1A5F6B]">
              {car.make} <span className="font-medium opacity-60 italic">{car.model}</span>
            </h1>
            <div className="flex gap-4 mb-8">
               <span className="px-3 py-1 bg-gray-50 border border-gray-100 text-[10px] text-gray-500 font-bold tracking-widest uppercase">{car.year} Model</span>
               <span className="px-3 py-1 bg-green-50 border border-green-100 text-[10px] text-green-600 font-bold tracking-widest uppercase">Verified Condition</span>
            </div>

            <div className="mb-10 min-h-[60px]">
              {aiDescription ? (
                  <p className="text-lg text-gray-500 leading-relaxed font-light italic border-l-4 border-brand-teal pl-6">
                    "{aiDescription}"
                  </p>
              ) : (
                  <div className="h-2 w-32 bg-gray-100 animate-pulse rounded-full" />
              )}
            </div>

            <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-lg border border-gray-100">
                        <Gauge className="text-brand-teal w-6 h-6" />
                    </div>
                    <div>
                        <span className="text-[10px] uppercase text-gray-400 font-bold block">Top Speed</span>
                        <span className="text-sm font-bold text-brand-dark">{car.specs.topSpeed}</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-lg border border-gray-100">
                        <Zap className="text-brand-teal w-6 h-6" />
                    </div>
                    <div>
                        <span className="text-[10px] uppercase text-gray-400 font-bold block">0-60 MPH</span>
                        <span className="text-sm font-bold text-brand-dark">{car.specs.acceleration}</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-lg border border-gray-100">
                        <Navigation className="text-brand-teal w-6 h-6" />
                    </div>
                    <div>
                        <span className="text-[10px] uppercase text-gray-400 font-bold block">Engine</span>
                        <span className="text-sm font-bold text-brand-dark truncate max-w-[120px]">{car.specs.engine}</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-lg border border-gray-100">
                        <Wind className="text-brand-teal w-6 h-6" />
                    </div>
                    <div>
                        <span className="text-[10px] uppercase text-gray-400 font-bold block">Transmission</span>
                        <span className="text-sm font-bold text-brand-dark">{car.specs.transmission}</span>
                    </div>
                </div>
            </div>

            <div className="space-y-6 pt-12 border-t border-gray-100">
              <div className="flex items-center justify-between mb-2">
                 <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Payment Infrastructure</span>
                 <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-2 px-2.5 py-1.5 bg-gray-50 border border-gray-100 rounded-md">
                       <div className="w-4 h-4 bg-[#635BFF] flex items-center justify-center rounded-[2px] text-[8px] font-black text-white">S</div>
                       <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">Stripe</span>
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-1.5 bg-gray-50 border border-gray-100 rounded-md">
                       <div className="w-4 h-4 bg-[#FFCC00] flex items-center justify-center rounded-full text-[8px] font-black text-[#003366]">M</div>
                       <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">MoMo</span>
                    </div>
                    <Check className="w-3 h-3 text-green-500" />
                 </div>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 pt-12">
                <div>
                  <span className="text-xs font-bold uppercase text-gray-400 block tracking-widest mb-1">Daily Rental</span>
                  <span className="text-3xl font-bold text-[#1A5F6B]">₵{car.priceRent.toLocaleString()}</span>
                </div>
                <button
                  disabled={loading}
                  onClick={() => handleAction('rent')}
                  className="px-12 py-5 bg-brand-teal text-white font-bold uppercase text-xs tracking-widest hover:bg-[#2598a3] transition-all rounded-lg disabled:opacity-50 shadow-lg shadow-brand-teal/20"
                >
                  {loading ? 'Processing...' : 'Reserve for Rent'}
                </button>
              </div>

              {/* Purchase Block */}
              <div className="p-8 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Ownership Options</h3>
                  <div className="flex bg-white p-1 rounded-lg border border-gray-200">
                    <button 
                      onClick={() => setPurchaseMode('full')}
                      className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold transition-all rounded-md ${purchaseMode === 'full' ? 'bg-[#1A5F6B] text-white shadow-md' : 'text-gray-400 hover:text-brand-dark'}`}
                    >
                      Buy Now
                    </button>
                    <button 
                      onClick={() => setPurchaseMode('installment')}
                      className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold transition-all rounded-md ${purchaseMode === 'installment' ? 'bg-[#1A5F6B] text-white shadow-md' : 'text-gray-400 hover:text-brand-dark'}`}
                    >
                      Installments
                    </button>
                  </div>
                </div>

                {purchaseMode === 'full' ? (
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase text-gray-400 block tracking-widest mb-1">Full Acquisition</span>
                      <span className="text-4xl font-bold text-[#1A5F6B] tracking-tight">₵{car.priceBuy.toLocaleString()}</span>
                    </div>
                    <button
                      disabled={loading}
                      onClick={() => handleAction('buy')}
                      className="px-12 py-5 border-2 border-[#1A5F6B] text-[#1A5F6B] font-bold uppercase text-xs tracking-widest hover:bg-[#1A5F6B] hover:text-white transition-all rounded-lg disabled:opacity-50"
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
                          className={`flex-1 py-3 text-[10px] uppercase font-bold border transition-all rounded-lg ${installmentMonths === m ? 'border-[#1A5F6B] text-[#1A5F6B] bg-[#1A5F6B]/5' : 'border-gray-200 text-gray-400 hover:border-[#1A5F6B]/50'}`}
                        >
                          {m} Months
                        </button>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold uppercase text-gray-400 block tracking-widest mb-1">Monthly Payment</span>
                        <span className="text-4xl font-bold text-[#1A5F6B] tracking-tight">₵{monthlyPayment.toLocaleString()}</span>
                        <span className="text-[10px] text-gray-400 block mt-1 font-bold uppercase tracking-widest italic">10% fixed APR included</span>
                      </div>
                      <button
                        disabled={loading}
                        onClick={() => handleAction('installment')}
                        className="px-10 py-5 bg-brand-orange text-white font-bold uppercase text-xs tracking-widest hover:bg-[#d9561a] transition-all rounded-lg disabled:opacity-50 shadow-lg shadow-brand-orange/20"
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

