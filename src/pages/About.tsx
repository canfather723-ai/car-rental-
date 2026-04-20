import { motion } from 'motion/react';
import { Award, ShieldCheck, MapPin, Clock3, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-6">Our Legacy</span>
            <h1 className="text-7xl md:text-8xl font-sans font-light tracking-tighter leading-tight mb-8">
              A TRADITION OF <br />
              <span className="italic font-serif">EXCELLENCE</span>
            </h1>
            <p className="text-xl text-white/50 leading-relaxed font-light mb-10">
              Founded in 2024, AutoElite was born from a singular vision: to bridge the gap between high-performance automotive engineering and the luxury lifestyle.
            </p>
            <div className="flex gap-12">
              <div>
                <span className="text-4xl font-mono block mb-1">100+</span>
                <span className="text-[10px] uppercase tracking-widest text-white/30">Curated Vehicles</span>
              </div>
              <div>
                <span className="text-4xl font-mono block mb-1">24/7</span>
                <span className="text-[10px] uppercase tracking-widest text-white/30">Concierge Service</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200"
                alt="About Hero"
                className="w-full h-full object-cover grayscale-[0.3]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 p-12 bg-white text-black hidden xl:block">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">The Standard</span>
              <p className="text-xl font-serif italic max-w-[200px]">"Luxury is not a status, it's an experience."</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="bg-white/5 py-32 border-y border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-4">Our Values</span>
             <h2 className="text-4xl md:text-6xl font-light tracking-tight">CRAFTED WITH PRECISION</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Unmatched Security",
                desc: "Every vehicle undergoes a 200-point inspection before it joins our elite fleet."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Elite Standards",
                desc: "We only source vehicles that represent the absolute pinnacle of their respective categories."
              },
              {
                icon: <Clock3 className="w-8 h-8" />,
                title: "Seamless Access",
                desc: "From digital reservations to doorstep delivery, we value your time above all else."
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-10 border border-white/5 bg-black rounded-sm flex flex-col items-center text-center group hover:border-white/20 transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-white/5 flex items-center justify-center rounded-sm mb-8 group-hover:bg-white group-hover:text-black transition-all">
                  {value.icon}
                </div>
                <h3 className="text-xl font-sans font-medium mb-4">{value.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
         <div className="aspect-video overflow-hidden rounded-sm border border-white/10 order-2 lg:order-1">
            <img 
               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
               alt="Headquarters" 
               className="w-full h-full object-cover grayscale opacity-60"
               referrerPolicy="no-referrer"
            />
         </div>
         <div className="order-1 lg:order-2">
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-6">HQ Locations</span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-12">GLOBAL FOOTPRINT</h2>
            
            <div className="space-y-12">
               {[
                  { city: 'London', address: '12 Mayfair Enclave, W1J 7BR' },
                  { city: 'Dubai', address: 'The Opus Tower, Business Bay' },
                  { city: 'Los Angeles', address: 'Beverly Hills Corporate Center' }
               ].map((loc, i) => (
                  <div key={i} className="flex gap-6 border-b border-white/5 pb-8">
                     <MapPin className="text-white/20 w-5 h-5 mt-1" />
                     <div>
                        <h4 className="text-xl font-medium mb-1 tracking-tight">{loc.city}</h4>
                        <p className="text-white/40 uppercase text-[10px] tracking-widest">{loc.address}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 border-t border-white/5 px-6">
        <div className="max-w-4xl mx-auto text-center border border-white/10 p-20 rounded-sm bg-gradient-to-b from-white/5 to-transparent">
          <Users className="w-12 h-12 text-white/20 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8">JOIN OUR ELITE CIRCLE</h2>
          <p className="text-white/40 mb-10 max-w-xl mx-auto leading-relaxed">
            Interested in listing your vehicle or joining our concierge team? We are always looking for excellence.
          </p>
          <button className="px-12 py-5 bg-white text-black font-bold text-xs uppercase tracking-[0.3em] hover:bg-white/90 transition-all rounded-sm">
            Contact Relations
          </button>
        </div>
      </section>
    </div>
  );
}
