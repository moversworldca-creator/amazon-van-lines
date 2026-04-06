"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import bannerImage from "@/asset/trust-baner.webp";

// --- Location Data ---
const locations = [
  {
    city: "Head Office (Scarborough)",
    address: "3174 Eglinton Ave E Suite-202 a, Scarborough, ON M1J 2H5",
    mapUrl: "https://maps.google.com/maps?q=3174%20Eglinton%20%20Ave%20E%20Suite-202%20a%2C%20Scarborough%2C%C2%A0ON%C2%A0M1J%C2%A02H5&t=m&z=12&output=embed"
  },
  {
    city: "Brampton",
    address: "58 Banting Crescent, Brampton, ON L6Y 2K9",
    mapUrl: "https://maps.google.com/maps?q=58%20Banting%20Crescent%2C%20Brampton%2C%20ON%20L6Y%202K9&t=m&z=12&output=embed"
  },
  {
    city: "Ottawa",
    address: "333 Ventoux Ave, Ottawa, ON K4A 5L8",
    mapUrl: "https://maps.google.com/maps?q=333%20Ventoux%20Ave%2C%20Ottawa%2C%20ON%20K4A%205L8&t=m&z=12&output=embed"
  },
  {
    city: "Calgary",
    address: "100 Auburn Meadows Boulevard SE, Calgary, AB T3M 2E1",
    mapUrl: "https://maps.google.com/maps?q=100%20Auburn%20Meadows%20Boulevard%20SE%2C%20Calgary%2C%20Alberta%20T3M%202E1%2C%20Canada&t=m&z=12&output=embed"
  },
  {
    city: "Edmonton",
    address: "217 Huntington Hill NW, Edmonton, AB T6H 5Y6",
    mapUrl: "https://maps.google.com/maps?q=217%20Huntington%20Hill%20NW%2C%20Edmonton%2C%20AB%C2%A0T6H%C2%A05Y6%2C%C2%A0Canada&t=m&z=12&output=embed"
  },
  {
    city: "Winnipeg",
    address: "23 Atlas Cres, Winnipeg, MB R2V 5A8",
    mapUrl: "https://maps.google.com/maps?q=23%20Atlas%20Cres%2C%20Winnipeg%2C%20MB%20R2V%205A8%2C%20Canada&t=m&z=12&output=embed"
  },
  {
    city: "British Columbia (Surrey)",
    address: "8629 141 St, Surrey, BC V3W 3A9",
    mapUrl: "https://maps.google.com/maps?q=8629%20141%20StSurrey%2C%20BC%20V3W%203A9%2C%20Canada&t=m&z=12&output=embed"
  },
  {
    city: "New Brunswick (Moncton)",
    address: "77 Penrose St, Moncton, NB E1E 4W5",
    mapUrl: "https://maps.google.com/maps?q=77%20Penrose%20StMoncton%2C%20NB%20E1E%204W5&t=m&z=12&output=embed"
  },
  {
    city: "Nova Scotia",
    address: "184 Jackladder Dr, Middle Sackville, NS B4E 0A6",
    mapUrl: "https://maps.google.com/maps?q=184%20Jackladder%20DrMiddle%20Sackville%2C%20NS%20B4E%200A6&t=m&z=12&output=embed"
  },
  {
    city: "Newfoundland",
    address: "24 Ladysmith Dr, St. John's, NL A1B 0G4",
    mapUrl: "https://maps.google.com/maps?q=24%20Ladysmith%20DrSt.%20John%27s%2C%20NL%20A1B%200G4%2C%20Canada&t=m&z=12&output=embed"
  }
];

export default function ContactUsClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <div className="font-sans text-gray-800 antialiased bg-white flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* --- Hero Banner --- */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={bannerImage.src} 
              alt="Contact Us" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
                <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">Connect With Us</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Get in Touch <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">We're Here to Help</span>
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed opacity-90">
              Have questions about your upcoming move? Our relocation specialists are available 7 days a week to provide the support you need.
            </p>
          </div>
        </section>

        {/* --- Contact Info Cards --- */}
        <section className="py-12 -mt-10 relative z-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-start space-x-5 group hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="bg-blue-50 p-4 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Call Us</h4>
                  <p className="text-blue-600 font-bold text-xl mb-1 hover:text-blue-700 transition-colors">
                    <a href="tel:18338389898">1-833 838 9898</a>
                  </p>
                  <p className="text-slate-500 text-sm">Toll Free across Canada</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-start space-x-5 group hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="bg-orange-50 p-4 rounded-xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Email Us</h4>
                  <p className="text-orange-600 font-bold text-lg mb-1 hover:text-orange-700 transition-colors">
                    <a href="mailto:info@amazonvanlines.com">sales@amazonvanlines.com</a>
                  </p>
                  <p className="text-slate-500 text-sm">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-start space-x-5 group hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="bg-green-50 p-4 rounded-xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Business Hours</h4>
                  <p className="text-slate-800 font-bold text-sm">Mon - Fri: 7am - 8pm</p>
                  <p className="text-slate-800 font-bold text-sm">Sat - Sun: 8am - 5pm</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Main Form & Map Section --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16">
              
              {/* Contact Form */}
              <div className="lg:w-1/2">
                <div className="mb-10">
                  <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-3">Get in Touch</h2>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Send Us a Message</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Ready to make your move? Whether you have questions or are looking for a free quote, our team is here to help.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400 font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(555) 000-0000"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400 font-medium"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400 font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your move..."
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400 font-medium resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-5 rounded-xl transition-all shadow-xl shadow-slate-200 flex items-center justify-center space-x-3 group"
                  >
                    <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                    <Send className={`w-5 h-5 transition-transform ${status === 'idle' && 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
                  </button>

                  {status === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm font-medium text-center animate-in fade-in slide-in-from-top-2">
                      ✓ Thank you! We have received your message and will get back to you soon.
                    </div>
                  )}
                </form>
              </div>

              {/* Head Office Map & Details */}
              <div className="lg:w-1/2 flex flex-col">
                <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 flex-grow shadow-inner relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4">
                     <div className="bg-white px-4 py-2 rounded-full shadow-md flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-bold text-slate-600">Main Hub</span>
                     </div>
                  </div>
                  
                  <h4 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                    Head Office
                  </h4>
                  
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg h-[350px] mb-8">
                    <iframe 
                      src={locations[0].mapUrl}
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Head Office Map"
                    ></iframe>
                  </div>

                  <div className="space-y-4">
                    <p className="flex items-start text-slate-700 font-medium text-sm">
                      <span className="bg-white p-1.5 rounded-lg shadow-sm mr-3 mt-0.5">
                        <MapPin className="w-4 h-4 text-orange-500" />
                      </span>
                      {locations[0].address}
                    </p>
                    <div className="flex flex-wrap gap-4">
                       <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-xs font-bold">
                          Moving Professionals
                       </div>
                       <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-lg text-xs font-bold">
                          Secure Storage
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Multi-Location Grid --- */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Network</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Service Locations Across Canada</h3>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.slice(1).map((loc, index) => (
                <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col group hover:-translate-y-1 transition-all duration-300">
                  <div className="h-48 relative">
                    <iframe 
                      src={loc.mapUrl}
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      title={`${loc.city} Map`}
                    ></iframe>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-md">
                       <span className="text-xs font-extrabold text-blue-800 uppercase tracking-wider">{loc.city}</span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-3">{loc.city} Branch</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        Serving the {loc.city} region and surrounding communities with premium relocation services.
                      </p>
                    </div>
                    <div className="pt-4 border-t border-slate-50 flex items-start">
                       <MapPin className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                       <p className="text-xs font-bold text-slate-500 leading-relaxed uppercase tracking-tight italic">
                         {loc.address}
                       </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-20 bg-slate-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -ml-32 -mt-32"></div>
               <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl -mr-32 -mb-32"></div>
               
               <h4 className="text-2xl md:text-4xl font-extrabold mb-6 relative z-10">Don't hesitate to contact us for more information.</h4>
               <p className="text-blue-100 max-w-2xl mx-auto mb-10 opacity-80 relative z-10">
                 Ready to make your move? Whether you have questions or are looking for a free quote, our team is here to help. Contact us today and let’s get started on making your next move stress-free and efficient!
               </p>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                  <a href="/getQuote" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center group">
                    <span>Get Free Quote</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="tel:18338389898" className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all shadow-lg flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    <span>Call 1-833 838 9898</span>
                  </a>
               </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
