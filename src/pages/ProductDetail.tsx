import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Minus, Plus, ShoppingBag, Heart, Shield, RefreshCw, Truck } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { products, Product } from '../data/products';
import { addItem, setCartOpen } from '../redux/cartSlice';
import ProductCard from '../components/ProductCard';
import { cn } from '../lib/utils';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const found = products.find(p => p.id === id);
    if (found) {
      setProduct(found);
      setSelectedSize(found.sizes[0]);
      setSelectedColor(found.colors[0].name);
      setSelectedImage(0);
      window.scrollTo(0, 0);
    }
  }, [id]);

  if (!product) return (
    <div className="h-screen flex items-center justify-center">
      <p className="text-brand-muted italic animate-pulse">Searching the Atelier...</p>
    </div>
  );

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    dispatch(addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
      selectedSize,
      selectedColor
    }));
    dispatch(setCartOpen(true));
  };

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-muted mb-12">
          <Link to="/" className="hover:text-brand-ink transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to="/shop" className="hover:text-brand-ink transition-colors">Shop</Link>
          <ChevronRight size={10} />
          <Link to={`/shop?cat=${product.category.toLowerCase()}`} className="hover:text-brand-ink transition-colors">{product.category}</Link>
          <ChevronRight size={10} />
          <span className="text-brand-ink font-bold">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Images Section */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4">
            <div className="col-span-2 space-y-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={cn(
                    "aspect-[3/4] p-1 border transition-all duration-500",
                    selectedImage === idx ? "border-brand-ink" : "border-transparent opacity-50 hover:opacity-100"
                  )}
                >
                  <img src={img} alt={product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
            <div className="col-span-10">
              <motion.div 
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="aspect-[3/4] bg-brand-paper border border-brand-ink/5 overflow-hidden group cursor-zoom-in"
              >
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>

          {/* Info Section */}
          <div className="lg:col-span-5 flex flex-col pt-4">
             <div className="border-b border-brand-ink/5 pb-8 mb-8">
               {product.isNew && <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-accent mb-4 block">New Arrival</span>}
               <h1 className="text-4xl md:text-5xl mb-4">{product.name}</h1>
               <p className="text-xl font-serif text-brand-muted">${product.price}</p>
             </div>

             <div className="space-y-8">
               {/* Color Selection */}
               <div>
                 <span className="text-[10px] uppercase tracking-widest font-bold mb-4 block">Color: <span className="text-brand-muted font-normal">{selectedColor}</span></span>
                 <div className="flex gap-4">
                   {product.colors.map((color) => (
                     <button 
                       key={color.name}
                       onClick={() => setSelectedColor(color.name)}
                       title={color.name}
                       className={cn(
                         "w-8 h-8 rounded-full border-2 transition-all p-0.5",
                         selectedColor === color.name ? "border-brand-ink scale-110" : "border-transparent opacity-60 hover:opacity-100"
                       )}
                     >
                       <div className="w-full h-full rounded-full" style={{ backgroundColor: color.hex }} />
                     </button>
                   ))}
                 </div>
               </div>

               {/* Size Selection */}
               <div>
                 <div className="flex justify-between items-center mb-4">
                   <span className="text-[10px] uppercase tracking-widest font-bold">Select Size: <span className="text-brand-muted font-normal">{selectedSize}</span></span>
                   <button className="text-[10px] uppercase tracking-widest font-bold border-b border-brand-ink/20 text-brand-muted hover:text-brand-ink transition-colors">Size Guide</button>
                 </div>
                 <div className="grid grid-cols-4 gap-3">
                   {product.sizes.map((size) => (
                     <button 
                       key={size}
                       onClick={() => setSelectedSize(size)}
                       className={cn(
                         "py-4 text-[11px] uppercase tracking-[0.2em] font-bold border transition-all",
                         selectedSize === size 
                          ? "bg-white text-black border-white" 
                          : "border-white/10 text-brand-muted hover:border-white hover:text-white"
                       )}
                     >
                       {size}
                     </button>
                   ))}
                 </div>
               </div>

               {/* Add to Cart Actions */}
               <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <div className="flex items-center border border-white/10 px-4 py-4 justify-between sm:w-36 glass-panel">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1 hover:text-brand-accent transition-colors"><Minus size={14} /></button>
                    <span className="font-bold text-sm tracking-widest">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="p-1 hover:text-brand-accent transition-colors"><Plus size={14} /></button>
                  </div>
                  <button 
                    onClick={handleAddToCart}
                    className="flex-grow bg-white text-black py-5 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-brand-accent transition-all flex items-center justify-center gap-4 group hover:border-brand-accent border border-white shadow-xl"
                  >
                    <ShoppingBag size={20} className="group-hover:-translate-y-1 transition-transform" />
                    Reserve in Bag
                  </button>
                  <button className="border border-white/10 p-5 hover:border-brand-accent hover:text-brand-accent transition-colors glass-panel">
                    <Heart size={20} strokeWidth={1} />
                  </button>
               </div>

               {/* Minimalist Details */}
               <div className="pt-8 border-t border-brand-ink/5">
                 <p className="text-brand-muted italic leading-relaxed mb-8">{product.description}</p>
                 <ul className="space-y-4">
                   {product.details.map((detail, idx) => (
                     <li key={idx} className="flex gap-4 text-xs italic text-brand-muted">
                        <span className="text-brand-ink/20">0{idx + 1}</span>
                        <span>{detail}</span>
                     </li>
                   ))}
                 </ul>
               </div>

               {/* Value Props */}
               <div className="grid grid-cols-2 gap-4 pt-12 border-t border-brand-ink/5">
                  <div className="flex gap-3 items-start">
                    <Truck size={18} strokeWidth={1} className="text-brand-muted" />
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-widest">Free Express Shipping</p>
                      <p className="text-[10px] text-brand-muted italic">Orders over $500</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <RefreshCw size={18} strokeWidth={1} className="text-brand-muted" />
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-widest">30-Day Returns</p>
                      <p className="text-[10px] text-brand-muted italic">Complimentary returns</p>
                    </div>
                  </div>
               </div>
             </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-40 border-t border-brand-ink/5 pt-20">
            <h2 className="text-4xl italic text-center mb-20">You Might Also Adore</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
