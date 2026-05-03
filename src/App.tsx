/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Screen, Restaurant, CartItem } from './types';
import Splash from './components/Splash';
import Onboarding from './components/Onboarding';
import Login from './components/Login';
import Home from './components/Home';
import RestaurantMenu from './components/RestaurantMenu';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Tracking from './components/Tracking';
import OrderHistory from './components/OrderHistory';
import Profile from './components/Profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [user, setUser] = useState<{name: string, location: string} | null>({
    name: 'Abdullah',
    location: '123 Food Street, Tasty City'
  });

  // Handle splash timeout
  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('onboarding');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const addToCart = (item: CartItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(i => {
      if (i.id === id) {
        const newQty = Math.max(1, i.quantity + delta);
        return { ...i, quantity: newQty };
      }
      return i;
    }));
  };

  const navigateToRestaurant = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setCurrentScreen('menu');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <Splash />;
      case 'onboarding':
        return <Onboarding onComplete={() => setCurrentScreen('login')} />;
      case 'login':
        return <Login onLogin={() => setCurrentScreen('home')} />;
      case 'home':
        return (
          <Home 
            user={user} 
            onSelectRestaurant={navigateToRestaurant}
            onNavigate={setCurrentScreen}
          />
        );
      case 'menu':
        return (
          <RestaurantMenu 
            restaurant={selectedRestaurant!} 
            onBack={() => setCurrentScreen('home')}
            onAddToCart={addToCart}
            onGoToCart={() => setCurrentScreen('cart')}
            cartCount={cartItems.length}
          />
        );
      case 'cart':
        return (
          <Cart 
            items={cartItems} 
            onBack={() => setCurrentScreen('menu')}
            onUpdateQty={updateQuantity}
            onRemove={removeFromCart}
            onCheckout={() => setCurrentScreen('checkout')}
          />
        );
      case 'checkout':
        return (
          <Checkout 
            items={cartItems}
            total={cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            onBack={() => setCurrentScreen('cart')}
            onConfirm={() => {
              setCartItems([]);
              setCurrentScreen('tracking');
            }}
          />
        );
      case 'tracking':
        return <Tracking onComplete={() => setCurrentScreen('home')} />;
      case 'history':
        return <OrderHistory onBack={() => setCurrentScreen('home')} />;
      case 'profile':
        return <Profile onBack={() => setCurrentScreen('home')} onNavigate={setCurrentScreen} />;
      default:
        return <Home user={user} onSelectRestaurant={navigateToRestaurant} onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-0 md:p-8">
      <div className="mobile-container overflow-y-auto scrollbar-hide">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen + (selectedRestaurant?.id || '')}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full h-full"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
