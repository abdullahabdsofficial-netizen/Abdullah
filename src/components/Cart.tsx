import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Trash2, Plus, Minus, Ticket, ChevronRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onBack: () => void;
  onUpdateQty: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

const Cart = ({ items, onBack, onUpdateQty, onRemove, onCheckout }: CartProps) => {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const delivery = items.length > 0 ? 2.50 : 0;
  const tax = subtotal * 0.1;
  const total = subtotal + delivery + tax;

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white p-8 text-center">
        <div className="w-48 h-48 bg-gray-50 rounded-full flex items-center justify-center mb-8">
           <ShoppingBag className="w-24 h-24 text-gray-200" />
        </div>
        <h2 className="text-2xl font-black text-gray-900">Your cart is empty</h2>
        <p className="text-gray-400 mt-2 text-sm max-w-[240px]">
          Looks like you haven't added anything to your cart yet.
        </p>
        <button 
          onClick={onBack}
          className="mt-10 bg-primary text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-primary/30"
        >
          Start Ordering
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-6 pt-12 pb-6 rounded-b-[40px] shadow-sm flex items-center justify-between">
        <button 
          onClick={onBack}
          className="p-3 bg-gray-100 rounded-2xl text-gray-600 active:scale-95 transition-transform"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-xl font-black text-gray-900">Your Cart</h2>
        <div className="w-11" />
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
        <AnimatePresence>
          {items.map((item) => (
            <motion.div 
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, x: -50 }}
              className="bg-white p-4 rounded-3xl flex items-center space-x-4 shadow-sm border border-gray-50"
            >
              <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h4 className="font-extrabold text-gray-900 truncate pr-2">{item.name}</h4>
                  <button 
                    onClick={() => onRemove(item.id)}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <p className="text-gray-400 text-[10px] uppercase font-bold tracking-wider mt-1">{item.restaurantName}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="font-bold text-primary">${(item.price * item.quantity).toFixed(2)}</span>
                  <div className="flex items-center bg-gray-100 rounded-xl px-2 py-1 space-x-4">
                    <button 
                      onClick={() => onUpdateQty(item.id, -1)}
                      className="text-gray-500 hover:text-primary p-1"
                    >
                      <Minus size={14} strokeWidth={3} />
                    </button>
                    <span className="text-sm font-black w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQty(item.id, 1)}
                      className="text-gray-500 hover:text-primary p-1"
                    >
                      <Plus size={14} strokeWidth={3} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Promo Code */}
        <div className="mt-8 bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div className="flex items-center space-x-3 text-gray-400">
            <Ticket size={20} className="text-primary" />
            <input 
              type="text" 
              placeholder="Promo Code" 
              className="bg-transparent border-none focus:ring-0 text-sm font-bold placeholder:text-gray-300 w-32"
            />
          </div>
          <button className="bg-primary/10 text-primary px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider">
            Apply
          </button>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-white p-8 pt-6 rounded-t-[40px] shadow-[0_-8px_32px_rgba(0,0,0,0.02)] border-t border-gray-50">
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400 font-medium">Subtotal</span>
            <span className="text-slate-900 font-bold">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400 font-medium">Delivery</span>
            <span className="text-slate-900 font-bold">${delivery.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400 font-medium">Tax</span>
            <span className="text-slate-900 font-bold">${tax.toFixed(2)}</span>
          </div>
          <div className="h-px bg-slate-100 my-2" />
          <div className="flex justify-between items-center">
            <span className="text-slate-900 font-black text-lg">Total Amount</span>
            <span className="text-primary font-black text-xl">${total.toFixed(2)}</span>
          </div>
        </div>

        <motion.button 
          whileTap={{ scale: 0.95 }}
          onClick={onCheckout}
          className="w-full bg-primary text-white py-4 rounded-[28px] font-bold shadow-xl shadow-primary/30 flex items-center justify-center space-x-3 group"
        >
          <span className="text-lg">Checkout Now</span>
          <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </div>
  );
};

// Missing import fix
import { ShoppingBag } from 'lucide-react';
export default Cart;
