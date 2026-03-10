import React from 'react';
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
import logo from '../asset/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container w-[95vw] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div>
             <div className="flex items-center mb-4 text-white">
                <img src={typeof logo === 'string' ? logo : logo.src} alt="Logo" className="w-auto h-30 mr-2 bg-white p-1 rounded" />
            </div>
            <p className="text-base font-medium mb-6 leading-relaxed">
              Professional and reliable moving services across Canada. We make your relocation stress-free with expert handling and transparent pricing.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-600 text-white p-3 rounded-full cursor-pointer hover:bg-blue-700 transition">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="bg-pink-600 text-white p-3 rounded-full cursor-pointer hover:bg-pink-700 transition">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="bg-blue-400 text-white p-3 rounded-full cursor-pointer hover:bg-blue-500 transition">
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6">Services</h4>
            <ul className="space-y-4 text-base font-semibold">
              <li><a href="/services/local-moving" className="hover:text-orange-500 transition">Local Moving</a></li>
              <li><a href="/services/long-distance-moving" className="hover:text-orange-500 transition">Long Distance Moving</a></li>
              <li><a href="/services/commercial-relocation" className="hover:text-orange-500 transition">Commercial Relocation</a></li>
              <li><a href="/services/storage-services" className="hover:text-orange-500 transition">Storage Services</a></li>
              <li><a href="/services/packing-supplies" className="hover:text-orange-500 transition">Packing Supplies</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4 text-base font-semibold">
              <li><a href="/get-your-free-quote" className="hover:text-orange-500 transition">Get a Quote</a></li>
              <li><a href="/about" className="hover:text-orange-500 transition">About Us</a></li>
              <li><a href="/getQuote" className="hover:text-orange-500 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6">Contact Us</h4>
            <ul className="space-y-5 text-base font-semibold">
              <li className="flex items-start">
                <MapPin className="w-6 h-6 mr-3 text-orange-500 flex-shrink-0" />
                <span>3174 Eglinton Ave E Suite-202 a,<br/>Scarborough, ON M1J 2H5</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-6 h-6 mr-3 text-orange-500 flex-shrink-0" />
                <span>1-833 838 9898</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-6 h-6 mr-3 text-orange-500 flex-shrink-0" />
                <span>sales@amazonvanlines.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-6 h-6 mr-3 text-orange-500 flex-shrink-0" />
                <span>Mon-Fri: 7am - 8pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-bold text-gray-400">
          <p className="text-base">© 2026 Amazon Van Lines. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-base">
            <span className="flex items-center"><Star className="w-4 h-4 text-yellow-400 mr-2" /> Top Rated on Google</span>
            <span className="flex items-center"><ShieldCheck className="w-4 h-4 text-green-400 mr-2" /> BBB Accredited</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;