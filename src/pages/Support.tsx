import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, HelpCircle, Phone, Mail, MessageSquare, ChevronDown } from 'lucide-react';

export default function Support() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    { q: "What do I need to rent a car?", a: "You'll need a valid driver's license (at least 2 years old), a national ID or passport, and a credit/debit card for the security deposit." },
    { q: "Is insurance included in the rental price?", a: "Standard insurance is included in the daily rental rate. We also offer premium coverage options for added peace of mind." },
    { q: "Can I cancel my reservation?", a: "Yes, you can cancel for a full refund up to 48 hours before your scheduled pickup time." },
    { q: "Do you offer delivery services?", a: "Yes, we offer doorstep delivery within Accra and Tema for a small additional fee." },
    { q: "What is the policy for buying cars on installments?", a: "Our installment plans require a 30% down payment, with the balance spread over 12 to 36 months at a fixed 10% APR." },
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-teal font-bold uppercase tracking-[0.3em] text-xs block mb-4">Concierge & Help</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-[#1A5F6B]">How can we help?</h1>
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search for articles, guides..." 
              className="w-full py-5 pl-16 pr-8 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-brand-teal transition-all text-brand-dark shadow-sm"
            />
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { icon: <Phone />, title: 'Call Us', detail: '+233 24 123 4567' },
            { icon: <Mail />, title: 'Email Support', detail: 'hello@wopecar.com' },
            { icon: <MessageSquare />, title: 'Live Chat', detail: 'Available 24/7' },
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-white border border-gray-100 rounded-2xl text-center hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#1A5F6B] group-hover:bg-[#1A5F6B] group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h3 className="font-bold text-[#1A5F6B] mb-2 uppercase tracking-widest text-xs">{item.title}</h3>
              <p className="text-gray-400 text-sm font-bold">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <HelpCircle className="text-brand-orange w-6 h-6" />
            <h2 className="text-2xl font-bold text-[#1A5F6B] uppercase tracking-widest">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden bg-white">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-[#1A5F6B]">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: activeFaq === idx ? 'auto' : 0, opacity: activeFaq === idx ? 1 : 0 }}
                  className="overflow-hidden"
                >
                   <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-gray-50">
                     {faq.a}
                   </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 p-12 bg-[#1A5F6B] rounded-3xl text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Still need assistance?</h2>
            <p className="opacity-70 mb-8 max-w-md mx-auto">Our specialized support team is ready to help you with your rental or acquisition journey.</p>
            <button className="px-10 py-4 bg-brand-teal text-white font-bold uppercase tracking-widest rounded-xl hover:bg-[#2598a3] transition-all shadow-lg">
              Open a Ticket
            </button>
        </div>
      </div>
    </div>
  );
}
