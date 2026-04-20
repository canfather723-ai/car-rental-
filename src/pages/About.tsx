import { motion } from 'motion/react';
import { Award, ShieldCheck, MapPin, Clock3, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20 text-brand-dark">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <span className="text-brand-teal font-bold uppercase tracking-[0.3em] text-xs block mb-6">Our Legacy</span>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-8 text-[#1A5F6B]">
              A TRADITION OF <br />
              <span className="italic font-medium opacity-60">EXCELLENCE</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed font-light mb-10">
              Founded in 2024, WopeCar (AutoElite) was born from a singular vision: to bridge the gap between high-performance automotive engineering and the luxury lifestyle in Ghana.
            </p>
            <div className="flex gap-12">
              <div>
                <span className="text-4xl font-bold block mb-1 text-[#1A5F6B]">100+</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Curated Vehicles</span>
              </div>
              <div>
                <span className="text-4xl font-bold block mb-1 text-[#1A5F6B]">24/7</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Concierge Service</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200"
                alt="About Hero"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 p-12 bg-[#1A5F6B] text-white hidden xl:block rounded-2xl shadow-2xl">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">The Standard</span>
              <p className="text-xl font-medium italic max-w-[200px]">"Luxury is not a status, it's an experience."</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-32 border-y border-gray-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <span className="text-brand-teal font-bold uppercase tracking-[0.3em] text-xs block mb-4">Our Values</span>
             <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A5F6B]">CRAFTED WITH PRECISION</h2>
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
                className="p-10 border border-gray-100 bg-white rounded-2xl flex flex-col items-center text-center group hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gray-50 flex items-center justify-center rounded-xl mb-8 group-hover:bg-[#1A5F6B] group-hover:text-white transition-all text-[#1A5F6B]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#1A5F6B] tracking-tight">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
         <div className="aspect-video overflow-hidden rounded-2xl border border-gray-100 shadow-xl order-2 lg:order-1">
            <img 
               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
               alt="Headquarters" 
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
            />
         </div>
         <div className="order-1 lg:order-2">
            <span className="text-brand-teal font-bold uppercase tracking-[0.3em] text-xs block mb-6">Headquarters</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-[#1A5F6B]">LOCAL FOOTPRINT</h2>
            
            <div className="space-y-12">
               {[
                  { city: 'Accra', address: 'Impact Hub, 1aap Otswe Street' },
                  { city: 'Kumasi', address: 'Bantama High Street, Corporate Node' },
                  { city: 'Takoradi', address: 'Harbour View Heights, Office 404' }
               ].map((loc, i) => (
                  <div key={i} className="flex gap-6 border-b border-gray-100 pb-8">
                     <MapPin className="text-brand-orange w-5 h-5 mt-1" />
                     <div>
                        <h4 className="text-xl font-bold mb-1 tracking-tight text-[#1A5F6B]">{loc.city}</h4>
                        <p className="text-gray-400 uppercase text-[10px] font-bold tracking-widest">{loc.address}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 border-t border-gray-100 px-6">
        <div className="max-w-4xl mx-auto text-center border border-gray-100 p-20 rounded-3xl bg-gray-50">
          <Users className="w-12 h-12 text-brand-teal mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-[#1A5F6B]">JOIN OUR ELITE CIRCLE</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Interested in listing your vehicle or joining our concierge team in Ghana? We are always looking for excellence.
          </p>
          <button className="px-12 py-5 bg-brand-teal text-white font-bold text-xs uppercase tracking-widest hover:bg-[#2598a3] transition-all rounded-xl shadow-lg shadow-brand-teal/20">
            Contact Relations
          </button>
        </div>
      </section>
    </div>
  );
}
