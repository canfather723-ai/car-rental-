import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Car } from 'lucide-react';

export default function Success() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-6 text-brand-dark pt-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white border border-gray-100 p-12 text-center rounded-3xl shadow-2xl"
      >
        <div className="w-20 h-20 bg-green-50 flex items-center justify-center rounded-full mx-auto mb-8 border border-green-100">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4 tracking-tight leading-tight text-[#1A5F6B]">RESERVATION CONFIRMED</h1>
        <p className="text-gray-400 mb-10 leading-relaxed font-light">
          Your transaction has been finalized. Excellence awaits. Our team will contact you shortly to coordinate your experience.
          {sessionId && <span className="block mt-4 text-[10px] uppercase font-bold tracking-widest opacity-50">Ref: {sessionId}</span>}
        </p>

        <div className="space-y-4">
          <Link
            to="/inventory"
            className="block w-full py-5 bg-brand-teal text-white font-bold uppercase text-xs tracking-widest hover:bg-[#2598a3] transition-all rounded-xl shadow-lg shadow-brand-teal/20"
          >
            Manage Bookings
          </Link>
          <Link
            to="/"
            className="flex items-center justify-center gap-2 w-full py-5 border border-gray-100 text-gray-400 text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-all rounded-xl"
          >
           Return Home <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
