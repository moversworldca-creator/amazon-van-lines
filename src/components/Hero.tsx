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

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/quote';
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
          moveSize: '1-2 Bedrooms',
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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-900 overflow-hidden min-h-screen flex items-center">
        {/* Abstract Background Shapes for depth */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-600 blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-orange-600 blur-3xl opacity-20 animate-pulse delay-1000"></div>

      {/* Background Image with Solid Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={Banner} 
          alt="Moving Van" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-100 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-700 via-transparent to-slate-800/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Hero Text */}
          <div className="lg:w-1/2 text-white space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-900/50 border border-blue-700/50 rounded-full pl-2 pr-4 py-1">
                <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">NEW</span>
                <span className="text-sm font-medium text-blue-100">Voted #1 Movers in 2024</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
              We Move Your <br/>
              <span className="text-blue-500">World</span> Safely.
            </h1>
            
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              From local apartments to cross-country relocations, Amazon Van Lines delivers peace of mind. Trusted by thousands of Canadians for reliable, insured moving services.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-500/20 p-2 rounded-lg border border-blue-500/30">
                    <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                    <h4 className="font-bold text-white">Fully Insured</h4>
                    <p className="text-xs text-slate-400">Comprehensive coverage</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-orange-500/20 p-2 rounded-lg border border-orange-500/30">
                    <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                    <h4 className="font-bold text-white">On-Time Guarantee</h4>
                    <p className="text-xs text-slate-400">Punctual pickup & delivery</p>
                </div>
              </div>
            </div>

            {/* Google Reviews */}
            <div className="flex items-center space-x-4 pt-4 border-t border-slate-700/50">
                <div className="flex text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                </div>
                <div className="text-sm font-medium">
                    <span className="text-white">4.9/5</span>
                    <span className="text-slate-400 mx-2">•</span>
                    <span className="text-slate-400">Based on 500+ Reviews</span>
                </div>
            </div>
          </div>

          {/* Form - Solid Card Design */}
          <div className="lg:w-[480px] w-full bg-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-slate-900/5">
            <div className="bg-slate-50 p-6 border-b border-slate-100 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Get a Free Estimate</h3>
                <p className="text-slate-500 text-xs mt-1">Takes less than 30 seconds</p>
              </div>
              <div className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Available Now
              </div>
            </div>
            
            {/* 4. Wrapped in <form> tag */}
            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
              <div className="space-y-4">
                {/* Inputs */}
                 <div className="grid grid-cols-2 gap-4">
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
                        <option>Studio</option>
                        <option>1-2 Bedrooms</option>
                        <option>3-4 Bedrooms</option>
                        <option>5+ Bedrooms</option>
                        <option>Commercial</option>
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