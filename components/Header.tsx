
import React from 'react';
import { SHOP_NAME } from '../constants';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  return (
    <header className="fixed top-0 left-0 right-0 max-w-md mx-auto z-50 bg-white/95 backdrop-blur-sm border-b border-orange-100 shadow-sm px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-md">
          <i className="fas fa-cookie-bite text-xl"></i>
        </div>
        <div>
          <h1 className="text-xl font-bold text-orange-900 tracking-tight leading-none">{SHOP_NAME}</h1>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <button className="text-orange-900 w-10 h-10 rounded-full hover:bg-orange-50 transition-colors">
          <i className="fas fa-search"></i>
        </button>
        <button 
          onClick={onOpenCart}
          className="text-orange-900 w-10 h-10 rounded-full hover:bg-orange-50 transition-colors relative"
        >
          <i className="fas fa-shopping-cart"></i>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
