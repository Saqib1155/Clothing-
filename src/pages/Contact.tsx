import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Send, MapPin, Phone, Mail, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="py-20 border-b border-brand-ink/5 mb-20">
           <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-muted mb-4 block">Dialogue</span>
           <h1 className="text-6xl md:text-8xl">Connect with us.</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
           {/* Left: Contact Info */}
           <div className="space-y-16">
              <div className="space-y-8">
                 <p className="text-brand-muted italic text-lg leading-relaxed max-w-md">
                   Our concierge is available for personalized styling appointments, sizing inquiries, or feedback on our collections.
                 </p>
                 <div className="flex gap-4">
                    <Link to="#" className="w-10 h-10 border border-brand-ink/10 rounded-full flex items-center justify-center hover:bg-brand-ink hover:text-brand-paper transition-all"><Instagram size={18} strokeWidth={1} /></Link>
                    <Link to="#" className="w-10 h-10 border border-brand-ink/10 rounded-full flex items-center justify-center hover:bg-brand-ink hover:text-brand-paper transition-all"><Twitter size={18} strokeWidth={1} /></Link>
                 </div>
              </div>

              <div className="space-y-10">
                 <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white flex items-center justify-center border border-brand-ink/5"><MapPin size={20} strokeWidth={1} /></div>
                    <div className="space-y-2">
                       <h4 className="text-[10px] uppercase tracking-widest font-bold">Studio HQ</h4>
                       <p className="text-sm text-brand-muted italic">12 Via della Spiga, Milan, IT 20121</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white flex items-center justify-center border border-brand-ink/5"><Mail size={20} strokeWidth={1} /></div>
                    <div className="space-y-2">
                       <h4 className="text-[10px] uppercase tracking-widest font-bold">Press & Atelier</h4>
                       <p className="text-sm text-brand-muted italic underline">dialogue@aeriatelier.com</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white flex items-center justify-center border border-brand-ink/5"><Phone size={20} strokeWidth={1} /></div>
                    <div className="space-y-2">
                       <h4 className="text-[10px] uppercase tracking-widest font-bold">Customer Care</h4>
                       <p className="text-sm text-brand-muted italic underline">+39 02 1234 5678</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Right: Form */}
           <div className="bg-white p-8 md:p-12 border border-brand-ink/5 shadow-sm">
             <form className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-muted">Name</label>
                    <input type="text" className="w-full border-b border-brand-ink/10 py-3 focus:border-brand-ink transition-all focus:outline-none placeholder:text-brand-muted/30" placeholder="Aurelia Bianchi" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-muted">Email</label>
                    <input type="email" className="w-full border-b border-brand-ink/10 py-3 focus:border-brand-ink transition-all focus:outline-none placeholder:text-brand-muted/30" placeholder="aurelia@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-muted">Subject</label>
                    <select className="w-full border-b border-brand-ink/10 py-3 focus:border-brand-ink transition-all focus:outline-none bg-transparent">
                       <option>Styling Appointment</option>
                       <option>Press Inquiry</option>
                       <option>Bespoke Orders</option>
                       <option>Other</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-muted">Your Message</label>
                    <textarea rows={4} className="w-full border border-brand-ink/10 p-4 focus:border-brand-ink transition-all focus:outline-none placeholder:text-brand-muted/30 resize-none" placeholder="How can we assist your journey?"></textarea>
                </div>
                <button className="w-full bg-brand-ink text-brand-paper py-5 text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-4 hover:bg-brand-accent transition-all group hover:rounded-2xl">
                  Send Message <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
             </form>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
