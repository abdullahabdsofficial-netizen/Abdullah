import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, CreditCard, ChevronRight, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutProps {
  items: CartItem[];
  total: number;
  onBack: () => void;
  onConfirm: () => void;
}

const Checkout = ({ items, total, onBack, onConfirm }: CheckoutProps) => {
  const deliveryFee = 2.50;
  const tax = total * 0.1;
  const finalTotal = total + deliveryFee + tax;

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
        <h2 className="text-xl font-black text-gray-900">Checkout</h2>
        <div className="w-11" />
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
        {/* Address */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-black text-gray-900">Delivery Address</h3>
            <button className="text-primary text-xs font-bold uppercase tracking-wider">Change</button>
          </div>
          <div className="bg-white p-5 rounded-[32px] flex items-start space-x-4 shadow-sm border border-gray-100">
            <div className="bg-primary/10 p-3 rounded-2xl text-primary">
              <MapPin size={24} />
            </div>
            <div>
              <p className="font-bold text-gray-900">Home Address</p>
              <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                123 Food Street, Delicious City, <br /> Tasty State - 456789
              </p>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-black text-gray-900">Payment Method</h3>
            <button className="text-primary text-xs font-bold uppercase tracking-wider">Add New</button>
          </div>
          <div className="space-y-3">
            {[
              { id: 'card', name: 'MasterCard', sub: '•••• •••• •••• 4589', icon: <CreditCard size={20} />, active: true },
              { id: 'apple', name: 'Apple Pay', sub: 'Simplified payments', icon: <div className="text-xl"></div>, active: false }
            ].map((p) => (
              <div 
                key={p.id}
                className={`bg-white p-4 rounded-[28px] flex items-center justify-between shadow-sm border ${
                  p.active ? 'border-primary' : 'border-gray-50'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-2xl ${p.active ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}>
                    {p.icon}
                  </div>
                  <div>
                    <p className={`font-bold ${p.active ? 'text-gray-900' : 'text-gray-400'}`}>{p.name}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase mt-0.5 tracking-wider">{p.sub}</p>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  p.active ? 'border-primary' : 'border-gray-200'
                }`}>
                  {p.active && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary Recap */}
        <div>
          <h3 className="text-base font-black text-gray-900 mb-4">Order Summary</h3>
          <div className="bg-white p-5 rounded-[32px] space-y-3 shadow-sm border border-gray-100">
            {items.map(item => (
              <div key={item.id} className="flex justify-between items-center text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-primary font-black">{item.quantity}x</span>
                  <span className="text-gray-600 font-medium">{item.name}</span>
                </div>
                <span className="text-gray-900 font-bold">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="h-px bg-gray-100 my-2" />
            <div className="flex justify-between text-xs text-gray-400 font-bold uppercase tracking-widest">
              <span>Delivery & Tax</span>
              <span>${(deliveryFee + tax).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-white p-8 pt-6 rounded-t-[40px] shadow-[0_-8px_32px_rgba(0,0,0,0.02)] border-t border-gray-50">
        <div className="flex items-center justify-center space-x-2 mb-6 text-gray-400">
          <ShieldCheck size={16} className="text-success" />
          <span className="text-xs font-bold uppercase tracking-widest">Secure Checkout</span>
        </div>
        
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Grand Total</p>
            <p className="text-2xl font-black text-gray-900">${finalTotal.toFixed(2)}</p>
          </div>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={onConfirm}
            className="bg-primary text-white px-10 py-5 rounded-[28px] font-black shadow-xl shadow-primary/30 flex items-center space-x-2"
          >
            <span>Confirm Order</span>
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
