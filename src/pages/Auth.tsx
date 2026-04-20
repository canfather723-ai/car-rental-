import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Lock, User, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-24 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
      >
        <div className="p-10">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-[#1A5F6B] mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-gray-400 text-sm">
              {isLogin ? 'Access your fleet and reservations' : 'Join the elite rental community'}
            </p>
          </div>

          <div className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full py-4 pl-12 pr-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-brand-teal transition-all text-brand-dark"
                />
              </div>
            )}
            
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full py-4 pl-12 pr-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-brand-teal transition-all text-brand-dark"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full py-4 pl-12 pr-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-brand-teal transition-all text-brand-dark"
              />
            </div>

            <button 
              onClick={() => navigate('/')}
              className="w-full py-4 bg-brand-teal text-white font-bold uppercase tracking-widest rounded-xl hover:bg-[#2598a3] transition-all shadow-lg shadow-brand-teal/20 flex items-center justify-center gap-2"
            >
              {isLogin ? 'Login' : 'Sign Up'} <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-gray-400 font-bold tracking-widest">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all font-bold text-xs uppercase tracking-widest text-[#1A5F6B]">
              <div className="w-4 h-4 bg-red-500 rounded-full" /> Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all font-bold text-xs uppercase tracking-widest text-[#1A5F6B]">
              <Github className="w-4 h-4" /> Github
            </button>
          </div>
        </div>

        <div className="p-6 bg-gray-50 text-center border-t border-gray-100">
           <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-xs font-bold uppercase tracking-widest text-brand-teal hover:text-[#2598a3] transition-colors"
           >
             {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
           </button>
        </div>
      </motion.div>
    </div>
  );
}
