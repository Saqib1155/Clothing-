import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { RootState } from '../redux/store';
import { toggleCart } from '../redux/cartSlice';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop?tab=collections' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 py-8",
        isScrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/10 py-5" : "bg-gradient-to-b from-black/80 to-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.slice(0, 2).map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-[11px] uppercase tracking-[0.2em] font-medium hover:text-brand-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Center: Logo */}
        <Link 
          to="/" 
          className="text-2xl font-serif tracking-[0.25em] uppercase italic font-medium"
        >
          Aeria
        </Link>

        {/* Right: Actions */}
        <div className="flex items-center gap-6 md:gap-10">
           <div className="hidden md:flex items-center gap-10">
            {navLinks.slice(2).map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-[11px] uppercase tracking-[0.2em] font-medium hover:text-brand-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <button className="p-2 hover:text-brand-accent transition-colors flex items-center gap-2">
            <Search size={18} strokeWidth={1.5} />
          </button>
          
          <button 
            onClick={() => dispatch(toggleCart())}
            className="p-2 flex items-center gap-3 group transition-colors"
          >
            <div className="w-5 h-5 border border-white/30 rounded-full flex items-center justify-center group-hover:border-brand-accent transition-colors">
              {cartCount > 0 ? (
                <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse"></div>
              ) : (
                <div className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
              )}
            </div>
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium group-hover:text-brand-accent">Bag ({cartCount})</span>
          </button>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} strokeWidth={1} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-brand-paper z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-xl font-serif tracking-widest uppercase">Aeria</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} strokeWidth={1} />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                   className="text-3xl font-serif hover:italic transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
