
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
  onQuickBuy: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAdd, onQuickBuy }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-orange-50 flex flex-col h-full">
      <div className="relative h-32 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-1.5 right-1.5">
          <span className="bg-white/90 backdrop-blur px-1.5 py-0.5 rounded-md text-[8px] font-black text-orange-800 shadow-sm uppercase tracking-wider">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-3 flex flex-col flex-1">
        <h3 className="text-sm font-bold text-gray-900 leading-tight mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-[10px] text-gray-500 line-clamp-2 mb-2 flex-1 leading-normal">{product.description}</p>
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-black text-orange-600">₹{product.price}</span>
            <button 
              onClick={() => onAdd(product)}
              className="w-7 h-7 rounded-lg border border-orange-200 text-orange-600 hover:bg-orange-50 transition-colors flex items-center justify-center"
              aria-label="Add to cart"
            >
              <i className="fas fa-plus text-[10px]"></i>
            </button>
          </div>
          <button 
            onClick={() => onQuickBuy(product)}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white text-[10px] font-black py-2 rounded-lg shadow-md shadow-orange-100 transition-all active:scale-95 uppercase tracking-tighter"
          >
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
