import React from 'react';
import { motion } from 'motion/react';
import { UtensilsCrossed } from 'lucide-react';

const Splash = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "backOut" }}
        className="bg-white p-6 rounded-full shadow-2xl relative"
      >
        <UtensilsCrossed size={64} className="text-primary" />
        <motion.div 
          className="absolute -top-2 -right-2 bg-secondary p-2 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-4 h-4 bg-white rounded-full" />
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8 text-center"
      >
        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          FoodChcha
        </h1>
        <p className="text-white/80 font-medium mt-2">
          Deliciousness Delivered
        </p>
      </motion.div>

      <div className="absolute bottom-12 flex space-x-2">
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
          className="w-3 h-3 bg-white/40 rounded-full" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          className="w-3 h-3 bg-white/40 rounded-full" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          className="w-3 h-3 bg-white/40 rounded-full" 
        />
      </div>
    </div>
  );
};

export default Splash;
