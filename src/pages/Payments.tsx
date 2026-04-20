import { motion } from 'motion/react';
import { CreditCard, Smartphone, ShieldCheck, Wallet, Landmark, BadgePercent } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Payments() {
  const paymentOptions = [
    {
      title: "Direct Acquisition",
      description: "Full capital transfer for immediate vehicle ownership. Secure, encrypted, and fast.",
      icon: <Landmark className="w-8 h-8" />,
      features: ["Instant Title Transfer", "Priority Delivery", "Global Warranty"]
    },
    {
      title: "Consolidated Installments",
      description: "Spread the cost over 12, 24, or 36 months with our institutional financing partners.",
      icon: <BadgePercent className="w-8 h-8" />,
      features: ["Fixed 10% APR", "Low Down Payment", "Flexible Terms"]
    },
    {
      title: "Daily Reservation",
      description: "Short-term access to our fleet. Perfect for testing a model before acquisition.",
      icon: <CreditCard className="w-8 h-8" />,
      features: ["24-Hour Period", "Premium Insurance", "Airport Pick-up"]
    }
  ];

  const methods = [
    { name: "Visa / Mastercard", logo: <CreditCard className="w-5 h-5" />, provider: "Stripe" },
    { name: "Apple & Google Pay", logo: <Smartphone className="w-5 h-5" />, provider: "Stripe" },
    { name: "Mobile Money (MoMo)", logo: <Smartphone className="w-5 h-5 text-yellow-500" />, provider: "Stripe" },
    { name: "Bank Transfers", logo: <Landmark className="w-5 h-5" />, provider: "Stripe" }
  ];

  return (
    <div className="bg-white min-h-screen text-brand-dark pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-brand-teal font-bold uppercase tracking-[0.3em] text-xs block mb-4">Financial Infrastructure</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-[#1A5F6B]">ACQUISITION <span className="opacity-40 italic">&</span> TERMS</h1>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg font-light leading-relaxed">
            At WopeCar, we've built a financial framework that provides you with multiple paths to ownership, 
            backed by world-class encryption and regional flexibility including Mobile Money in Ghana.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mb-32">
          {paymentOptions.map((option, idx) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 bg-white border border-gray-100 rounded-2xl group hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-gray-50 flex items-center justify-center rounded-xl mb-8 text-[#1A5F6B] group-hover:bg-[#1A5F6B] group-hover:text-white transition-colors">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-[#1A5F6B]">{option.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">{option.description}</p>
              <ul className="space-y-3">
                {option.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-[#1A5F6B] font-bold">
                    <ShieldCheck className="w-3 h-3 text-brand-orange" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-100 p-12 rounded-3xl text-center">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-12">Supported Payment Gateways</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {methods.map((m) => (
              <div key={m.name} className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 rounded-2xl border border-gray-200 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all bg-white shadow-sm">
                  {m.logo}
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-dark font-bold block">{m.name}</span>
                  <span className="text-[8px] uppercase tracking-widest text-gray-400 font-bold">via {m.provider}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-6">
             <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-100 rounded-full">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest text-green-600 font-bold">Secure SSL Encryption Active</span>
             </div>
             <Link 
              to="/inventory"
              className="px-12 py-5 bg-brand-teal text-white font-bold uppercase text-xs tracking-widest hover:bg-[#2598a3] transition-all rounded-xl shadow-lg shadow-brand-teal/20"
             >
                Start Your Journey
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
