import { motion } from 'motion/react';

export default function Loader() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
      className="fixed inset-0 z-[1000] bg-[#0c0c0c] flex items-center justify-center p-6"
    >
      <div className="flex flex-col items-center gap-12">
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl font-serif tracking-[0.3em] uppercase font-light italic text-white"
          >
            Aeria
          </motion.h1>
        </div>
        <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
           <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-brand-accent"
           />
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-[9px] uppercase tracking-[0.5em] font-medium text-brand-accent italic"
        >
          Studio d'Excellence
        </motion.p>
      </div>
    </motion.div>
  );
}
