import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import CarDetail from './pages/CarDetail';
import Success from './pages/Success';
import About from './pages/About';
import Payments from './pages/Payments';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black font-sans selection:bg-white selection:text-black">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/about" element={<About />} />
            <Route path="/acquisition" element={<Payments />} />
            <Route path="/cars/:id" element={<CarDetail />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </main>
        
        <footer className="bg-black border-t border-white/5 py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <span className="text-white font-bold tracking-tighter uppercase text-xl italic">AUTOELITE</span>
              <p className="text-white/20 text-[10px] uppercase tracking-widest">© 2024 AUTOELITE RENTAL & SALES. ALL RIGHTS RESERVED.</p>
            </div>
            
            <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <Link to="/acquisition" className="hover:text-white transition-colors">Payments</Link>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-6 grayscale opacity-20 hover:opacity-40 transition-opacity">
            <span className="text-[8px] uppercase tracking-widest font-bold">Encrypted via Stripe</span>
            <span className="text-[8px] uppercase tracking-widest font-bold">Mobile Money Supported</span>
            <span className="text-[8px] uppercase tracking-widest font-bold">Visa / Mastercard</span>
            <span className="text-[8px] uppercase tracking-widest font-bold">Apple Pay</span>
          </div>
        </footer>
      </div>
    </Router>
  );
}

