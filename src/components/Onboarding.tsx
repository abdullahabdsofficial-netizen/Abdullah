import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MapPin, Truck, CreditCard, Search } from 'lucide-react';

const steps = [
  {
    title: 'Discover Delicious Food',
    description: 'Explore the best restaurants and variety of cuisines around you.',
    icon: <Search className="w-12 h-12 text-primary" />,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80'
  },
  {
    title: 'Fast Doorstep Delivery',
    description: 'Hungry? We deliver your favorite meals hot and fresh to your door.',
    icon: <Truck className="w-12 h-12 text-primary" />,
    image: 'https://images.unsplash.com/photo-1526367790999-0150704584bb?w=800&q=80'
  },
  {
    title: 'Live Tracking',
    description: 'Keep track of your order from the kitchen to your doorstep in real-time.',
    icon: <MapPin className="w-12 h-12 text-primary" />,
    image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f67c07a?w=800&q=80'
  },
  {
    title: 'Easy Payments',
    description: 'Pay quickly and securely with multiple payment options.',
    icon: <CreditCard className="w-12 h-12 text-primary" />,
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&q=80'
  }
];

const Onboarding = ({ onComplete }: { onComplete: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <img 
              src={steps[currentStep].image} 
              alt={steps[currentStep].title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-8 pb-12 flex flex-col items-center text-center">
        <motion.div
          key={currentStep + 'icon'}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-primary/10 p-5 rounded-3xl mb-6"
        >
          {steps[currentStep].icon}
        </motion.div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4 h-16">
          {steps[currentStep].title}
        </h2>
        
        <p className="text-gray-600 mb-10 h-20 text-sm leading-relaxed px-4">
          {steps[currentStep].description}
        </p>

        <div className="flex space-x-2 mb-10">
          {steps.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentStep ? 'w-8 bg-primary' : 'w-2 bg-gray-200'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextStep}
          className="w-full bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-lg shadow-primary/30 active:scale-95 transition-transform"
          id="onboarding-next"
        >
          <span>{currentStep === steps.length - 1 ? 'Get Started' : 'Next'}</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
