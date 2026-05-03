import React from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Bell, Star, Clock, ShoppingBag, Plus } from 'lucide-react';
import { CATEGORIES, RESTAURANTS } from '../constants';
import { Category, Restaurant, Screen } from '../types';
import BottomNav from './BottomNav';

interface HomeProps {
  user: { name: string, location: string } | null;
  onSelectRestaurant: (restaurant: Restaurant) => void;
  onNavigate: (screen: Screen) => void;
}

const Home = ({ user, onSelectRestaurant, onNavigate }: HomeProps) => {
  return (
    <div className="flex flex-col h-screen bg-slate-50 pb-20">
      {/* Header */}
      <div className="bg-white p-6 pt-12 rounded-b-[40px] shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-xl tracking-tighter">
              {user?.name.charAt(0)}
            </div>
            <div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Hello, {user?.name} 👋</p>
              <div className="flex items-center space-x-1 mt-0.5">
                <MapPin size={14} className="text-primary fill-primary" />
                <span className="text-slate-900 font-bold text-sm truncate max-w-[150px]">
                  {user?.location}
                </span>
              </div>
            </div>
          </div>
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-slate-100 rounded-2xl relative"
          >
            <Bell size={20} className="text-slate-600" />
            <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-accent border-2 border-white rounded-full" />
          </motion.button>
        </div>

        {/* Search Bar */}
        <div className="mt-8 relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <Search size={20} />
          </div>
          <input 
            type="text" 
            placeholder="Search for food, restaurants, dishes" 
            className="w-full bg-slate-100 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {/* Categories */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">Food Categories</h3>
            <button className="text-primary text-xs font-bold uppercase tracking-wider">See All</button>
          </div>
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide -mx-2 px-2">
            {CATEGORIES.map((category) => (
              <motion.div 
                key={category.id}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center flex-shrink-0"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl mb-2 border border-slate-100 hover:border-primary/20 transition-all">
                  {category.icon}
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                  {category.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Offers Banner */}
        <div className="px-6 mb-8">
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-6 relative overflow-hidden h-40 flex items-center">
            <div className="relative z-10 w-2/3">
              <h4 className="text-white font-black text-2xl leading-none">
                30% OFF <br /> <span className="text-secondary">on First Order</span>
              </h4>
              <p className="text-white/80 text-[10px] mt-2 font-medium uppercase tracking-[2px]">Use Code: WELCOME30</p>
              <button className="mt-4 bg-white text-primary px-4 py-2 rounded-xl text-xs font-bold shadow-lg">
                Order Now
              </button>
            </div>
            <div className="absolute right-[-20px] bottom-[-20px] opacity-20">
              <ShoppingBag size={180} className="text-white" />
            </div>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="px-6 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-primary/20 p-1.5 rounded-lg text-primary">
              <Star size={16} fill="currentColor" />
            </div>
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">AI Recommended</h3>
          </div>
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide -mx-2 px-2">
            {[
              { name: 'Spicy Zinger', price: 12.99, img: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=200&q=80', res: 'Burger King' },
              { name: 'Sushi Platter', price: 24.50, img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=200&q=80', res: 'Tokyo Sushi' },
              { name: 'Pasta Carbonara', price: 15.00, img: 'https://images.unsplash.com/photo-1612459284970-e8f027596582?w=200&q=80', res: 'Italiano' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileTap={{ scale: 0.95 }}
                className="bg-white p-3 rounded-[28px] shadow-sm border border-slate-100 flex-shrink-0 w-40"
              >
                <div className="h-28 rounded-2xl overflow-hidden mb-3">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-[11px] font-black text-slate-900 truncate">{item.name}</h4>
                <p className="text-[9px] text-slate-400 font-bold uppercase mt-1 tracking-tight">{item.res}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-primary font-bold text-[11px]">${item.price}</span>
                  <div className="bg-primary p-1 rounded-lg text-white">
                    <Plus size={12} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Popular Restaurants */}
        <div className="px-6 pb-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">Popular Near You</h3>
            <button className="text-primary text-xs font-bold uppercase tracking-wider">Show More</button>
          </div>
          <div className="space-y-6">
            {RESTAURANTS.map((restaurant) => (
              <motion.div 
                key={restaurant.id}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelectRestaurant(restaurant)}
                className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-100 group"
              >
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center space-x-1 shadow-sm">
                    <Star size={14} className="text-secondary fill-secondary" />
                    <span className="text-xs font-bold text-slate-900">{restaurant.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white px-2 py-1 rounded-lg text-[10px] font-bold shadow-sm">
                    {restaurant.deliveryTime}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-black text-slate-900">{restaurant.name}</h4>
                    <span className="text-primary font-bold text-sm">${restaurant.deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span className="text-[10px] font-medium tracking-tight">Available Now</span>
                    </div>
                    <div className="w-1 h-1 bg-slate-100 rounded-full" />
                    <span className="text-[10px] font-medium tracking-tight uppercase tracking-widest">{restaurant.categories.join(' • ')}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav active="home" onNavigate={onNavigate} />
    </div>
  );
};

export default Home;
