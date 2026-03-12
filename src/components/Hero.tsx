"use client";
import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, ArrowRight, Star, Shield, Clock } from 'lucide-react';
import Image from "next/image";
import Banner from "@/asset/hero_baner.webp";

const Hero = () => {
  
  // 1. State for handling form data
  const [formData, setFormData] = useState({
    fromZip: '',
    toZip: '',
    moveDate: '',
    moveSize: '1-2 Bedrooms', // Default value
    fullName: '',
    email: '',
    phone: ''
  });

  // State for submission status
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [minDate] = useState(() => {
    if (typeof window !== 'undefined') {
      return new Date().toISOString().split('T')[0];
    }
    return '';
  });

  // 2. Handler for input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 3. Handler for form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Split full name into first and last name for the backend
      const nameParts = formData.fullName.trim().split(/\s+/);
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || 'N/A';

      // Determine API URL based on environment
      const defaultApiUrl = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
        ? 'http://localhost:5000/api/quote'
        : '/api/quote';
        
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || defaultApiUrl;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email: formData.email,
          phone: formData.phone,
          moveDate: formData.moveDate,
          moveSize: formData.moveSize,
          pickupCity: formData.fromZip,
          dropoffCity: formData.toZip,
          moveType: 'Quote Request', // Matches backend badge
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        // Reset form on success
        setFormData({
          fromZip: '',
          toZip: '',
          moveDate: '',
          moveSize: '1 Bedrooms',
          fullName: '',
          email: '',
          phone: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id='hero' className="relative pt-28 pb-12 md:pt-40 md:pb-32 sm:pb-42 bg-slate-900 overflow-hidden min-h-screen flex items-center">
        {/* Abstract Background Shapes for depth */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-600 blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-orange-600 blur-3xl opacity-20 animate-pulse delay-1000"></div>

      {/* Background Image with Solid Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={Banner} 
          alt="Moving Van" 
          className="w-full h-full object-cover bg-top "
        />
        <div className="absolute inset-0  mix-blend-multiply"></div>
        <div className="absolute inset-0 "></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Hero Text */}
          
          <div className="lg:w-1/2 text-white space-y-6 md:space-y-8">
            <section className='pt-20'>
            <div className="inline-flex items-center space-x-2 bg-blue-900/50 border border-blue-700/50 rounded-full pl-2 pr-4 py-1">
                <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">NEW</span>
                <span className="text-sm font-medium text-blue-100">Voted #1 Movers in 2024</span>
            </div>

            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
              We Move Your <br className="hidden sm:block" />
              <span className="text-blue-500">World</span> Safely.
              </h1>
            </section>
            <div className='hidden lg:block h-[20vh]'></div>
                        
          </div>

          {/* Form - Solid Card Design */}
          <div className="lg:w-[480px] w-full bg-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-slate-900/5">
            <div className="bg-slate-50 p-5 md:p-6 border-b border-slate-100 flex justify-between items-center">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900">Get a Free Estimate</h3>
                <p className="text-slate-500 text-[10px] md:text-xs mt-0.5">Takes less than 30 seconds</p>
              </div>
              <div className="bg-green-100 text-green-700 text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded-full flex items-center shadow-sm">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full mr-1.5 md:mr-2 animate-pulse"></span>
                Available Now
              </div>
            </div>
            
            {/* 4. Wrapped in <form> tag */}
            <form onSubmit={handleSubmit} className="p-5 md:p-8 space-y-4 md:space-y-5">
              <div className="space-y-3 md:space-y-4">
                {/* Inputs */}
                 <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">From</label>
                    <div className="relative group">
                      <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                      <input 
                        type="text" 
                        name="fromZip"
                        value={formData.fromZip}
                        onChange={handleChange}
                        required
                        autoComplete="postal-code"
                        placeholder="Zip / City" 
                        className="w-full pl-9 pr-3 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm font-medium text-slate-900 placeholder-slate-400 transition-all" 
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">To</label>
                    <div className="relative group">
                      <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                      <input 
                        type="text" 
                        name="toZip"
                        value={formData.toZip}
                        onChange={handleChange}
                        required
                        autoComplete="postal-code"
                        placeholder="Zip / City" 
                        className="w-full pl-9 pr-3 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm font-medium text-slate-900 placeholder-slate-400 transition-all" 
                      />
                    </div>
                  </div>
                </div>

                {/* Date & Type */}
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Date</label>
                    <div className="relative group">
                        <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                        <input 
                          type="date" 
                          name="moveDate"
                          value={formData.moveDate}
                          onChange={handleChange}
                          required
                          className="w-full pl-9 pr-3 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm font-medium text-slate-600 transition-all" 
                        />
                    </div>
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Move Size</label>
                        <select 
                          name="moveSize"
                          value={formData.moveSize}
                          onChange={handleChange}
                          className="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm font-medium text-slate-700 transition-all"
                        >
                        <option>1 Bedrooms</option>
                        <option>2 Bedrooms</option>
                        <option>3 Bedrooms</option>
                        <option>4 Bedrooms</option>
                        <option>5 or More Bedrooms</option>
                        <option>Commercial</option>
                        <option>Studio</option>
                        </select>
                    </div>
                </div>

                 {/* Contact */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Contact Info</label>
                  <div className="grid grid-cols-1 gap-3">
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      placeholder="Full Name" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm font-medium text-slate-900 transition-all" 
                    />
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      placeholder="Email Address" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm font-medium text-slate-900 transition-all" 
                    />
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      autoComplete="tel"
                      placeholder="Phone Number" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm font-medium text-slate-900 transition-all" 
                    />
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className={`w-full ${status === 'submitting' ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all transform ${status !== 'submitting' && 'hover:-translate-y-1'} flex items-center justify-center group`}
              >
                <span>{status === 'submitting' ? 'Sending Request...' : 'Calculate My Quote'}</span>
                {status !== 'submitting' && <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
              </button>

              {status === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm font-medium text-center animate-in fade-in slide-in-from-top-2">
                  ✓ Quote request sent! We'll contact you shortly.
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm font-medium text-center">
                  ✕ Failed to send. Please try again or call us.
                </div>
              )}
            </form>
             <div className="bg-slate-50 p-4 border-t border-slate-100 text-center">
                <p className="text-[11px] text-slate-400">
                    By clicking "Calculate My Quote", you agree to our Terms of Service and Privacy Policy.
                </p>
             </div>
          </div>
        </div>
        
      </div>
      
    </section>
    
  );
};

export default Hero;