import { useState } from 'react';
import { motion } from 'motion/react';
import { CAR_DATA } from '../data';
import CarCard from '../components/CarCard';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function Inventory() {
  const [filter, setFilter] = useState<'All' | 'Luxury' | 'Sports' | 'SUV' | 'Electric'>('All');
  const [search, setSearch] = useState('');

  const filteredCars = CAR_DATA.filter((car) => {
    const matchesFilter = filter === 'All' || car.category === filter;
    const matchesSearch = car.make.toLowerCase().includes(search.toLowerCase()) || 
                         car.model.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-black min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-4">Inventory</span>
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-white">THE COLLECTION</h1>
        </header>

        <div className="flex flex-col md:flex-row gap-8 mb-12 items-center justify-between">
          <div className="flex gap-4 overflow-x-auto w-full md:w-auto pb-4 md:pb-0">
            {['All', 'Luxury', 'Sports', 'SUV', 'Electric'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 text-[10px] uppercase font-bold tracking-[0.3em] transition-all rounded-sm border ${
                  filter === cat 
                    ? 'bg-white text-black border-white' 
                    : 'bg-transparent text-white/40 border-white/10 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="SEARCH COLLECTION..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-sm py-3 pl-12 pr-4 text-[10px] uppercase tracking-[0.2em] text-white focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.length > 0 ? (
            filteredCars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))
          ) : (
            <div className="col-span-full py-32 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-sm">
                <span className="text-white/20 uppercase tracking-[0.5em] text-xs">No vehicles match your criteria</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
