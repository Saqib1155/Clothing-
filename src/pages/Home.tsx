import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { products } from '../data/products';
import { collections } from '../data/collections';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const trendingProducts = products.filter(p => p.isTrending).slice(0, 4);

  return (
    <div className="bg-brand-paper">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center px-6 md:px-12">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: [0.33, 1, 0.68, 1] }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover brightness-[0.85]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto w-full pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-[11px] uppercase tracking-[0.5em] font-medium text-brand-accent mb-6 block">Autumn / Winter 2026</span>
            <h1 className="text-[10vw] md:text-9xl text-white mb-10 leading-[0.85] -ml-2 italic font-serif">
              Ethereal<br />
              <span className="font-light not-italic">Sculptures.</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <Link 
                to="/shop" 
                className="bg-white text-black px-12 py-5 text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-transparent hover:text-white border border-white transition-all shadow-2xl"
              >
                Shop the Collection
              </Link>
              <button className="flex items-center gap-4 text-white group hover:text-brand-accent transition-colors">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-accent transition-all">
                  <Play size={18} fill="currentColor" />
                </div>
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold">The Atelier Film</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Collection Status (Frosted Glass) */}
        <div className="absolute bottom-12 right-12 hidden lg:block">
          <div className="glass-panel p-6 w-56">
            <div className="flex gap-4 items-start">
               <div className="w-12 h-16 bg-[url('https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=1000')] bg-cover grayscale" />
               <div>
                 <p className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Next Piece</p>
                 <p className="text-[12px] font-serif italic text-white">Silk Drape Coat</p>
               </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
          <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-white/50">Scroll</span>
        </motion.div>
      </section>

      {/* Featured Collections Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl mb-6">Curated Collections</h2>
              <p className="text-brand-muted italic leading-relaxed">
                Discover pieces designed for versatility and longevity. Our seasonal edits focus on the intersection of form and function.
              </p>
            </div>
            <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-brand-ink pb-1 font-bold group flex items-center gap-2">
              Explore All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, idx) => (
              <motion.div 
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[600px] overflow-hidden"
              >
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-10 left-10 right-10">
                  <span className="text-[10px] uppercase tracking-widest text-white/70 mb-2 block">{collection.subtitle}</span>
                  <h3 className="text-3xl text-white mb-4 italic">{collection.title}</h3>
                  <Link 
                    to={collection.link} 
                    className="opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500 text-xs text-white uppercase tracking-widest border-b border-white pb-1"
                  >
                    View Lookbook
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-32 bg-brand-ink text-brand-paper overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-muted mb-4 block">Most Desired</span>
             <h2 className="text-4xl md:text-6xl italic">Trending Now</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingProducts.map((product) => (
              <div key={product.id} className="text-brand-paper">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story (Minimalist) */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1200" 
              alt="Atelier" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-muted mb-6 block">Our Atelier</span>
            <h2 className="text-5xl mb-8 leading-tight">Crafting Permanence in a Transient World.</h2>
            <div className="space-y-6 text-brand-muted leading-relaxed italic">
              <p>Founded in 2026, Aeria was born from the desire to escape the frantic cycles of fast fashion. We believe in the quiet luxury of high-quality materials and intentional design.</p>
              <p>Every piece is a dialogue between traditional craftsmanship and modern utility—created to be worn, loved, and passed down.</p>
            </div>
            <Link to="/about" className="mt-12 inline-block text-xs uppercase tracking-widest border-b border-brand-ink pb-1 font-bold">
              Read Our Manifesto
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 border-t border-brand-ink/5">
        <div className="max-w-2xl mx-auto text-center px-6">
          <h2 className="text-4xl italic mb-8">Join the Atelier</h2>
          <p className="text-brand-muted mb-12">Submit your email to receive early access to seasonal drops and exclusive collection previews.</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="flex-grow bg-white border border-brand-ink/10 px-6 py-4 text-sm focus:outline-none focus:border-brand-accent transition-colors"
            />
            <button className="bg-brand-ink text-white px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-brand-accent transition-all">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-brand-muted mt-6 uppercase tracking-widest">Minimalist content. Maximum respect for your inbox.</p>
        </div>
      </section>
    </div>
  );
}
