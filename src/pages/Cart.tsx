import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Trash2, Minus, Plus, ArrowRight, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { RootState } from '../redux/store';
import { removeItem, updateQuantity } from '../redux/cartSlice';

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="pt-40 pb-60 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
        >
          <h1 className="text-4xl italic mb-6">Your bag is as light as air.</h1>
          <p className="text-brand-muted italic mb-12">There are currently no pieces in your selection. Explore our latest collections to find something exceptional.</p>
          <Link 
            to="/shop" 
            className="inline-block bg-brand-ink text-brand-paper px-10 py-5 text-xs uppercase tracking-widest font-bold hover:rounded-2xl transition-all"
          >
            Start Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-40 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl mb-16">Shopping Bag</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Items List */}
          <div className="lg:col-span-8 space-y-12">
            <div className="hidden md:grid grid-cols-12 pb-6 border-b border-brand-ink/10 text-[10px] uppercase tracking-widest font-bold text-brand-muted">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
              <div className="col-span-2"></div>
            </div>

            {cartItems.map((item) => (
              <motion.div 
                layout
                key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                className="grid grid-cols-1 md:grid-cols-12 md:items-center gap-6 pb-12 border-b border-brand-ink/5 group"
              >
                {/* Product Info */}
                <div className="md:col-span-6 flex gap-6">
                   <div className="w-32 h-44 bg-brand-paper overflow-hidden border border-brand-ink/5">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
                   </div>
                   <div className="flex flex-col justify-center gap-1">
                      <Link to={`/product/${item.id}`} className="text-2xl font-serif hover:italic transition-all">{item.name}</Link>
                      <div className="text-[10px] uppercase tracking-widest text-brand-muted space-x-4">
                        <span>Size: {item.selectedSize}</span>
                        <span>Color: {item.selectedColor}</span>
                      </div>
                      <p className="text-sm font-medium mt-2">${item.price}</p>
                   </div>
                </div>

                {/* Quantity */}
                <div className="md:col-span-2 flex justify-center">
                   <div className="flex items-center border border-brand-ink/10 rounded-full px-3 py-1">
                      <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1, size: item.selectedSize, color: item.selectedColor }))} className="p-1 hover:text-brand-accent transition-colors"><Minus size={14} /></button>
                      <span className="px-5 font-bold text-sm w-12 text-center">{item.quantity}</span>
                      <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1, size: item.selectedSize, color: item.selectedColor }))} className="p-1 hover:text-brand-accent transition-colors"><Plus size={14} /></button>
                   </div>
                </div>

                {/* Total */}
                <div className="md:col-span-2 text-right">
                   <span className="text-lg font-serif">${item.price * item.quantity}</span>
                </div>

                {/* Remove */}
                <div className="md:col-span-2 flex justify-end">
                   <button 
                    onClick={() => dispatch(removeItem({ id: item.id, size: item.selectedSize, color: item.selectedColor }))}
                    className="text-brand-muted hover:text-red-500 transition-colors flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold"
                   >
                     <Trash2 size={14} /> <span className="md:hidden">Remove</span>
                   </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-4">
             <div className="bg-white p-8 md:p-10 border border-brand-ink/10 sticky top-32">
                <h3 className="text-2xl italic mb-8 pb-6 border-b border-brand-ink/5">Order Summary</h3>
                
                <div className="space-y-6 mb-10">
                   <div className="flex justify-between text-sm">
                      <span className="text-brand-muted italic">Subtotal</span>
                      <span className="font-medium">${subtotal}</span>
                   </div>
                   <div className="flex justify-between text-sm">
                      <span className="text-brand-muted italic">Express Shipping</span>
                      <span className="font-medium">{shipping === 0 ? 'Complimentary' : `$${shipping}`}</span>
                   </div>
                   <div className="flex justify-between text-sm">
                      <span className="text-brand-muted italic">Taxes</span>
                      <span className="font-medium">Calculated at Checkout</span>
                   </div>
                   <div className="pt-6 border-t border-brand-ink/5 flex justify-between items-center">
                      <span className="text-[10px] uppercase tracking-widest font-bold">Estimated Total</span>
                      <span className="text-2xl font-serif">${total}</span>
                   </div>
                </div>

                <div className="space-y-4">
                  <Link 
                    to="/checkout" 
                    className="flex w-full bg-brand-ink text-brand-paper py-5 text-xs uppercase tracking-widest font-bold items-center justify-center gap-3 hover:bg-brand-accent transition-all group hover:rounded-2xl shadow-lg"
                  >
                    Proceed to Checkout <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/shop" 
                    className="block w-full border border-brand-ink text-brand-ink py-5 text-center text-xs uppercase tracking-widest font-bold hover:bg-brand-ink hover:text-brand-paper transition-all hover:rounded-2xl"
                  >
                    Continue Shopping
                  </Link>
                </div>

                <div className="mt-12 space-y-6 pt-10 border-t border-brand-ink/5">
                   <div className="flex gap-4 items-center">
                      <ShieldCheck size={20} strokeWidth={1} className="text-brand-accent" />
                      <span className="text-[10px] uppercase tracking-widest font-bold">Secure Global Payments</span>
                   </div>
                   <div className="flex gap-4 items-center">
                      <Truck size={20} strokeWidth={1} className="text-brand-accent" />
                      <span className="text-[10px] uppercase tracking-widest font-bold">Tracking Provided on all Orders</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
