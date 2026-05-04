import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-brand-paper py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Brand Info */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-serif tracking-[0.2em] uppercase font-semibold mb-6 block">
            Aeria
          </Link>
          <p className="text-brand-muted text-sm leading-relaxed max-w-[200px]">
            Defined by elegance, tailored for the modern aesthetic.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] mb-6 text-brand-muted">Shop</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link to="/shop?cat=men" className="hover:text-brand-accent transition-colors">Men</Link></li>
            <li><Link to="/shop?cat=women" className="hover:text-brand-accent transition-colors">Women</Link></li>
            <li><Link to="/shop?cat=accessories" className="hover:text-brand-accent transition-colors">Accessories</Link></li>
            <li><Link to="/shop?cat=new" className="hover:text-brand-accent transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] mb-6 text-brand-muted">Company</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link to="/about" className="hover:text-brand-accent transition-colors">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-brand-accent transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] mb-6 text-brand-muted">Newsletter</h4>
          <p className="text-xs text-brand-muted mb-4 italic">Sign up for collection drops and atelier updates.</p>
          <div className="flex border-b border-brand-paper/20 pb-2">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-brand-muted/50"
            />
            <button className="text-xs uppercase tracking-widest font-bold ml-2">Join</button>
          </div>
          <div className="flex gap-4 mt-8">
            <Instagram size={18} strokeWidth={1.5} className="cursor-pointer hover:text-brand-accent transition-all" />
            <Twitter size={18} strokeWidth={1.5} className="cursor-pointer hover:text-brand-accent transition-all" />
            <Facebook size={18} strokeWidth={1.5} className="cursor-pointer hover:text-brand-accent transition-all" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-brand-paper/5 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-brand-muted">
        <p>© 2026 Aeria Studio. All rights reserved.</p>
        <p>Made for the Exceptional.</p>
      </div>
    </footer>
  );
}
