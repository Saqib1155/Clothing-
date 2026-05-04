import { useSelector } from 'react-redux';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Lock, CreditCard, ChevronRight, Truck } from 'lucide-react';
import { RootState } from '../redux/store';

export default function Checkout() {
  const { items } = useSelector((state: RootState) => state.cart);
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  return (
    <div className="pt-32 pb-40 px-6 bg-brand-paper min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold mb-16">
          <Link to="/cart" className="text-brand-muted">Bag</Link>
          <ChevronRight size={12} className="text-brand-muted" />
          <span>Checkout</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form Side */}
          <div className="lg:col-span-7 space-y-12">
            <div>
               <h2 className="text-3xl italic mb-10">Contact & Shipping</h2>
               <form className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-brand-muted">First Name</label>
                       <input type="text" className="w-full border-b border-brand-ink/10 bg-transparent py-4 focus:outline-none focus:border-brand-ink" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-brand-muted">Last Name</label>
                       <input type="text" className="w-full border-b border-brand-ink/10 bg-transparent py-4 focus:outline-none focus:border-brand-ink" />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest font-bold text-brand-muted">Email for Tracking</label>
                     <input type="email" className="w-full border-b border-brand-ink/10 bg-transparent py-4 focus:outline-none focus:border-brand-ink" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest font-bold text-brand-muted">Shipping Address</label>
                     <input type="text" placeholder="House number and street" className="w-full border-b border-brand-ink/10 bg-transparent py-4 focus:outline-none focus:border-brand-ink" />
                  </div>
                  <div className="grid grid-cols-3 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-brand-muted">City</label>
                       <input type="text" className="w-full border-b border-brand-ink/10 bg-transparent py-4 focus:outline-none focus:border-brand-ink" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-brand-muted">Postal Code</label>
                       <input type="text" className="w-full border-b border-brand-ink/10 bg-transparent py-4 focus:outline-none focus:border-brand-ink" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-brand-muted">Country</label>
                       <input type="text" className="w-full border-b border-brand-ink/10 bg-transparent py-4 focus:outline-none focus:border-brand-ink" />
                    </div>
                  </div>
               </form>
            </div>

            <div className="pt-12 border-t border-brand-ink/5">
                <h2 className="text-3xl italic mb-10">Payment Method</h2>
                <div className="space-y-4">
                   <button className="w-full flex items-center justify-between p-6 border border-brand-ink/10 hover:border-brand-ink transition-all group">
                      <div className="flex items-center gap-4">
                         <CreditCard size={20} strokeWidth={1} />
                         <span className="text-[10px] uppercase tracking-widest font-bold">Credit or Debit Card</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-8 h-5 bg-brand-muted/10 rounded flex items-center justify-center">VISA</div>
                        <div className="w-8 h-5 bg-brand-muted/10 rounded flex items-center justify-center">MC</div>
                      </div>
                   </button>
                   <button className="w-full flex items-center justify-between p-6 border border-brand-ink/10 hover:border-brand-ink transition-all group">
                      <div className="flex items-center gap-4">
                         <div className="w-5 h-5 bg-brand-ink rounded-full" />
                         <span className="text-[10px] uppercase tracking-widest font-bold">Digital Wallet (Apple Pay/Google Pay)</span>
                      </div>
                   </button>
                </div>
            </div>

            <div className="pt-12">
               <button className="w-full bg-brand-ink text-brand-paper py-6 text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-4 hover:bg-brand-accent transition-all hover:rounded-2xl shadow-xl">
                 Finish and Pay <Lock size={16} />
               </button>
               <p className="text-[10px] text-brand-muted italic mt-6 text-center">Your transaction is secured with end-to-end encryption.</p>
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-5">
             <div className="sticky top-32 space-y-12">
                <div className="bg-white p-8 md:p-12 border border-brand-ink/5">
                   <h3 className="text-2xl font-serif mb-10 italic">Your Selection</h3>
                   <div className="space-y-8 max-h-[400px] overflow-y-auto pr-4 mb-10 no-scrollbar">
                      {items.map((item) => (
                        <div key={`${item.id}-${item.selectedSize}`} className="flex gap-6">
                           <div className="w-20 h-28 flex-shrink-0 bg-brand-paper overflow-hidden border border-brand-ink/5">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                           </div>
                           <div className="flex flex-col justify-center gap-1">
                              <h4 className="font-serif text-lg">{item.name}</h4>
                              <p className="text-[10px] uppercase tracking-widest text-brand-muted">Qty: {item.quantity} / {item.selectedSize} / {item.selectedColor}</p>
                              <p className="text-sm font-medium mt-2">${item.price * item.quantity}</p>
                           </div>
                        </div>
                      ))}
                   </div>

                   <div className="space-y-4 pt-10 border-t border-brand-ink/5">
                      <div className="flex justify-between text-xs">
                        <span className="text-brand-muted italic">Subtotal</span>
                        <span>${subtotal}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-brand-muted italic">Express Shipping</span>
                        <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                      </div>
                      <div className="flex justify-between items-center pt-4">
                        <span className="text-[10px] uppercase tracking-widest font-bold">Total Architecture</span>
                        <span className="text-3xl font-serif">${total}</span>
                      </div>
                   </div>
                </div>

                <div className="hidden lg:block space-y-6 px-12">
                   <div className="flex gap-4 items-center">
                     <Truck size={16} strokeWidth={1} className="text-brand-muted" />
                     <p className="text-[10px] uppercase tracking-[0.2em] text-brand-muted">Arrives in 2-4 business days.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
