import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Star, Clock, Info, Plus, ChevronRight, ShoppingCart } from 'lucide-react';
import { Restaurant, FoodItem, CartItem } from '../types';

interface MenuProps {
  restaurant: Restaurant;
  onBack: () => void;
  onAddToCart: (item: CartItem) => void;
  onGoToCart: () => void;
  cartCount: number;
}

const RestaurantMenu = ({ restaurant, onBack, onAddToCart, onGoToCart, cartCount }: MenuProps) => {
  return (
    <div className="flex flex-col h-screen bg-white pb-24 relative">
      {/* Cover Image */}
      <div className="h-64 relative">
        <img 
          src={restaurant.image} 
          alt={restaurant.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <button 
          onClick={onBack}
          className="absolute top-12 left-6 p-3 bg-white/20 backdrop-blur-md rounded-2xl text-white hover:bg-white/40 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
      </div>

      {/* Restaurant Info Overlay */}
      <div className="mx-6 -mt-20 relative p-6 bg-white rounded-[40px] shadow-2xl border border-slate-100 flex flex-col items-center text-center">
        <div className="flex items-center space-x-1 mb-2 bg-secondary/20 px-3 py-1 rounded-full border border-secondary/30">
          <Star size={14} className="text-primary fill-primary" />
          <span className="text-[10px] font-black text-primary uppercase italic tracking-tighter">{restaurant.rating} Rating</span>
        </div>
        <h2 className="text-xl font-black text-slate-900">{restaurant.name}</h2>
        <p className="text-slate-400 text-xs font-medium mt-1">{restaurant.categories.join(' • ')}</p>
        
        <div className="flex items-center justify-center space-x-6 mt-6 w-full pt-6 border-t border-slate-100">
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-1 text-primary font-black text-xs">
              <Clock size={14} />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <span className="text-[9px] text-slate-400 font-bold uppercase mt-1 tracking-widest">Time</span>
          </div>
          <div className="w-px h-8 bg-slate-100" />
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-1 text-primary font-black text-xs">
              <Info size={14} />
              <span>${restaurant.deliveryFee.toFixed(2)}</span>
            </div>
            <span className="text-[9px] text-slate-400 font-bold uppercase mt-1 tracking-widest">Fee</span>
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="flex-1 overflow-y-auto mt-6 px-6 scrollbar-hide">
        <div className="flex space-x-4 mb-6 sticky top-0 bg-white/80 backdrop-blur-md py-2 z-10 overflow-x-auto scrollbar-hide -mx-6 px-6">
          {['Featured', 'Main Course', 'Appetizers', 'Drinks'].map((cat, i) => (
            <button 
              key={cat}
              className={`flex-shrink-0 px-6 py-2 rounded-2xl text-xs font-bold transition-all ${
                i === 0 ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-gray-100 text-gray-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-6 pb-4">
          {restaurant.menu.map((food) => (
            <motion.div 
              key={food.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-4 bg-gray-50/50 p-4 rounded-[32px] border border-gray-100 group"
            >
              <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-sm flex-shrink-0">
                <img 
                  src={food.image} 
                  alt={food.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h4 className="text-base font-extrabold text-gray-900 truncate pr-2">{food.name}</h4>
                  <span className="text-sm font-bold text-primary">${food.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-400 text-xs mt-1 line-clamp-2 leading-relaxed">
                  {food.description}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                      {food.calories || '450 kcal'}
                    </span>
                    <div className="flex items-center text-secondary">
                      <Star size={10} className="fill-secondary" />
                      <span className="text-[10px] font-bold ml-0.5">{food.rating}</span>
                    </div>
                  </div>
                  <motion.button 
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onAddToCart({ ...food, quantity: 1, restaurantId: restaurant.id, restaurantName: restaurant.name })}
                    className="p-2 bg-primary rounded-xl text-white shadow-md hover:bg-accent transition-colors"
                  >
                    <Plus size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Cart Button */}
      {cartCount > 0 && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-8 left-0 right-0 max-w-md mx-auto px-6 z-50"
        >
          <button 
            onClick={onGoToCart}
            className="w-full bg-gray-900 text-white flex items-center justify-between p-4 px-6 rounded-[28px] shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-primary p-2 rounded-xl">
                <ShoppingCart size={20} />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">In Your Cart</span>
                <span className="text-sm font-bold">{cartCount} {cartCount === 1 ? 'Item' : 'Items'}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold">View Cart</span>
              <ChevronRight size={20} />
            </div>
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default RestaurantMenu;
