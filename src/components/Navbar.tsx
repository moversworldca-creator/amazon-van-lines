"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ShieldCheck, ChevronDown } from 'lucide-react';
import Image from "next/image";
import Logo from "@/asset/logo.png";
import BBBlogo from "@/asset/bbb.png";

const services = [
    { name: 'Local Moves', href: '/service#local' },
    { name: 'Long Distance', href: '/service#long-distance' },
    { name: 'Packing Supplies', href: '/service#packing' },
    { name: 'Storage Services', href: '/service#storage' },
    { name: 'Commercial Moves', href: '/service#commercial' },
    { name: 'US Moves', href: '/service#us-moves' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full h-30 z-50 transition-all duration-300">
      {/* Top Bar - Contact & Social */}
      <div className="bg-blue-900 text-white py-2 text-xs md:text-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <a href="tel:1-833-838-9898" className="flex items-center hover:text-blue-200 transition">
              <Phone className="w-4 h-4 mr-1" />
              <b className="font-extrabold text-xl">Toll Free: 1-833-838-9898</b>
            </a>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center font-bold text-25">
              <ShieldCheck className="w-4 h-4 mr-1 text-yellow-400 " />
              A Canadian Company
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://www.bbb.org/ca/on/scarborough/profile/moving-services/amazon-van-lines-0107-1411717/#sealclick"><Image src={BBBlogo} alt="bbb Accredited image" className="h-10 w-auto"/></a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`bg-white h-20 shadow-md transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center ">
            <div className="mr-2 overflow-visible">
              <Image src={Logo} alt="Logo" className="w-auto h-14" />
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 font-medium hover:text-blue-700 transition">Home</Link>
            <div 
              className="relative"
              onMouseEnter={() => setServicesMenuOpen(true)}
              onMouseLeave={() => setServicesMenuOpen(false)}
            >
              <button className="flex items-center text-gray-700 font-medium hover:text-blue-700 transition">
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isServicesMenuOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md  py-2 w-56 z-10">
                  {services.map((service) => (
                    <Link key={service.name} href={service.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-700 transition">
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/#offers" className="text-gray-700 font-medium hover:text-blue-700 transition">Offers</Link>
            <Link href="/about" className="text-gray-700 font-medium hover:text-blue-700 transition">About Us</Link>
            <Link href="/getQuote" className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-bold transition shadow-lg transform hover:-translate-y-0.5">
              Get A Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="flex flex-col p-4 space-y-4">
            <Link href="/" className="text-gray-800 font-medium" onClick={() => setIsOpen(false)}>Home</Link>
            <div>
              <button 
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} 
                className="w-full text-left flex justify-between items-center text-gray-800 font-medium"
              >
                Services
                <ChevronDown className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileServicesOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-blue-100">
                  {services.map((service) => (
                    <Link 
                      key={service.name} 
                      href={service.href} 
                      className="block text-gray-700 hover:text-blue-700" 
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/#offers" className="text-gray-800 font-medium" onClick={() => setIsOpen(false)}>Offers</Link>
            <Link href="/about" className="text-gray-800 font-medium" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link href="/getQuote" className="bg-orange-500 text-white text-center py-3 rounded-md font-bold" onClick={() => setIsOpen(false)}>
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

// 3. REQUIRED Export
export default Header;