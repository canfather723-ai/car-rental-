import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import CarDetail from './pages/CarDetail';
import Success from './pages/Success';
import About from './pages/About';
import Payments from './pages/Payments';
import Auth from './pages/Auth';
import Support from './pages/Support';
import Blog from './pages/Blog';
import Share from './pages/Share';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans selection:bg-brand-teal selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/about" element={<About />} />
            <Route path="/acquisition" element={<Payments />} />
            <Route path="/cars/:id" element={<CarDetail />} />
            <Route path="/success" element={<Success />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/signup" element={<Auth />} />
            <Route path="/support" element={<Support />} />
            <Route path="/faqs" element={<Support />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/share" element={<Share />} />
          </Routes>
        </main>
        
        <footer className="bg-[#1A5F6B] text-white pt-20 pb-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">Contact Info</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Impact hub 1aap Otswe Street , Accra, Ghana
                </p>
                <div className="mt-4 text-[10px] uppercase tracking-widest text-[#2CAEBA] font-bold">
                  Open Mon-Sat 9am-5pm
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">Company</h3>
                <ul className="space-y-4 text-sm text-white/60">
                   <li><Link to="/about" className="hover:text-white transition-colors">Terms of Service</Link></li>
                   <li><Link to="/about" className="hover:text-white transition-colors">Disclaimer</Link></li>
                   <li><Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                   <li><Link to="/about" className="hover:text-white transition-colors">Eligibility Requirement</Link></li>
                   <li><Link to="/about" className="hover:text-white transition-colors">Broker Insurance Policy</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">Support</h3>
                <ul className="space-y-4 text-sm text-white/60">
                   <li><Link to="/about" className="hover:text-white transition-colors">Account</Link></li>
                   <li><Link to="/about" className="hover:text-white transition-colors">Blog</Link></li>
                   <li><Link to="/about" className="hover:text-white transition-colors">Get in Touch</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">Social</h3>
                <div className="flex gap-4">
                  {[
                    { icon: 'f', bg: 'bg-[#3b5998]' },
                    { icon: 't', bg: 'bg-[#1da1f2]' },
                    { icon: 'i', bg: 'bg-[#e1306c]' },
                    { icon: 'y', bg: 'bg-[#ff0000]' }
                  ].map((s, i) => (
                    <div key={i} className={`w-10 h-10 ${s.bg} rounded-full flex items-center justify-center font-black uppercase text-xs cursor-pointer hover:scale-110 transition-transform`}>
                       {s.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-[10px] text-white/40 uppercase tracking-widest">
                Copyright © 2024 by WopeCar. All rights reserved.
              </p>
              <div className="flex gap-6 grayscale opacity-30">
                <span className="text-[8px] font-bold">VISA</span>
                <span className="text-[8px] font-bold">MASTERCARD</span>
                <span className="text-[8px] font-bold text-[#FFCC00]">MOMO</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

