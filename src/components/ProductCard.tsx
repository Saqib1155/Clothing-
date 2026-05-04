import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingBag, Eye } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { Product } from '../data/products';
import { addItem, setCartOpen } from '../redux/cartSlice';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
      selectedSize: product.sizes[0],
      selectedColor: product.colors[0].name
    }));
    dispatch(setCartOpen(true));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#111] border border-white/5">
          {/* Main Image */}
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            referrerPolicy="no-referrer"
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-md flex items-center justify-center gap-4">
             <button 
              onClick={handleAddToCart}
              className="bg-white text-black p-4 rounded-full translate-y-6 group-hover:translate-y-0 transition-all duration-500 hover:bg-brand-accent shadow-2xl"
              title="Add to Bag"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
            </button>
            <div 
              className="glass-panel text-white p-4 rounded-full translate-y-6 group-hover:translate-y-0 transition-all duration-500 delay-75 shadow-2xl"
              title="Quick View"
            >
              <Eye size={20} strokeWidth={1.5} />
            </div>
          </div>

          {/* New/Trending Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <span className="text-[9px] uppercase tracking-[0.3em] bg-white text-black px-3 py-1 font-bold">New</span>
            )}
            {product.isTrending && (
              <span className="text-[9px] uppercase tracking-[0.3em] bg-brand-accent text-black px-3 py-1 font-bold">Trending</span>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-between items-start">
          <div>
            <h3 className="font-serif text-xl group-hover:italic transition-all tracking-tight">{product.name}</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-muted mt-2">{product.subCategory}</p>
          </div>
          <span className="text-lg font-light tracking-tighter">${product.price}</span>
        </div>
      </Link>
    </motion.div>
  );
}
