
import React, { useEffect } from 'react';
import { UserDetails, CartItem } from '../types';
import { OWNER_WHATSAPP, SHOP_NAME } from '../constants';

interface SuccessScreenProps {
  userDetails: UserDetails;
  cart: CartItem[];
  total: number;
  onDone: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ userDetails, cart, total, onDone }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Automatically trigger the WhatsApp message on load to make it faster for the user
    sendToWhatsApp();
  }, []);

  const sendToWhatsApp = () => {
    const itemsText = cart.map(item => `• ${item.name} (${item.quantity}x) - ₹${item.price * item.quantity}`).join('\n');
    
    const message = 
`🛍️ *NEW ORDER: ${SHOP_NAME}*

👤 *Customer Details:*
Name: ${userDetails.fullName}
Phone: ${userDetails.phone}
Address: ${userDetails.address}

🚚 *Order Info:*
Method: ${userDetails.deliveryMethod === 'home' ? 'Home Delivery' : 'Store Pickup'}
Payment: ${userDetails.paymentMethod === 'qr' ? 'Paid via UPI (Screenshot Attached)' : 'Cash on Delivery'}

🍰 *Items Ordered:*
${itemsText}

💰 *GRAND TOTAL: ₹${total}*

_Thank you for ordering from RamDev Shop!_`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${OWNER_WHATSAPP}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="px-6 py-12 text-center bg-white min-h-screen">
      <div className="mb-10 flex justify-center">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-600">
          <i className="fas fa-check-circle text-6xl"></i>
        </div>
      </div>

      <h2 className="text-3xl font-black text-gray-900 mb-2 leading-tight uppercase tracking-tighter">Order Placed!</h2>
      <p className="text-gray-500 text-sm mb-10 font-medium">Please ensure you send the message in WhatsApp to confirm your order.</p>

      <div className="bg-gray-50 rounded-[32px] p-6 text-left mb-10 border border-gray-100">
        <div className="flex justify-between mb-4">
          <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Order Summary</span>
          <span className="text-orange-600 font-black text-[10px] uppercase tracking-widest">#{Math.floor(Math.random() * 9000) + 1000}</span>
        </div>
        
        <div className="space-y-3 mb-6">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center text-sm">
              <span className="text-gray-600 font-medium">{item.name} <span className="text-gray-400 text-xs">x{item.quantity}</span></span>
              <span className="font-bold text-gray-900">₹{item.price * item.quantity}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
          <span className="font-black text-gray-900 uppercase text-xs tracking-widest">Total Amount</span>
          <span className="text-2xl font-black text-orange-900">₹{total}</span>
        </div>
      </div>

      <div className="space-y-4">
        <button 
          onClick={sendToWhatsApp}
          className="w-full bg-green-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-green-100 flex items-center justify-center gap-3 transition-all active:scale-95 text-lg"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
          RE-SEND ON WHATSAPP
        </button>
        <button 
          onClick={onDone}
          className="w-full bg-gray-100 text-gray-600 font-black py-4 rounded-2xl uppercase tracking-widest text-xs transition-all hover:bg-gray-200"
        >
          Return to Menu
        </button>
      </div>
    </div>
  );
};

export default SuccessScreen;
