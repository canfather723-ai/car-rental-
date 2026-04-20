import { StrictMode, Key } from 'react';
import { motion } from 'motion/react';
import { Car } from '../types';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CarCardProps {
  car: Car;
  index: number;
  key?: Key;
}

export default function CarCard({ car, index }: CarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-[#111] border border-white/5 overflow-hidden rounded-sm hover:border-white/20 transition-all duration-500"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 block mb-1">{car.category}</span>
            <h3 className="text-xl font-sans font-medium text-white tracking-tight">
              {car.make} <span className="text-white/60">{car.model}</span>
            </h3>
          </div>
          <div className="text-right">
            <span className="text-xs text-white/40 uppercase tracking-widest block mb-1">From</span>
            <span className="text-lg font-mono text-white">${car.priceRent}<span className="text-xs text-white/40">/day</span></span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pb-6 border-b border-white/5 mb-6">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-white/30 mb-1">Acceleration</span>
            <span className="text-xs text-white/80">{car.specs.acceleration}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-white/30 mb-1">Top Speed</span>
            <span className="text-xs text-white/80">{car.specs.topSpeed}</span>
          </div>
        </div>

        <Link
          to={`/cars/${car.id}`}
          className="flex items-center justify-between w-full group/btn text-white/60 hover:text-white transition-colors"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em]">View Details</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
