import React from 'react';
import { motion } from 'motion/react';
import { Home, ClipboardList, ShoppingCart, User } from 'lucide-react';
import { Screen } from '../types';

interface BottomNavProps {
  active: Screen | 'home' | 'history' | 'cart' | 'profile';
  onNavigate: (screen: Screen) => void;
}

const BottomNav = ({ active, onNavigate }: BottomNavProps) => {
  const navItems = [
    { key: 'home', icon: Home, label: 'Home' },
    { key: 'history', icon: ClipboardList, label: 'Orders' },
    { key: 'cart', icon: ShoppingCart, label: 'Cart' },
    { key: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-[320px] mx-auto bg-white/95 backdrop-blur-md border-t border-slate-100 px-6 py-4 flex items-center justify-between z-50 rounded-t-[32px] shadow-[0_-4px_24px_rgba(0,0,0,0.03)]">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.key;
        
        return (
          <motion.button
            key={item.key}
            whileTap={{ scale: 0.9 }}
            onClick={() => onNavigate(item.key as Screen)}
            className="flex flex-col items-center space-y-1 relative"
          >
            {isActive && (
              <motion.div
                layoutId="nav-glow"
                className="absolute -top-1 w-8 h-1 bg-primary rounded-full"
              />
            )}
            <Icon 
              size={22} 
              className={`transition-colors duration-300 ${isActive ? 'text-primary' : 'text-slate-300'}`} 
            />
            <span className={`text-[8px] font-black uppercase tracking-widest ${isActive ? 'text-primary' : 'text-slate-300'}`}>
              {item.label}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default BottomNav;
