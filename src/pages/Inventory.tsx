import { useState } from 'react';
import { motion } from 'motion/react';
import { CAR_DATA } from '../data';
import CarCard from '../components/CarCard';
import { ChevronDown, Map as MapIcon } from 'lucide-react';

export default function Inventory() {
  const [filter, setFilter] = useState<'All' | 'Luxury' | 'Sports' | 'SUV' | 'Electric' | 'Economy'>('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredCars = CAR_DATA.filter((car) => {
    return filter === 'All' || car.category === filter;
  });

  return (
    <div className="bg-white min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Mobile Filter Accordion */}
        <div className="mb-8 overflow-hidden rounded-md border border-gray-100 shadow-sm">
           <button 
             onClick={() => setIsFilterOpen(!isFilterOpen)}
             className="w-full flex items-center justify-between p-5 bg-white text-gray-400 font-bold uppercase text-xs tracking-widest"
           >
              <div className="flex items-center gap-2">
                 <div className="w-1 h-5 bg-brand-teal" />
                 FILTER BY
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
           </button>
           
           <motion.div
             initial={false}
             animate={{ height: isFilterOpen ? 'auto' : 0 }}
             className="overflow-hidden bg-gray-50/50"
           >
             <div className="p-6 grid grid-cols-2 lg:grid-cols-6 gap-4">
               {['All', 'Luxury', 'Sports', 'SUV', 'Electric', 'Economy'].map((cat) => (
                 <button
                   key={cat}
                   onClick={() => setFilter(cat as any)}
                   className={`px-4 py-2 text-[10px] uppercase font-bold tracking-[0.2em] transition-all rounded-sm border ${
                     filter === cat 
                       ? 'bg-[#1A5F6B] text-white border-[#1A5F6B]' 
                       : 'bg-white text-gray-400 border-gray-100 hover:border-[#1A5F6B]/30'
                   }`}
                 >
                   {cat}
                 </button>
               ))}
             </div>
           </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
           <div>
              <h2 className="text-3xl font-bold text-[#1A5F6B]">{filteredCars.length} cars found</h2>
              <button className="flex items-center gap-2 mt-2 text-xs font-bold text-gray-400 hover:text-brand-teal transition-colors">
                 Show on the map <MapIcon className="w-3 h-3" />
              </button>
           </div>
           
           <div className="flex items-center gap-4 border border-gray-100 bg-white p-3 rounded-md">
              <span className="text-xs font-bold text-gray-400">Sort by:</span>
              <button className="flex items-center gap-4 text-[#1A5F6B] font-bold">
                 Special <ChevronDown className="w-4 h-4" />
              </button>
           </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.length > 0 ? (
            filteredCars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))
          ) : (
            <div className="col-span-full py-32 flex flex-col items-center justify-center border border-dashed border-gray-100 rounded-lg">
                <span className="text-gray-300 uppercase tracking-[0.5em] text-xs">No vehicles found</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
