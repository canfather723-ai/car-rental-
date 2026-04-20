import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Top 5 Scenic Drives in Ghana You Must Experience',
      excerpt: 'From the rolling hills of the Volta Region to the coastal roads of the West, discover the most beautiful routes...',
      author: 'Ekow Thompson',
      date: 'April 15, 2026',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
      category: 'Travel'
    },
    {
      id: 2,
      title: 'Why Buying Your Next Car on Installments Makes Sense',
      excerpt: 'Explore the financial benefits of installment plans vs full purchase in the current Ghanaian economic landscape...',
      author: 'Benjamin Mensah',
      date: 'April 10, 2026',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
      category: 'Finance'
    },
    {
      id: 3,
      title: 'Maintaining Your Luxury Vehicle in Tropical Climates',
      excerpt: 'Heat and humidity can be tough on high-performance cars. Learn the essential maintenance tips to keep your car elite...',
      author: 'Sarah Owusu',
      date: 'April 05, 2026',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800',
      category: 'Maintenance'
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-brand-teal font-bold uppercase tracking-[0.3em] text-xs block mb-4">AutoElite Blog</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1A5F6B]">THE EXPERIENCE</h1>
          <div className="w-24 h-1 bg-brand-orange mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-6 shadow-lg border border-gray-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-brand-orange">{post.category}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span className="text-gray-400">{post.date}</span>
                </div>

                <h2 className="text-2xl font-bold text-[#1A5F6B] leading-tight group-hover:text-brand-teal transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                   <div className="flex items-center gap-2">
                     <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-[10px] font-bold text-brand-teal">
                        {post.author.charAt(0)}
                     </div>
                     <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{post.author}</span>
                   </div>
                   <Link to={`/blog/${post.id}`} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#1A5F6B]">
                     Read More <ArrowRight className="w-3 h-3" />
                   </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-24 py-16 border-t border-gray-100 text-center">
           <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-gray-300 mb-8">Stay updated with our newsletter</h2>
           <div className="max-w-md mx-auto relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full py-4 px-6 rounded-full bg-gray-50 border border-gray-100 focus:outline-none focus:border-brand-teal transition-all text-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 px-6 bg-brand-teal text-white rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-[#2598a3] transition-all">
                Join
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
