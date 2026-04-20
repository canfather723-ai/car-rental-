import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, ShoppingCart, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Login', path: '/login' },
    { name: 'Sign Up', path: '/signup' },
    { name: 'GHS', path: '#', sub: true },
    { name: 'Support', path: '/support' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Cart', path: '/inventory', badge: 0 },
    { name: 'Book a Car', path: '/inventory' },
    { name: 'Share Your Car', path: '/share' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={() => setIsOpen(true)} className="p-2 text-brand-dark">
            <Menu className="w-6 h-6" />
          </button>
          
          <Link to="/" className="flex flex-col items-center group">
            <div className="relative w-10 h-10 flex items-center justify-center">
               <div className="absolute inset-0 bg-brand-orange/20 rounded-full scale-110 group-hover:scale-125 transition-transform" />
               <div className="absolute inset-0 bg-brand-teal/20 rounded-full -translate-x-1 translate-y-1 scale-110 group-hover:scale-125 transition-transform" />
               <Heart className="w-6 h-6 text-brand-teal fill-brand-teal z-10" />
            </div>
          </Link>
          
          <div className="flex items-center gap-3">
            <Link to="/login" className="p-2 text-gray-400 hover:text-brand-teal transition-colors">
              <User className="w-6 h-6" />
            </Link>
            <div className="relative">
               <Link to="/inventory" className="p-2 text-gray-400 hover:text-brand-teal transition-colors">
                <ShoppingCart className="w-6 h-6" />
              </Link>
              <span className="absolute top-1 right-1 bg-brand-orange text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold shadow-sm ring-2 ring-white">0</span>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60]"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white z-[70] shadow-2xl overflow-y-auto"
            >
              <div className="bg-[#1A5F6B] p-6 flex justify-between items-center text-white">
                 <div className="w-8 h-8 rounded-full border-2 border-white/50 flex items-center justify-center">
                    <motion.div whileTap={{ scale: 0.9 }}>
                       <X onClick={() => setIsOpen(false)} className="w-5 h-5 cursor-pointer" />
                    </motion.div>
                 </div>
              </div>
              <div className="pt-4">
                {menuItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="flex justify-between items-center px-6 py-4 border-b border-gray-50 text-[15px] font-medium text-brand-dark hover:bg-gray-50 transition-colors"
                  >
                    <span>{item.name}</span>
                    {item.sub && <span className="text-gray-400 text-xs">›</span>}
                    {item.badge !== undefined && (
                      <span className="bg-brand-orange text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-sm font-bold">{item.badge}</span>
                    )}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
