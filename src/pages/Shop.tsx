import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, ChevronDown, LayoutGrid, List } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { cn } from '../lib/utils';

type Category = 'All' | 'Men' | 'Women' | 'Accessories';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('Newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories: Category[] = ['All', 'Men', 'Women', 'Accessories'];

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    if (sortBy === 'Price: Low-High') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price: High-Low') {
      result.sort((a, b) => b.price - a.price);
    }
    
    return result;
  }, [selectedCategory, sortBy]);

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Shop Header */}
        <div className="py-20 border-b border-brand-ink/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-muted mb-4 block">Collection</span>
               <h1 className="text-5xl md:text-7xl">Shop All</h1>
            </div>
            <p className="text-brand-muted italic max-w-sm">
              Discover our full range of meticulously crafted pieces. Filter by category, silhouette, or material.
            </p>
          </motion.div>
        </div>

        {/* Toolbar */}
        <div className="sticky top-[72px] z-30 bg-brand-paper/95 backdrop-blur-sm border-b border-brand-ink/5 py-4 flex items-center justify-between mt-8">
          <div className="flex items-center gap-8 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "text-[10px] uppercase tracking-widest font-bold transition-all border-b-2 pb-1 whitespace-nowrap",
                  selectedCategory === cat ? "border-brand-ink text-brand-ink" : "border-transparent text-brand-muted hover:text-brand-ink"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4 border-r border-brand-ink/10 pr-6">
              <button 
                onClick={() => setViewMode('grid')}
                className={cn("transition-colors", viewMode === 'grid' ? "text-brand-ink" : "text-brand-muted")}
              >
                <LayoutGrid size={16} strokeWidth={1.5} />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={cn("transition-colors", viewMode === 'list' ? "text-brand-ink" : "text-brand-muted")}
              >
                <List size={16} strokeWidth={1.5} />
              </button>
            </div>
            
            <div className="relative group">
              <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold">
                Sort <ChevronDown size={12} strokeWidth={2} />
              </button>
              <div className="absolute right-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="bg-white border border-brand-ink/5 shadow-xl w-48 py-2">
                  {['Newest', 'Price: Low-High', 'Price: High-Low'].map((option) => (
                    <button 
                      key={option}
                      onClick={() => setSortBy(option)}
                      className={cn(
                        "w-full text-left px-6 py-2 text-[10px] uppercase tracking-widest font-bold hover:bg-brand-paper transition-colors",
                        sortBy === option ? "text-brand-accent" : "text-brand-muted"
                      )}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold bg-brand-ink text-brand-paper px-4 py-2 hover:rounded-full transition-all"
            >
              <Filter size={12} strokeWidth={2} /> <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-12">
          <AnimatePresence mode="popLayout">
            <motion.div 
              layout
              className={cn(
                "grid gap-x-8 gap-y-16",
                viewMode === 'grid' ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
              )}
            >
              {filteredProducts.map((product) => (
                 <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </AnimatePresence>
          
          {filteredProducts.length === 0 && (
            <div className="py-40 text-center">
              <p className="text-brand-muted italic">No pieces found matching your criteria.</p>
              <button 
                onClick={() => setSelectedCategory('All')}
                className="mt-4 text-xs uppercase tracking-widest border-b border-brand-ink font-bold pb-1"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
