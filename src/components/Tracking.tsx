import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare, ChevronLeft, MapPin, Navigation, Clock, CheckCircle2 } from 'lucide-react';

const Tracking = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const states = [
    { label: 'Order Confirmed', time: '12:05 PM', done: true },
    { label: 'Preparing Food', time: '12:10 PM', done: true },
    { label: 'Out for Delivery', time: '12:25 PM', done: false },
    { label: 'Arriving Soon', time: '12:40 PM', done: false },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => Math.min(100, p + 5));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-50 relative overflow-hidden">
      {/* Fake Map Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-blue-50 relative">
          {/* Simple Grid/Map Simulation */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
          
          {/* Simulated Route */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.path
              d="M 100 600 L 150 500 L 250 450 L 300 350 L 200 250 L 350 150"
              fill="none"
              stroke="#FF8C00"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="20 10"
              initial={{ strokeDashoffset: 1000 }}
              animate={{ strokeDashoffset: -1000 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
          </svg>

          {/* Restaurant Marker */}
          <div className="absolute top-[100px] left-[320px] bg-white p-2 rounded-full shadow-lg border-4 border-gray-100">
             <div className="w-4 h-4 bg-gray-900 rounded-full" />
          </div>

          {/* User Marker */}
          <div className="absolute top-[580px] left-[80px] bg-white p-2 rounded-full shadow-lg border-4 border-gray-100">
             <MapPin size={24} className="text-primary fill-primary" />
          </div>

          {/* Rider Marker */}
          <motion.div 
            animate={{ 
              x: [320, 280, 230, 280, 200, 310],
              y: [100, 150, 250, 350, 420, 150],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 left-0 bg-white p-3 rounded-full shadow-2xl z-10 border-2 border-primary"
          >
            <Navigation size={24} className="text-primary fill-primary rotate-45" />
          </motion.div>
        </div>
      </div>

      {/* Header Overlay */}
      <div className="relative z-10 p-6 pt-12 flex items-center justify-between">
        <button 
          onClick={onComplete}
          className="p-3 bg-white/80 backdrop-blur-md rounded-2xl text-gray-900 shadow-md active:scale-95"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-3xl shadow-md border border-white/50 text-center">
          <p className="text-[10px] font-bold text-primary uppercase tracking-[2px]">Estimated Time</p>
          <p className="text-xl font-black text-gray-900">15-20 Min</p>
        </div>
        <div className="w-11" />
      </div>

      {/* Tracking Card */}
      <div className="mt-auto relative z-10 px-6 pb-12">
        <div className="bg-white rounded-[44px] shadow-2xl border border-gray-100 overflow-hidden">
          {/* Status Banner */}
          <div className="p-6 pb-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-black text-gray-900">Your order is on the way!</h3>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Order #FC-8294</p>
              </div>
              <div className="bg-green-50 p-2 rounded-2xl">
                <CheckCircle2 size={32} className="text-success" />
              </div>
            </div>

            {/* Rider Info */}
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-3xl mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gray-200 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
                    alt="Rider" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-extrabold text-gray-900">Johnathan Wilson</p>
                  <p className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">Professional Rider</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-3 bg-white rounded-2xl shadow-sm text-primary hover:bg-primary hover:text-white transition-colors">
                  <Phone size={20} />
                </button>
                <button className="p-3 bg-white rounded-2xl shadow-sm text-primary hover:bg-primary hover:text-white transition-colors">
                  <MessageSquare size={20} />
                </button>
              </div>
            </div>

            {/* Progress Steps */}
            <div className="space-y-6 mb-4">
              {states.map((s, i) => (
                <div key={i} className="flex items-start space-x-4 relative">
                  {i < states.length - 1 && (
                    <div className={`absolute left-2.5 top-5 w-0.5 h-10 ${s.done ? 'bg-primary' : 'bg-gray-100'}`} />
                  )}
                  <div className={`w-5 h-5 rounded-full mt-1 border-[3px] z-10 transition-colors ${
                    s.done ? 'bg-primary border-primary/20' : 'bg-white border-gray-100'
                  }`} />
                  <div className="flex-1 flex justify-between">
                    <span className={`text-sm font-bold ${s.done ? 'text-gray-900' : 'text-gray-300'}`}>{s.label}</span>
                    <span className={`text-[10px] font-bold ${s.done ? 'text-primary' : 'text-gray-300'}`}>{s.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={onComplete}
            className="w-full bg-gray-900 text-white py-6 font-black text-sm uppercase tracking-[3px] hover:bg-gray-800 transition-colors"
          >
            I Received My Food
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
