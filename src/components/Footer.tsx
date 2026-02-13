import React from 'react';
import Image from "next/image";
import Logo from "@/asset/logo.png";
import { 
  Truck, 
  Facebook, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Star, 
  ShieldCheck 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div>
             <div className="flex items-center mb-4 text-white">
                <Image src={Logo} alt="Logo" className="w-auto h-30 mr-2 bg-white p-1 rounded" />
            </div>
            <p className="text-sm mb-6 leading-relaxed">
              Professional and reliable moving services across Canada. We make your relocation stress-free with expert handling and transparent pricing.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="bg-pink-600 text-white p-2 rounded-full cursor-pointer hover:bg-pink-700 transition">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="bg-blue-400 text-white p-2 rounded-full cursor-pointer hover:bg-blue-500 transition">
                <Mail className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition">Local Moving</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Long Distance Moving</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Commercial Relocation</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Storage Services</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Packing Supplies</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/get-your-free-quote" className="hover:text-orange-500 transition">Get a Quote</a></li>
              <li><a href="#about" className="hover:text-orange-500 transition">About Us</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0" />
                <span>3174 Eglinton Ave E Suite-202 a,<br/>Scarborough, ON M1J 2H5</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0" />
                <span>1-833 838 9898</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0" />
                <span>sales@amazonvanlines.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0" />
                <span>Mon-Fri: 7am - 8pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2024 Amazon Van Lines. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="flex items-center"><Star className="w-3 h-3 text-yellow-400 mr-1" /> Top Rated on Google</span>
            <span className="flex items-center"><ShieldCheck className="w-3 h-3 text-green-400 mr-1" /> BBB Accredited</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;