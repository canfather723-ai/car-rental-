import { motion } from 'motion/react';
import { Car, DollarSign, Shield, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

export default function Share() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-brand-teal font-bold uppercase tracking-[0.3em] text-xs block mb-6">Host with AutoElite</span>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-8 text-[#1A5F6B]">
              Turn Your Car <br />
              Into <span className="text-brand-orange italic">Capital</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed font-light mb-10">
              Join thousands of car owners in Ghana who earn extra income by listing their idle vehicles on our premium platform. We handle the logistics, you collect the earnings.
            </p>
            
            <div className="space-y-6 mb-12">
               {[
                 'Earn up to ₵15,000 monthly',
                 'Comprehensive insurance coverage included',
                 'Verified and vetted premium renters',
                 'Professional support and maintenance guides'
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-4">
                    <CheckCircle className="text-brand-teal w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium text-brand-dark">{item}</span>
                 </div>
               ))}
            </div>

            <button className="px-12 py-5 bg-[#1A5F6B] text-white font-bold uppercase text-xs tracking-widest hover:bg-brand-dark transition-all rounded-xl shadow-xl shadow-brand-dark/20 flex items-center gap-4">
               Start Hosting <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
               <img 
                 src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1200" 
                 alt="Host Car" 
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-2xl shadow-2xl border border-gray-100 max-w-xs">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-brand-orange">
                     <DollarSign className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-[#1A5F6B] uppercase tracking-widest">Earnings Calculator</span>
               </div>
               <p className="text-xs text-gray-400 mb-6">Estimate how much you can earn based on your car model and location.</p>
               <div className="flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Monthly</span>
                    <span className="text-2xl font-bold text-brand-teal">₵8,450+</span>
                  </div>
                  <button className="text-[10px] font-bold text-brand-orange uppercase tracking-widest border-b border-brand-orange pb-1">Calculate</button>
               </div>
            </div>
          </motion.div>
        </div>

        {/* How it works */}
        <div>
          <div className="text-center mb-20">
             <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-xs block mb-4">Process</span>
             <h2 className="text-4xl md:text-5xl font-bold text-[#1A5F6B]">How it works?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Car />, title: 'List Your Vehicle', desc: 'Provide photos and details of your car. Set your own availability and pricing rules.' },
              { icon: <Shield />, title: 'Get Vetted', desc: 'Our team conducts a 50-point inspection and verifies your identity and ownership.' },
              { icon: <DollarSign />, title: 'Start Earning', desc: 'Once approved, your car goes live. Accept bookings and track earnings via your dashboard.' }
            ].map((step, idx) => (
              <div key={idx} className="p-10 bg-gray-50 border border-gray-100 rounded-3xl text-center group hover:bg-white hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl mx-auto flex items-center justify-center mb-8 text-brand-teal group-hover:bg-[#1A5F6B] group-hover:text-white transition-all shadow-sm">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1A5F6B] mb-4 uppercase tracking-widest">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
