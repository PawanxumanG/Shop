
import React, { useState } from 'react';
import { Product, Category } from '../types.ts';
import ProductCard from './ProductCard.tsx';

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onQuickBuy: (product: Product) => void;
}

const categories: Category[] = ['Sweets', 'Cakes', 'Snacks'];

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart, onQuickBuy }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="px-3 py-4">
      {/* Category Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 no-scrollbar">
        <button
          onClick={() => setSelectedCategory('All')}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap shadow-sm ${
            selectedCategory === 'All' 
              ? 'bg-orange-600 text-white' 
              : 'bg-white text-orange-900 border border-orange-100'
          }`}
        >
          All Items
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap shadow-sm ${
              selectedCategory === cat 
                ? 'bg-orange-600 text-white' 
                : 'bg-white text-orange-900 border border-orange-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAdd={onAddToCart} 
            onQuickBuy={onQuickBuy}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
