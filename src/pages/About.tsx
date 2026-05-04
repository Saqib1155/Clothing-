import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="py-20 flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
           <h1 className="text-6xl md:text-9xl leading-[0.8] mb-0">The<br /><span className="italic font-light">Atelier.</span></h1>
           <p className="text-brand-muted italic max-w-sm mb-4">
            Founded on the principles of permanence, Aeria is a sanctuary for those who value the art of slow living and intentional curation.
           </p>
        </div>

        {/* Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-40">
           <div className="h-[700px] overflow-hidden grayscale">
             <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200" alt="Process" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
           </div>
           <div className="space-y-12">
             <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-muted block">Our Mission</span>
                <h2 className="text-5xl italic leading-tight">Escape the Transient. Embrace the Eternal.</h2>
                <div className="space-y-6 text-brand-muted text-lg leading-relaxed">
                  <p>In an age of rapid consumption, we chose another path. Aeria was established in 2026 as a direct response to the ecological and spiritual cost of disposable fashion.</p>
                  <p>Our workshop is a place of rebellion. We rebel against planned obsolescence, against seasonal trends that expire in weeks, and against the dehumanization of craft.</p>
                </div>
             </div>
             <div className="grid grid-cols-2 gap-8 py-10 border-y border-brand-ink/5">
                <div>
                  <h4 className="text-3xl italic mb-4">100%</h4>
                  <p className="text-[10px] uppercase tracking-widest text-brand-muted font-bold">Natural Fibers</p>
                </div>
                <div>
                  <h4 className="text-3xl italic mb-4">Slow</h4>
                  <p className="text-[10px] uppercase tracking-widest text-brand-muted font-bold">Craft Process</p>
                </div>
             </div>
           </div>
        </div>

        {/* Values Section (Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="p-10 bg-brand-ink text-brand-paper">
             <span className="text-brand-accent text-3xl font-serif mb-6 block">01</span>
             <h3 className="text-2xl mb-4 italic">Material Honesty</h3>
             <p className="text-sm opacity-60 leading-relaxed">We source only pure materials—mulberry silk, virgin wool, and sustainably harvested linen. No blends. No shortcuts.</p>
           </div>
           <div className="p-10 border border-brand-ink/5">
             <span className="text-brand-accent text-3xl font-serif mb-6 block">02</span>
             <h3 className="text-2xl mb-4 italic">Ethical Tailoring</h3>
             <p className="text-sm text-brand-muted leading-relaxed">Every artisan in our supply chain is paid a living wage and works in an environment that respects their dignity and skill.</p>
           </div>
           <div className="p-10 border border-brand-ink/5">
             <span className="text-brand-accent text-3xl font-serif mb-6 block">03</span>
             <h3 className="text-2xl mb-4 italic">The Eternal Wardrobe</h3>
             <p className="text-sm text-brand-muted leading-relaxed">Aeria pieces are designed to be repaired and cherished. We offer complimentary repairs for all our garments, forever.</p>
           </div>
        </div>
      </div>
      
      {/* Visual Quote */}
      <div className="mt-40 py-40 bg-brand-ink text-brand-paper text-center px-6">
         <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-serif italic max-w-4xl mx-auto leading-tight"
         >
           "Style is a language that speaks of your existence without words."
         </motion.h2>
         <Link to="/shop" className="mt-12 inline-block text-xs uppercase tracking-widest font-bold border-b border-brand-paper pb-1 hover:text-brand-accent hover:border-brand-accent transition-all">
           Explore Collection
         </Link>
      </div>
    </motion.div>
  );
}
