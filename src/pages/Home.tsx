import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CAR_DATA } from '../data';
import CarCard from '../components/CarCard';

export default function Home() {
  const featuredCars = CAR_DATA.slice(0, 3);

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Car"
            className="w-full h-full object-cover scale-110 opacity-70"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-3 py-1 border border-white/20 text-[10px] uppercase tracking-[0.4em] mb-8">
              Est. 2024 • Luxury Car Fleet
            </span>
            <h1 className="text-7xl md:text-9xl font-sans font-light tracking-tighter leading-[0.85] mb-8">
              DEFINING <br />
              <span className="italic font-serif">PRESTIGE</span>
            </h1>
            <p className="text-lg text-white/50 mb-10 max-w-lg leading-relaxed font-light">
              Experience the pinnacle of automotive engineering. 
              Our curated collection offers unparalleled performance and peerless luxury for those who demand excellence.
            </p>
            <div className="flex gap-4">
              <Link
                to="/inventory"
                className="px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-colors flex items-center gap-2 group rounded-sm"
              >
                View Collection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-colors rounded-sm"
              >
                The Experience
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/20">
          <span className="text-[10px] uppercase tracking-[0.5em] vertical-rail">Scroll</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </section>

      {/* Featured Selection */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 block mb-4">Elite Selection</span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight">FEATURED FLEET</h2>
            <p className="mt-6 text-white/40 leading-relaxed font-light">
              Each vehicle in our selection is meticulously maintained and delivers a driving experience that transcends the ordinary.
            </p>
          </div>
          <Link to="/inventory" className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-white/70 transition-colors">
            See All Vehicles <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredCars.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} />
          ))}
        </div>
      </section>

      {/* Transaction & Acquisition Paths */}
      <section className="py-24 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 block mb-4">Flexible Acquisition</span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight italic">PATHWAYS TO <span className="text-white/30">OWNERSHIP</span></h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Full Purchase', desc: 'Secure, encrypted transfers for total ownership.', path: '/acquisition' },
              { title: 'Installments', desc: 'Spread the investment over up to 36 months.', path: '/acquisition' },
              { title: 'Rental Reserve', desc: 'Daily access for ultimate flexibility.', path: '/acquisition' }
            ].map((path, i) => (
              <Link 
                key={i}
                to={path.path}
                className="p-10 border border-white/5 hover:border-white/20 transition-all group rounded-sm"
              >
                <h3 className="text-xl font-bold uppercase tracking-widest mb-4 group-hover:text-white transition-colors">{path.title}</h3>
                <p className="text-sm text-white/30 leading-relaxed font-light">{path.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 text-white">
                  Learn More <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 pt-16 border-t border-white/5 flex flex-wrap justify-between items-center gap-8 grayscale opacity-20">
             <div className="flex items-center gap-8">
                <span className="text-[9px] uppercase tracking-widest">VISA</span>
                <span className="text-[9px] uppercase tracking-widest">MASTERCARD</span>
                <span className="text-[9px] uppercase tracking-widest text-[#FFCC00] font-black">MOMO</span>
             </div>
             <span className="text-[9px] uppercase tracking-[0.3em] font-bold">SECURED BY STRIPE</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: 'Vehicles', value: '50+' },
            { label: 'Happy Clients', value: '2.5k' },
            { label: 'Service Excellence', value: '99%' },
            { label: 'Global Offices', value: '12' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-mono mb-2 tracking-tighter">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
