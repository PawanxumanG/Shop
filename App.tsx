
import React, { useState, useMemo, useCallback } from 'react';
import { SHOP_NAME, PRODUCTS, OWNER_WHATSAPP } from './constants.ts';
import { AppView, CartItem, Product, UserDetails } from './types.ts';
import Header from './components/Header.tsx';
import ProductList from './components/ProductList.tsx';
import CartOverlay from './components/CartOverlay.tsx';
import CheckoutForm from './components/CheckoutForm.tsx';
import SuccessScreen from './components/SuccessScreen.tsx';
import Footer from './components/Footer.tsx';
import AboutModal from './components/AboutModal.tsx';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('catalog');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  const cartTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  const cartCount = useMemo(() => {
    return cart.reduce((a, b) => a + b.quantity, 0);
  }, [cart]);

  const addToCart = useCallback((product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const handleQuickBuy = useCallback((product: Product) => {
    addToCart(product);
    setView('cart');
  }, [addToCart]);

  const removeFromCart = useCallback((productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  }, []);

  const handleOrderSubmit = (details: UserDetails) => {
    setUserDetails(details);
    setView('success');
  };

  const handleContactOwner = () => {
    window.open(`https://wa.me/${OWNER_WHATSAPP}?text=Hello RamDev Shop, I have a query regarding products.`, '_blank');
  };

  const renderContent = () => {
    switch (view) {
      case 'catalog':
        return (
          <div className="pb-24">
            <ProductList products={PRODUCTS} onAddToCart={addToCart} onQuickBuy={handleQuickBuy} />
            {cart.length > 0 && (
              <div className="fixed bottom-20 left-4 right-4 z-40">
                <button 
                  onClick={() => setView('cart')}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl shadow-2xl flex justify-between px-6 items-center transition-transform active:scale-95"
                >
                  <span className="flex items-center gap-2">
                    <i className="fas fa-shopping-basket"></i>
                    View {cartCount} Items
                  </span>
                  <span>₹{cartTotal} <i className="fas fa-chevron-right ml-2 text-sm"></i></span>
                </button>
              </div>
            )}
          </div>
        );
      case 'cart':
        return (
          <CartOverlay 
            cart={cart} 
            total={cartTotal}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
            onClose={() => setView('catalog')}
            onCheckout={() => setView('checkout')}
          />
        );
      case 'checkout':
        return (
          <CheckoutForm 
            total={cartTotal}
            cart={cart}
            onSubmit={handleOrderSubmit}
            onCancel={() => setView('cart')}
          />
        );
      case 'success':
        return (
          <SuccessScreen 
            userDetails={userDetails!}
            cart={cart}
            total={cartTotal}
            onDone={() => {
              setCart([]);
              setUserDetails(null);
              setView('catalog');
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto bg-white shadow-xl relative">
      <Header cartCount={cartCount} onOpenCart={() => setView('cart')} />
      
      <main className="flex-1 overflow-y-auto custom-scrollbar pt-16">
        {renderContent()}
      </main>

      {view !== 'success' && view !== 'checkout' && (
        <Footer 
          onContact={handleContactOwner} 
          onAbout={() => setIsAboutOpen(true)} 
        />
      )}

      {isAboutOpen && <AboutModal onClose={() => setIsAboutOpen(false)} />}
    </div>
  );
};

export default App;
