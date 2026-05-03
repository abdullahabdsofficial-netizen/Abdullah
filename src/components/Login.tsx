import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Lock, Eye, EyeOff, Github, Chrome as Google } from 'lucide-react';

const Login = ({ onLogin }: { onLogin: () => void }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState<'phone' | 'email'>('phone');

  return (
    <div className="flex flex-col h-screen bg-white p-8">
      <div className="mt-12 text-center">
        <div className="inline-block bg-primary/10 p-4 rounded-3xl text-primary font-bold text-2xl mb-4">
          FC
        </div>
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Welcome Back!
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          Login to your FoodChcha account
        </p>
      </div>

      <div className="mt-10 mb-6 flex bg-gray-100 p-1 rounded-2xl">
        <button 
          onClick={() => setLoginMethod('phone')}
          className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${
            loginMethod === 'phone' ? 'bg-white shadow-sm text-primary' : 'text-gray-500'
          }`}
        >
          Phone
        </button>
        <button 
          onClick={() => setLoginMethod('email')}
          className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${
            loginMethod === 'email' ? 'bg-white shadow-sm text-primary' : 'text-gray-500'
          }`}
        >
          Email
        </button>
      </div>

      <div className="space-y-4">
        {loginMethod === 'phone' ? (
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Phone size={20} />
            </div>
            <input 
              type="tel" 
              placeholder="Enter Phone Number" 
              className="w-full bg-gray-100 border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
            />
          </div>
        ) : (
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Mail size={20} />
            </div>
            <input 
              type="email" 
              placeholder="Enter Email Address" 
              className="w-full bg-gray-100 border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
            />
          </div>
        )}

        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <Lock size={20} />
          </div>
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Enter Password" 
            className="w-full bg-gray-100 border-none rounded-2xl py-4 pl-12 pr-12 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
          />
          <button 
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <div className="mt-4 text-right">
        <button className="text-sm font-bold text-primary hover:underline">
          Forgot Password?
        </button>
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={onLogin}
        className="w-full bg-primary text-white py-4 rounded-2xl font-bold mt-10 shadow-lg shadow-primary/30"
        id="login-button"
      >
        Sign In
      </motion.button>

      <div className="mt-10 flex items-center space-x-4">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Or continue with</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <div className="mt-8 flex space-x-4">
        <button className="flex-1 flex items-center justify-center space-x-2 border border-gray-100 py-3 rounded-2xl hover:bg-gray-50 transition-colors">
          <Google size={20} className="text-red-500" />
          <span className="font-bold text-sm">Google</span>
        </button>
        <button className="flex-1 flex items-center justify-center space-x-2 border border-gray-100 py-3 rounded-2xl hover:bg-gray-50 transition-colors">
          <Github size={20} />
          <span className="font-bold text-sm">GitHub</span>
        </button>
      </div>

      <div className="mt-auto pt-8 text-center">
        <p className="text-sm text-gray-500">
          Don't have an account? <span className="text-primary font-bold cursor-pointer">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
