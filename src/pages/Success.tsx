import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Car } from 'lucide-react';

export default function Success() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-6 text-white pt-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-[#111] border border-white/10 p-12 text-center rounded-sm"
      >
        <div className="w-20 h-20 bg-white/5 flex items-center justify-center rounded-full mx-auto mb-8 border border-white/10">
          <CheckCircle2 className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-4xl font-sans font-medium mb-4 tracking-tighter leading-tight">TRANSACTION COMPLETE</h1>
        <p className="text-white/40 mb-10 leading-relaxed font-light">
          Your reservation has been confirmed. Our team will contact you shortly to finalize the delivery details.
          {sessionId && <span className="block mt-4 text-[10px] uppercase font-mono tracking-widest opacity-50">Ref: {sessionId}</span>}
        </p>

        <div className="space-y-4">
          <Link
            to="/inventory"
            className="block w-full py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-colors rounded-sm"
          >
            Manage Bookings
          </Link>
          <Link
            to="/"
            className="flex items-center justify-center gap-2 w-full py-4 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-colors rounded-sm"
          >
           Return Home <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
