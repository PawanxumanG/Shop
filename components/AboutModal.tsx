
import React from 'react';
import { SHOP_NAME } from '../constants';

interface AboutModalProps {
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-end justify-center">
      <div className="bg-white w-full max-w-md rounded-t-[40px] p-8 animate-slideUp">
        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-8"></div>
        
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-orange-100 rounded-3xl mx-auto flex items-center justify-center text-orange-600 text-3xl mb-4 shadow-inner">
            <i className="fas fa-shop"></i>
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-1">{SHOP_NAME}</h2>
          <p className="text-orange-600 font-bold text-xs uppercase tracking-widest">Version 2.1.0</p>
        </div>

        <div className="space-y-6 text-gray-600 text-sm leading-relaxed mb-10">
          <p>
            Welcome to <span className="font-bold text-orange-900">{SHOP_NAME}</span>, your premium destination for authentic Indian sweets and gourmet cakes. 
            We take pride in using only the finest ingredients and pure ghee to craft treats that delight your senses.
          </p>
          <div className="bg-orange-50 p-4 rounded-2xl flex items-center gap-4">
            <i className="fas fa-award text-2xl text-orange-400"></i>
            <p className="font-medium text-orange-900 text-xs">
              This app is powered by GitHub-hosted live files, ensuring you always get the latest prices and seasonal menu.
            </p>
          </div>
          <p className="text-center text-[10px] text-gray-400 font-mono">
            Designed for Android with AIDE Plus WebView Integration.
          </p>
        </div>

        <button 
          onClick={onClose}
          className="w-full bg-orange-900 text-white font-bold py-4 rounded-2xl shadow-xl hover:bg-black transition-all"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AboutModal;
