"use client";

import React, { useEffect, useState } from 'react';
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import Localmove from "@/asset/localmovers.webp";
import Longmove from "@/asset/longmove.webp";
import Packing from "@/asset/packing.webp";
import Storage from "@/asset/storage.webp";
import Commercial from "@/asset/commercial.webp";
import USMoves from "@/asset/usmover.webp";


// ==========================================
// 1. INDIVIDUAL SERVICE CONTENT COMPONENTS
// ==========================================

const LocalMovesContent = () => (
  <div className="animate-fadeIn">
    <div className="prose prose-lg text-slate-600 text-justify max-w-none">
      <p className="mb-4">
        At <span className="font-semibold text-slate-900">Amazon Van Lines</span>, we offer professional local moving services that take the stress out of relocating, 
        whether you’re moving across town or to a nearby city. Our experienced team provides customized moving 
        solutions for both residential and commercial clients.
      </p>
      <p className="mb-4">
        From <span className="text-blue-600 font-medium">Alberta</span> local movers to <span className="text-blue-600 font-medium">British Columbia</span> moving companies, we ensure that your belongings are 
        handled with care and delivered safely to your new home or office.
      </p>
      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg shadow-sm">
        <p className="italic text-slate-800 m-0">
          "Whether you need Manitoba local moving services, New Brunswick movers, or full-service movers across Prince Edward Island, Amazon Van Lines is here to support you every step of the way."
        </p>
      </div>
      <p>
        We specialize in both residential and commercial moves in New Brunswick, Newfoundland and Labrador, Nova Scotia, and Ontario, offering services tailored to your specific needs.
      </p>
    </div>
  </div>
);

const LongDistanceContent = () => (
  <div className="animate-fadeIn">
    <div className="prose prose-lg text-slate-600 text-justify max-w-none">
      <p className="mb-6">
        Moving across provinces requires detailed planning and precise logistics. Our <span className="font-semibold text-slate-900">Long Distance Moving</span> services are designed to ensure your journey is seamless, whether you are moving from Ontario to British Columbia or Nova Scotia to Alberta.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span> Weekly Shuttles
          </h4>
          <p className="text-sm text-slate-500">Regular routes between major Canadian cities ensuring timely delivery.</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span> Real-Time Tracking
          </h4>
          <p className="text-sm text-slate-500">Stay updated on your shipment's status throughout the journey.</p>
        </div>
      </div>

      <p className="mb-4">
        We provide dedicated trucks and shared load options to suit your budget and timeline. Every item is inventoried, tagged, and tracked to ensure it arrives at your new destination exactly as it left.
      </p>
    </div>
  </div>
);

const PackingContent = () => (
  <div className="animate-fadeIn">
    <div className="prose prose-lg text-slate-600 text-justify max-w-none">
      <p className="mb-4">
        Proper packing is the foundation of a safe move. We offer comprehensive packing services using high-quality materials to protect your valuables. From sturdy boxes and bubble wrap to specialized wardrobe cartons, we have everything you need.
      </p>
      <p className="mb-6">
        Choose our <span className="text-blue-600 font-medium">Full Service Packing</span> where we pack your entire home, or <span className="text-blue-600 font-medium">Partial Packing</span> for just your kitchen or breakables.
      </p>
      
      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
        <h4 className="text-lg font-bold text-slate-900 mb-4">Our Packing Standards</h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li className="flex items-center gap-3">
             <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
             <span>Fragile Items (Glass, Art)</span>
          </li>
          <li className="flex items-center gap-3">
             <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
             <span>Furniture Blanket Wrapping</span>
          </li>
          <li className="flex items-center gap-3">
             <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
             <span>Electronics Protection</span>
          </li>
          <li className="flex items-center gap-3">
             <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
             <span>Wardrobe Boxes for Clothes</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const StorageContent = () => (
  <div className="animate-fadeIn">
    <div className="prose prose-lg text-slate-600 text-justify max-w-none">
      <p className="mb-4">
        Need a place to keep your belongings between homes? Our secure storage facilities offer the perfect solution. Whether you need short-term storage while you wait for possession or long-term options for decluttering, we keep your items safe.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 my-6">
        <div className="flex-1 bg-blue-50 p-4 rounded-lg text-center border border-blue-100">
           <span className="block text-3xl font-bold text-blue-600 mb-1">24/7</span>
           <span className="text-sm text-slate-600 uppercase tracking-wide font-semibold">Security Monitoring</span>
        </div>
        <div className="flex-1 bg-blue-50 p-4 rounded-lg text-center border border-blue-100">
           <span className="block text-3xl font-bold text-blue-600 mb-1">100%</span>
           <span className="text-sm text-slate-600 uppercase tracking-wide font-semibold">Climate Controlled</span>
        </div>
      </div>
      <p>
        Your inventory is crated, sealed, and kept in a moisture-free environment until you are ready for delivery.
      </p>
    </div>
  </div>
);

const CommercialContent = () => (
  <div className="animate-fadeIn">
    <div className="prose prose-lg text-slate-600 text-justify max-w-none">
      <p className="mb-4">
        Time is money. We understand that minimizing downtime is critical for your business. Amazon Van Lines offers comprehensive commercial moving services tailored to get your office back up and running as quickly as possible.
      </p>
      <h4 className="text-lg font-bold text-slate-900 mt-6 mb-3">Specialized Office Services:</h4>
      <ul className="list-none pl-0 space-y-3">
        <li className="flex gap-4 items-start">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5"></div>
          <span><strong>IT & Server Relocation:</strong> Specialized handling for sensitive electronics.</span>
        </li>
        <li className="flex gap-4 items-start">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5"></div>
          <span><strong>Furniture Installation:</strong> Disassembly and reassembly of cubicles and desks.</span>
        </li>
        <li className="flex gap-4 items-start">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5"></div>
          <span><strong>Confidentiality:</strong> Secure file archiving and document handling.</span>
        </li>
      </ul>
    </div>
  </div>
);

const USMovesContent = () => (
  <div className="animate-fadeIn">
    <div className="prose prose-lg text-slate-600 text-justify max-w-none">
      <p className="mb-6">
        Moving from Canada to the USA? We specialize in cross-border relocations. Navigating customs documentation can be complex, but our experienced team guides you through every step of the process.
      </p>
      <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg mb-6">
        <h4 className="font-bold text-amber-800 mb-1">Customs Assistance Included</h4>
        <p className="text-sm text-amber-700 m-0">We help prepare all necessary forms (3299, Supplemental Declaration) to ensure your goods clear customs without delay.</p>
      </div>
      <p>
        From Toronto to Florida or Vancouver to California, we get you there smoothly with our direct line haul services.
      </p>
    </div>
  </div>
);


// ==========================================
// 2. DATA CONFIGURATION
// ==========================================

interface ServiceConfig {
  id: string;
  title: string;
  heading: string;
  image: string;
  icon: React.ReactNode;
  Component: React.FC; // The component to render
}

const services: ServiceConfig[] = [
  {
    id: 'local',
    title: 'Local Moves',
    heading: 'Reliable Local Moving Services',
    image: Localmove.src, // Using the image src as a string
    Component: LocalMovesContent,
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
  },
  {
    id: 'long-distance',
    title: 'Long Distance',
    heading: 'Canada-Wide Long Distance Moves',
    image: Longmove.src,
    Component: LongDistanceContent,
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    id: 'packing',
    title: 'Packing Supplies',
    heading: 'Professional Packing & Supplies',
    image: Packing.src,
    Component: PackingContent,
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
  },
  {
    id: 'storage',
    title: 'Storage Services',
    heading: 'Secure Climate-Controlled Storage',
    image: Storage.src,
    Component: StorageContent,
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
  },
  {
    id: 'commercial',
    title: 'Commercial Moves',
    heading: 'Efficient Office Relocations',
    image: Commercial.src,
    Component: CommercialContent,
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
  },
  {
    id: 'us-moves',
    title: 'US Moves',
    heading: 'Cross-Border Moves to the USA',
    image: USMoves.src,
    Component: USMovesContent,
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
  },
];

const features = [
  {
    title: "Experienced Professionals",
    description: "Our trained and experienced movers in Saskatchewan and Ontario understand the challenges of long-distance moves and provide exceptional care for your belongings.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
  },
  {
    title: "Cross-Country Expertise",
    description: "Whether you're moving your home or business, we offer reliable residential and commercial moving services across New Brunswick, Ontario, and Nova Scotia.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    title: "Customized Solutions",
    description: "We offer tailored services across Quebec, Nova Scotia, and Manitoba, adapting our approach to suit the unique demands of each move.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
  },
  {
    title: "Transparent Pricing",
    description: "Enjoy competitive and transparent pricing with no hidden fees for all our long-distance moving services across New Brunswick, Alberta, and British Columbia.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    title: "Secure Transport",
    description: "Our Alberta and Manitoba local moving services are competitively priced, providing clear and upfront quotes while ensuring your belongings are safe.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
  },
  {
    title: "Timely Delivery",
    description: "Our team ensures that your possessions are delivered on time, allowing you to settle into your new home without delays.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  }
];


// ==========================================
// 3. LAYOUT SUB-COMPONENTS
// ==========================================

const HeroSection = ({ activeService }: { activeService: ServiceConfig }) => (
  <div className="relative h-[600px] w-full overflow-hidden transition-all duration-500">
    <div key={activeService.id} className="absolute inset-0 w-full h-full animate-fadeIn">
      <img
        src={activeService.image}
        alt={activeService.heading}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>
    
    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>

    <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          <span className="text-blue-100 text-xs font-bold tracking-widest uppercase">Trusted Across Canada</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
          {activeService.title} <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">Services</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
           We deliver excellence in every {activeService.title.toLowerCase()}. Choose our comprehensive solutions for a seamless and stress-free experience.
        </p>
      </div>
    </div>
  </div>
);

const Sidebar = ({ 
  activeServiceId, 
  onSelect 
}: { 
  activeServiceId: string; 
  onSelect: (s: ServiceConfig) => void; 
}) => (
  <div className="space-y-8 sticky top-8">
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-blue-600 px-6 py-4">
        <h3 className="text-lg font-bold text-white">Our Services</h3>
      </div>
      <nav className="flex flex-col">
        {services.map((service) => (
          <button 
            key={service.id} 
            onClick={() => onSelect(service)}
            className={`group w-full flex items-center justify-between px-6 py-4 text-sm font-medium transition-all text-left border-b border-slate-100 last:border-0 ${
              activeServiceId === service.id 
                ? 'bg-blue-50 text-blue-700 border-l-4 border-l-blue-600' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600 hover:border-l-4 hover:border-l-blue-300 border-l-4 border-l-transparent'
            }`}
          >
            <span className="flex items-center gap-3">
               {service.icon}
               {service.title}
            </span>
            {activeServiceId === service.id && (
               <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
            )}
          </button>
        ))}
      </nav>
    </div>

    <div className="bg-slate-900 rounded-xl shadow-lg p-6 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-600 rounded-full opacity-20 blur-xl"></div>
      <h3 className="text-xl font-bold mb-2 relative z-10">Need Any Help?</h3>
      <p className="text-slate-300 text-sm mb-6 relative z-10">
        Contact Amazon Van Lines today for a free quote and experience hassle-free moving.
      </p>
      <a 
        href="tel:5877015576" 
        className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-md relative z-10"
      >
        Contact Us
      </a>
      <div className="mt-4 flex justify-center text-xs text-slate-400 gap-2">
        <span>Call:</span>
        <a href="tel:18338389898" className="text-white hover:underline">1-833 838 9898</a>
      </div>
    </div>
  </div>
);

const FeaturesGrid = () => (
  <section className="bg-slate-900 py-20 px-6 lg:px-8 border-t border-slate-800">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Why Choose Amazon Van Lines?
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          // Adjusted layout logic: 
          // If we have 6 items, a standard 3x2 grid works best (no need for col-span-2 on first item).
          // If the user preferred the Bento style (5 items), we can revert. 
          // Since we now have 6 extracted features, a uniform grid is cleaner.
          // I will remove the specific col-span logic for index 0 to make it a uniform grid.
          return (
            <div 
              key={index} 
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:bg-slate-750 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <span className="text-slate-600 font-mono text-xs font-bold opacity-50">0{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const ContactBanner = () => (
  <section className="bg-blue-50 py-16 px-6 lg:px-8"> {/* Light background */}
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
        Ready for a Free Quote?
      </h2>
      <p className="mt-4 text-lg text-blue-700">
        Let us make your next move seamless and stress-free. Get a personalized estimate today!
      </p>
      <a 
        href="/getQuote" 
        className="mt-8 inline-block bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold py-3 px-8 rounded-full transition-colors shadow-md"
      >
        Get Your Free Quote
      </a>
    </div>
  </section>
);


// ==========================================
// 4. MAIN CONTAINER COMPONENT
// ==========================================

const ServiceSection = () => {
  const [activeService, setActiveService] = useState<ServiceConfig>(services[0]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      const serviceFromHash = services.find(s => s.id === hash);
      if (serviceFromHash) {
        setActiveService(serviceFromHash);
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleServiceSelect = (service: ServiceConfig) => {
    window.location.hash = service.id;
  };

  // Extract the specific component for the active service
  const ActiveContentComponent = activeService.Component;

  return (
    <div className="bg-slate-50 font-sans text-slate-900">
      
      {/* 1. Hero */}
      <HeroSection activeService={activeService} />

      {/* 2. Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-3">
            <Sidebar 
              activeServiceId={activeService.id} 
              onSelect={handleServiceSelect} 
            />
          </div>

          {/* Service Detail View */}
          <div className="lg:col-span-9 space-y-8 animate-fadeIn">
            <section key={activeService.id} className="animate-fadeIn">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6 relative inline-block">
                {activeService.heading}
                <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-blue-600 rounded-full translate-y-2"></span>
              </h2>
              
              <div className="mb-8 rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 w-full relative group">
                  <img 
                    src={activeService.image} 
                    alt={activeService.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium bg-blue-600/80 px-3 py-1 rounded-md inline-block backdrop-blur-sm">
                        Amazon Van Lines
                      </p>
                  </div>
              </div>

              {/* Render the specific component for this service */}
              <ActiveContentComponent />
            </section>
          </div>

        </div>
      </div>

      {/* 3. Features Footer */}
      <FeaturesGrid />

      {/* 4. Contact Banner */}
      <ContactBanner />
      
      {/* Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>

    </div>
  );
};

const ServicePage = () => {
  return (
    <>
      <Header />
      <ServiceSection />
      <Footer />
    </>
  );
};

export default ServicePage;