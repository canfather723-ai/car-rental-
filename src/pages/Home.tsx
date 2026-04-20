import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MapPin, Clock, Send, ChevronDown, Calendar as CalendarIcon, CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { CAR_DATA } from '../data';
import CarCard from '../components/CarCard';

export default function Home() {
  const featuredCars = CAR_DATA.slice(0, 3);
  const navigate = useNavigate();
  
  // Widget State
  const [location, setLocation] = useState('Accra, Greater Accra');
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [dates, setDates] = useState('20/04/2026 - 21/04/2026');
  
  const locations = [
    'Accra, Greater Accra',
    'Kumasi, Ashanti Region',
    'Takoradi, Western Region',
    'Tamale, Northern Region'
  ];

  const handleCheckAvailability = () => {
    navigate('/inventory');
  };

  return (
    <div className="bg-white min-h-screen text-brand-dark">
      {/* Hero Section with Booking Widget */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[45%] h-full z-0 hidden lg:block">
           <img
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200"
            alt="Hero Car"
            className="w-full h-full object-cover rounded-bl-[100px]"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="lg:w-1/2 pt-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-[#1A5F6B] leading-tight mb-8"
            >
              Start Your Journey
            </motion.h1>
            
            {/* Booking Widget */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-2xl border border-gray-100 p-8 mb-12 max-w-xl relative"
            >
               <div className="space-y-6">
                 <div className="relative">
                    <div 
                      onClick={() => setIsLocationOpen(!isLocationOpen)}
                      className="flex items-start gap-4 pb-6 border-b border-gray-100 cursor-pointer group"
                    >
                        <div className="p-3 bg-gray-50 rounded-lg text-[#1A5F6B] group-hover:bg-[#1A5F6B] group-hover:text-white transition-all">
                          <MapPin className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Location</label>
                          <div className="flex items-center justify-between text-brand-dark font-bold">
                              <span>{location}</span>
                              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isLocationOpen ? 'rotate-180' : ''}`} />
                          </div>
                        </div>
                    </div>

                    <AnimatePresence>
                      {isLocationOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-2xl z-50 overflow-hidden"
                        >
                          {locations.map((loc) => (
                            <button
                              key={loc}
                              onClick={() => {
                                setLocation(loc);
                                setIsLocationOpen(false);
                              }}
                              className="w-full p-4 text-left text-sm font-bold text-brand-dark hover:bg-gray-50 flex items-center justify-between group"
                            >
                              {loc}
                              {location === loc && <CheckCircle className="w-4 h-4 text-brand-teal" />}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                 </div>

                 <div className="flex items-start gap-4 cursor-pointer group">
                    <div className="p-3 bg-gray-50 rounded-lg text-[#1A5F6B] group-hover:bg-[#1A5F6B] group-hover:text-white transition-all">
                       <Clock className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                       <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Select Dates</label>
                       <div className="flex items-center gap-4 text-brand-dark font-bold">
                          <span>{dates}</span>
                          <CalendarIcon className="w-4 h-4 text-gray-400 ml-auto" />
                       </div>
                    </div>
                 </div>

                 <button 
                  onClick={handleCheckAvailability}
                  className="w-full py-5 bg-brand-teal text-white font-bold uppercase tracking-widest rounded-xl hover:bg-[#2598a3] transition-all shadow-lg shadow-brand-teal/20 flex items-center justify-center gap-3"
                 >
                   Check Availability <ArrowRight className="w-4 h-4" />
                 </button>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Selection */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-brand-teal font-bold uppercase tracking-[0.2em] text-xs">Premium Fleet</span>
          <h2 className="text-3xl font-bold mt-2 text-[#1A5F6B]">77 cars found</h2>
          <div className="w-12 h-1 bg-brand-orange mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
           <Link to="/inventory" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#1A5F6B] text-[#1A5F6B] font-bold uppercase text-xs tracking-widest hover:bg-[#1A5F6B] hover:text-white transition-all">
             Discover All Vehicles <ArrowRight className="w-4 h-4" />
           </Link>
        </div>
      </section>

      {/* Pathways to Ownership */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-teal font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Flexible Acquisition</span>
            <h2 className="text-4xl font-bold text-[#1A5F6B]">PATHWAYS TO OWNERSHIP</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Full Purchase', desc: 'Secure, encrypted transfers for total ownership.', icon: <MapPin className="text-brand-orange" />, path: '/acquisition' },
              { title: 'Installments', desc: 'Spread the investment over up to 36 months.', icon: <Clock className="text-brand-orange" />, path: '/acquisition' },
              { title: 'Rental Reserve', desc: 'Daily access for ultimate flexibility.', icon: <Send className="text-brand-orange" />, path: '/inventory' }
            ].map((p, i) => (
              <Link 
                key={i} 
                to={p.path}
                className="p-10 bg-white border border-gray-100 hover:shadow-2xl transition-all group rounded-xl block relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-all scale-150 rotate-12">
                   {p.icon}
                </div>
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1A5F6B] group-hover:text-white transition-all transform group-hover:scale-110">
                   {p.icon}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-[#1A5F6B] group-hover:text-brand-teal transition-colors">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-8">{p.desc}</p>
                <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-brand-teal transition-all group-hover:translate-x-2">
                  Learn More <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6">
         <div className="max-w-5xl mx-auto bg-[#1A5F6B] rounded-3xl overflow-hidden relative p-12 md:p-20 text-white text-center">
            <div className="relative z-10">
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe For Exclusive Offers And Deals!</h2>
               <p className="text-white/70 mb-12">Get secret deals prices drop the moment you sign up!</p>
               
               <div className="max-w-md mx-auto relative">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full py-5 px-8 rounded-full bg-white text-brand-dark focus:outline-none"
                  />
                  <button className="absolute right-2 top-2 bottom-2 bg-brand-teal text-white px-8 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#2598a3] transition-all">
                    Subscribe
                  </button>
               </div>
            </div>
            
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 rounded-full -ml-32 -mb-32 blur-3xl" />
         </div>
      </section>

      {/* Trust Signals */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-100 flex flex-wrap justify-between items-center gap-8 grayscale opacity-40">
         <div className="flex items-center gap-8">
            <span className="text-[9px] font-black tracking-widest">VISA</span>
            <span className="text-[9px] font-black tracking-widest">MASTERCARD</span>
            <span className="text-[9px] text-brand-orange font-black tracking-widest">MOMO</span>
         </div>
         <span className="text-[9px] font-bold uppercase tracking-[0.3em]">SECURED BY STRIPE</span>
      </div>
    </div>
  );
}
