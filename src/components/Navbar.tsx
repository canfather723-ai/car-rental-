import { Link } from 'react-router-dom';
import { Car, ShoppingBag, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm">
            <Car className="text-black w-6 h-6" />
          </div>
          <span className="text-white font-sans font-bold text-xl tracking-tighter uppercase">AUTOELITE</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest text-white/70 uppercase">
          <Link to="/inventory" className="hover:text-white transition-colors">Inventory</Link>
          <Link to="/acquisition" className="hover:text-white transition-colors">Acquisition</Link>
          <Link to="/about" className="hover:text-white transition-colors">The Experience</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
          <button className="hidden md:flex px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-colors rounded-sm">
            Reserve Now
          </button>
        </div>
      </div>
    </nav>
  );
}
