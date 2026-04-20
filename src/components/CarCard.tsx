import { Key } from 'react';
import { motion } from 'motion/react';
import { Car } from '../types';
import { Link } from 'react-router-dom';
import { Heart, Users, Briefcase, Settings2, Layout, ArrowRight } from 'lucide-react';

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
      className="bg-white group overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
    >
      <Link to={`/cars/${car.id}`} className="block relative aspect-[16/11] overflow-hidden bg-gray-50">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-brand-orange transition-all shadow-sm">
          <Heart className="w-4 h-4" />
        </button>
      </Link>

      <div className="p-6">
        <div className="flex flex-col gap-1 mb-6">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{car.location}</span>
          <h3 className="text-xl font-bold text-[#1A5F6B] uppercase tracking-wide">
            {car.make} <span className="font-semibold opacity-80">{car.model}</span>
          </h3>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-8">
          <div className="flex flex-col items-center gap-2 p-2 rounded-sm border border-gray-100 bg-gray-50/50">
            <Users className="w-4 h-4 text-[#1A5F6B]/60" />
            <span className="text-[10px] font-bold text-gray-400">{car.seats}</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-2 rounded-sm border border-gray-100 bg-gray-50/50">
            <Briefcase className="w-4 h-4 text-[#1A5F6B]/60" />
            <span className="text-[10px] font-bold text-gray-400">{car.luggage}</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-2 rounded-sm border border-gray-100 bg-gray-50/50">
            <Settings2 className="w-4 h-4 text-[#1A5F6B]/60" />
            <span className="text-[9px] font-bold text-gray-400 capitalize truncate w-full text-center">{car.specs.transmission}</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-2 rounded-sm border border-gray-100 bg-gray-50/50">
            <Layout className="w-4 h-4 text-[#1A5F6B]/60" />
            <span className="text-[10px] font-bold text-gray-400">{car.doors}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-6 border-t border-gray-100 mt-auto">
          <Link 
            to={`/cars/${car.id}`}
            className="flex items-center justify-center gap-2 py-4 bg-brand-teal text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-[#2598a3] transition-all shadow-lg shadow-brand-teal/10"
          >
            Rent <ArrowRight className="w-3 h-3" />
          </Link>
          <Link 
            to={`/cars/${car.id}`}
            className="flex items-center justify-center gap-2 py-4 border-2 border-[#1A5F6B] text-[#1A5F6B] text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-[#1A5F6B] hover:text-white transition-all"
          >
            Buy <Layout className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
