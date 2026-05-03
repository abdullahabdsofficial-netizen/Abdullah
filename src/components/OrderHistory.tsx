import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Repeat, Star, ChevronRight } from 'lucide-react';

interface OrderHistoryProps {
  onBack: () => void;
}

const OrderHistory = ({ onBack }: OrderHistoryProps) => {
  const history = [
    { id: '1', name: 'Burger King Royale', date: 'Oct 24, 2023', total: 24.50, status: 'Delivered', img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=100&h=100&fit=crop' },
    { id: '2', name: 'Pizza Hut Express', date: 'Oct 18, 2023', total: 18.99, status: 'Delivered', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=100&h=100&fit=crop' },
    { id: '3', name: 'Desi Biryani House', date: 'Oct 12, 2023', total: 32.20, status: 'Delivered', img: 'https://images.unsplash.com/photo-1589302168068-1c498202f750?w=100&h=100&fit=crop' },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-6 pt-12 pb-6 rounded-b-[40px] shadow-sm flex items-center justify-between">
        <button 
          onClick={onBack}
          className="p-3 bg-gray-100 rounded-2xl text-gray-600"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-xl font-black text-gray-900">Your Orders</h2>
        <div className="w-11" />
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
        {history.map((order) => (
          <motion.div 
            key={order.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-4 rounded-[32px] shadow-sm border border-gray-100 flex items-center space-x-4"
          >
            <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
              <img src={order.img} alt={order.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <h4 className="font-extrabold text-gray-900 truncate pr-2">{order.name}</h4>
                <div className="flex items-center space-x-1 text-secondary">
                  <Star size={12} className="fill-secondary" />
                  <span className="text-xs font-bold">5.0</span>
                </div>
              </div>
              <p className="text-gray-400 text-xs mt-1">{order.date} • ${order.total.toFixed(2)}</p>
              
              <div className="flex items-center justify-between mt-3">
                <span className="text-[10px] font-bold text-success bg-success/10 px-2 py-0.5 rounded-full uppercase tracking-widest">
                  {order.status}
                </span>
                <button className="flex items-center space-x-1 text-primary text-xs font-bold uppercase tracking-wider hover:underline">
                  <Repeat size={14} />
                  <span>Reorder</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
