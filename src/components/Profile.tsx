import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Heart, CreditCard, Settings, ChevronRight, LogOut, ShieldCheck, Mail, Phone } from 'lucide-react';
import { Screen } from '../types';

interface ProfileProps {
  onBack: () => void;
  onNavigate: (screen: Screen) => void;
}

const Profile = ({ onBack, onNavigate }: ProfileProps) => {
  const sections = [
    { id: '1', title: 'Favorite Restaurants', icon: <Heart className="text-pink-500" /> },
    { id: '2', title: 'Saved Addresses', icon: <MapPin className="text-blue-500" />, sub: 'Home, Office' },
    { id: '3', title: 'Payment Methods', icon: <CreditCard className="text-primary" />, sub: 'MasterCard •••• 4589' },
    { id: '4', title: 'Loyalty Rewards', icon: <Star className="text-secondary" />, sub: '250 Points' },
    { id: '5', title: 'Privacy & Security', icon: <ShieldCheck className="text-success" /> },
    { id: '6', title: 'Settings', icon: <Settings className="text-gray-400" /> },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Profile Header */}
      <div className="bg-primary pt-16 pb-12 px-8 rounded-b-[60px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
        
        <div className="flex flex-col items-center relative z-10">
          <div className="relative">
            <div className="w-28 h-28 bg-white p-1 rounded-[40px] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" 
                alt="Avatar" 
                className="w-full h-full object-cover rounded-[38px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-1 right-1 bg-white p-2 rounded-2xl shadow-lg border-2 border-primary text-primary"
            >
              <Settings size={16} strokeWidth={3} />
            </motion.div>
          </div>
          <h2 className="text-2xl font-black text-white mt-4">Abdullah</h2>
          <p className="text-white/70 text-sm font-medium mt-1">abdullah@example.com</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-8 space-y-4 scrollbar-hide">
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex-1 bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex items-center space-x-3">
             <Mail size={18} className="text-gray-400" />
             <div>
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email</p>
               <p className="text-xs font-bold text-gray-900">abdullah@example.com</p>
             </div>
          </div>
          <div className="flex-1 bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex items-center space-x-3">
             <Phone size={18} className="text-gray-400" />
             <div>
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Phone</p>
               <p className="text-xs font-bold text-gray-900">+1 234 567 890</p>
             </div>
          </div>
        </div>

        {sections.map((section) => (
          <motion.div 
            key={section.id}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-5 rounded-[28px] shadow-sm border border-gray-50 flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gray-50 rounded-2xl">
                {section.icon}
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">{section.title}</p>
                {section.sub && <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">{section.sub}</p>}
              </div>
            </div>
            <ChevronRight size={18} className="text-gray-300" />
          </motion.div>
        ))}

        <motion.button 
          whileTap={{ scale: 0.98 }}
          className="w-full bg-red-50 p-5 rounded-[28px] border border-red-100 flex items-center justify-center space-x-3 text-red-500 font-bold mt-4"
        >
          <LogOut size={20} />
          <span>Log Out</span>
        </motion.button>
      </div>

      <div className="pb-10 pt-4 text-center">
        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[4px]">FoodChcha v1.0.4</p>
      </div>
    </div>
  );
};

// Missing Import fix
import { Star } from 'lucide-react';
export default Profile;
