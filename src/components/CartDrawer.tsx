import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { RootState } from '../redux/store';
import { setCartOpen, removeItem, updateQuantity } from '../redux/cartSlice';

export default function CartDrawer() {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state: RootState) => state.cart);
  
  const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(setCartOpen(false))}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md backdrop-blur-2xl bg-black/80 border-l border-white/10 z-[101] shadow-2xl flex flex-col text-brand-ink"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex justify-between items-center">
              <h2 className="text-2xl font-serif italic">Your Bag ({items.length})</h2>
              <button onClick={() => dispatch(setCartOpen(false))} className="hover:text-brand-accent transition-colors">
                <X size={24} strokeWidth={1} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-grow overflow-y-auto p-8 space-y-8 no-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-6">
                  <p className="text-brand-muted italic text-sm">Your bag is as light as space.</p>
                  <Link 
                    to="/shop" 
                    onClick={() => dispatch(setCartOpen(false))}
                    className="text-[10px] uppercase tracking-[0.3em] border-b border-brand-accent pb-1 font-bold text-brand-accent hober:text-white transition-all"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                items.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-6 group">
                    <div className="w-20 h-28 bg-white/5 border border-white/5 overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-grow flex flex-col justify-between py-1">
                      <div>
                        <Link 
                          to={`/product/${item.id}`} 
                          onClick={() => dispatch(setCartOpen(false))}
                          className="font-serif text-lg hover:italic hover:text-brand-accent transition-all"
                        >
                          {item.name}
                        </Link>
                        <div className="text-[9px] uppercase tracking-[0.2em] text-brand-muted mt-2 space-x-4 font-semibold">
                          <span>{item.selectedSize}</span>
                          <span>{item.selectedColor}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-white/10 rounded-full py-1 px-2 glass-panel">
                          <button 
                            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1, size: item.selectedSize, color: item.selectedColor }))}
                            className="p-1 hover:text-brand-accent transition-colors"
                          >
                            <Minus size={10} strokeWidth={1.5} />
                          </button>
                          <span className="px-3 text-[10px] font-bold">{item.quantity}</span>
                          <button 
                             onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1, size: item.selectedSize, color: item.selectedColor }))}
                            className="p-1 hover:text-brand-accent transition-colors"
                          >
                            <Plus size={10} strokeWidth={1.5} />
                          </button>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-light tracking-tighter">${item.price * item.quantity}</span>
                          <button 
                            onClick={() => dispatch(removeItem({ id: item.id, size: item.selectedSize, color: item.selectedColor }))}
                            className="text-brand-muted hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={14} strokeWidth={1.5} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-8 border-t border-white/5 bg-black/40 space-y-6 backdrop-blur-md">
                <div className="flex justify-between items-center text-brand-muted uppercase text-[10px] tracking-[0.3em] font-bold">
                  <span>Subtotal</span>
                  <span className="text-brand-ink text-xl font-serif tracking-normal font-normal italic">${totalPrice}</span>
                </div>
                <div className="space-y-4">
                  <Link 
                    to="/checkout" 
                    onClick={() => dispatch(setCartOpen(false))}
                    className="block w-full bg-white text-black py-5 text-center text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-brand-accent transition-all border border-white hover:border-brand-accent"
                  >
                    Proceed to Checkout
                  </Link>
                  <Link 
                    to="/cart" 
                    onClick={() => dispatch(setCartOpen(false))}
                    className="block w-full border border-white/20 text-white py-5 text-center text-[11px] uppercase tracking-[0.25em] font-bold hover:border-white transition-all backdrop-blur-sm"
                  >
                    Review Order
                  </Link>
                </div>
                <p className="text-[9px] text-center text-brand-muted italic tracking-wide">Complimentary global delivery on orders over $500.</p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
