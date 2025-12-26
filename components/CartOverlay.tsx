
import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartOverlayProps {
  cart: CartItem[];
  total: number;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onClose: () => void;
  onCheckout: () => void;
}

const CartOverlay: React.FC<CartOverlayProps> = ({ cart, total, onUpdateQuantity, onRemove, onClose, onCheckout }) => {
  const [removingId, setRemovingId] = useState<string | null>(null);

  const handleRemove = (id: string) => {
    setRemovingId(id);
    setTimeout(() => {
      onRemove(id);
      setRemovingId(null);
    }, 300);
  };

  return (
    <div className="px-4 py-6 bg-white min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <button onClick={onClose} className="p-2 -ml-2 text-gray-500 active:scale-90 transition-transform">
          <i className="fas fa-arrow-left text-lg"></i>
        </button>
        <h2 className="text-2xl font-bold text-gray-900">My Cart</h2>
        <div className="w-10"></div>
      </div>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center text-orange-300 mb-6">
            <i className="fas fa-shopping-cart text-4xl"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Cart is empty</h3>
          <p className="text-gray-500 mb-8">Looks like you haven't added anything yet.</p>
          <button 
            onClick={onClose}
            className="bg-orange-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg active:scale-95 transition-all"
          >
            Explore Menu
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-6 mb-44">
            {cart.map(item => (
              <div 
                key={item.id} 
                className={`flex gap-4 p-4 bg-orange-50/50 rounded-2xl relative transition-all duration-300 ${removingId === item.id ? 'animate-itemRemove' : ''}`}
              >
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-2xl shadow-sm" />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-sm">{item.name}</h4>
                    <p className="text-base font-black text-orange-600">₹{item.price * item.quantity}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="w-10 h-10 rounded-xl border border-orange-200 flex items-center justify-center text-orange-600 bg-white shadow-sm active:scale-90 transition-all"
                      aria-label="Decrease quantity"
                    >
                      <i className="fas fa-minus text-xs"></i>
                    </button>
                    <span className="font-black text-gray-900 text-lg w-6 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="w-10 h-10 rounded-xl border border-orange-200 flex items-center justify-center text-orange-600 bg-white shadow-sm active:scale-90 transition-all"
                      aria-label="Increase quantity"
                    >
                      <i className="fas fa-plus text-xs"></i>
                    </button>
                  </div>
                </div>
                <button 
                  onClick={() => handleRemove(item.id)}
                  className="absolute top-2 right-2 text-gray-300 hover:text-red-500 p-2 transition-colors"
                  aria-label="Remove item"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            ))}
          </div>

          <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-orange-100 p-6 shadow-[0_-15px_40px_rgba(0,0,0,0.12)] rounded-t-[32px] z-[60]">
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider block">Subtotal Amount</span>
                <span className="text-3xl font-black text-orange-900 leading-tight">₹{total}</span>
              </div>
              <div className="text-right">
                <span className="text-orange-600 font-bold text-xs bg-orange-50 px-4 py-2 rounded-full border border-orange-100 uppercase tracking-tight">
                  {cart.length} {cart.length === 1 ? 'item' : 'items'} in Cart
                </span>
              </div>
            </div>

            <button 
              onClick={onCheckout}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-orange-100 transition-all active:scale-95 flex items-center justify-center gap-3 text-lg"
            >
              PROCEED TO ORDER
              <i className="fas fa-arrow-right text-sm"></i>
            </button>
            <p className="text-[10px] text-gray-400 text-center mt-4">
              Step 1 of 2: Confirm your details next
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default CartOverlay;
