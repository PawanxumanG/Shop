
import React from 'react';

interface FooterProps {
  onContact: () => void;
  onAbout: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContact, onAbout }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-40 bg-white border-t border-orange-50 px-6 py-4 flex justify-between items-center shadow-[0_-5px_15px_rgba(0,0,0,0.03)]">
      <button 
        onClick={onContact}
        className="flex flex-col items-center gap-1 group"
      >
        <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all">
          <i className="fas fa-headset"></i>
        </div>
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Contact Owner</span>
      </button>

      <div className="w-12 h-12 bg-orange-600 rounded-full -mt-10 flex items-center justify-center text-white shadow-lg border-4 border-white">
        <i className="fas fa-home"></i>
      </div>

      <button 
        onClick={onAbout}
        className="flex flex-col items-center gap-1 group"
      >
        <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all">
          <i className="fas fa-info-circle"></i>
        </div>
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">About App</span>
      </button>
    </footer>
  );
};

export default Footer;
