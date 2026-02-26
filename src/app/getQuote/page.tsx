"use client";
import React, { useState } from 'react';
// Fixing the import path to locate the component correctly from this folder depth
import Header from '../../components/Navbar';
import { 
  MapPin, 
  Calendar, 
  Package, 
  Truck, 
  User, 
  Mail, 
  Phone, 
  Info, 
  CheckCircle, 
  ArrowRight, 
  ShieldCheck,
  Loader2
} from 'lucide-react';

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    moveType: 'Local Move',
    moveSize: '1 Bedroom',
    pickupAddress: '',
    pickupCity: '',
    dropoffAddress: '',
    dropoffCity: '',
    moveDate: '',
    details: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
          // 1. Send the data to the backend
          const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/quote';
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
      const result = await response.json();

      // 2. Handle the server's response
      if (response.ok) {
        setIsSubmitted(true);
        // Optional: Reset form values
        setFormData({
          firstName: '', lastName: '', email: '', phone: '',
          moveType: 'Local Move', moveSize: '1 Bedroom',
          pickupAddress: '', pickupCity: '', dropoffAddress: '', dropoffCity: '',
          moveDate: '', details: ''
        });
      } else {
        alert(`Oops! ${result.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert("There was a problem connecting to the server. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-sans text-gray-800 antialiased bg-gray-50 min-h-screen flex flex-col">
      <Header />

      {/* Page Header / Banner */}
      <div className="bg-blue-900 text-white pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Get Your Free Moving Quote</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Fill out the form below for a precise, no-obligation estimate. We make your move stress-free from start to finish.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT COLUMN: The Quote Form or Success Message */}
          <div className="lg:w-2/3">
            {isSubmitted ? (
              <div className="bg-white rounded-xl shadow-xl p-10 md:p-16 text-center space-y-6 border border-gray-100 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-14 h-14" />
                </div>
                <h2 className="text-3xl font-extrabold text-blue-900">Request Received!</h2>
                <p className="text-gray-600 text-lg max-w-md mx-auto leading-relaxed">
                  Thank you for choosing Amazon Van Lines. Your quote request has been successfully sent to our moving specialists.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-xl text-left max-w-lg mx-auto border border-blue-100 mt-8">
                  <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                    <Info className="w-5 h-5 mr-2 text-orange-500" /> What happens next?
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-3">
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-blue-800 w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold mr-3 mt-0.5 shrink-0">1</span>
                      A moving specialist will review your details and inventory.
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-blue-800 w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold mr-3 mt-0.5 shrink-0">2</span>
                      We will contact you via phone or email within 24 hours.
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-200 text-blue-800 w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold mr-3 mt-0.5 shrink-0">3</span>
                      You'll receive a detailed, transparent PDF estimate.
                    </li>
                  </ul>
                </div>
                
                <div className="pt-6">
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-blue-600 font-bold hover:text-blue-800 transition flex items-center justify-center mx-auto"
                  >
                    Need another quote? <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-orange-500 p-4">
                  <h2 className="text-white font-bold text-lg flex items-center">
                    <Info className="w-5 h-5 mr-2" /> 
                    Tell us about your move
                  </h2>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
                  
                  {/* Section 1: Contact Details */}
                  <div>
                    <h3 className="text-blue-900 font-bold text-lg mb-4 flex items-center border-b pb-2">
                      <User className="w-5 h-5 mr-2 text-orange-500" /> 
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-600">First Name <span className="text-red-500">*</span></label>
                        <input 
                          type="text" name="firstName" required 
                          value={formData.firstName}
                          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-600">Last Name <span className="text-red-500">*</span></label>
                        <input 
                          type="text" name="lastName" required 
                          value={formData.lastName}
                          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-600">Email Address <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                          <input 
                            type="email" name="email" required 
                            value={formData.email}
                            className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-600">Phone Number <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                          <input 
                            type="tel" name="phone" required 
                            value={formData.phone}
                            className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Move Details */}
                  <div>
                    <h3 className="text-blue-900 font-bold text-lg mb-4 flex items-center border-b pb-2">
                      <Truck className="w-5 h-5 mr-2 text-orange-500" /> 
                      Move Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-600">Move Date <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                          <input 
                            type="date" name="moveDate" required 
                            value={formData.moveDate}
                            className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-700"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-600">Type of Move</label>
                        <select 
                          name="moveType" 
                          value={formData.moveType}
                          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                          onChange={handleChange}
                        >
                          <option>Local Move</option>
                          <option>Long Distance</option>
                          <option>Commercial / Office</option>
                          <option>Cross Border (US)</option>
                        </select>
                      </div>
                    </div>

                    {/* Addresses */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <label className="text-sm font-semibold text-gray-600">Moving From (City/Zip) <span className="text-red-500">*</span></label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                            <input 
                              type="text" name="pickupCity" required placeholder="e.g. Toronto, ON"
                              value={formData.pickupCity}
                              className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label className="text-sm font-semibold text-gray-600">Pickup Address (Optional)</label>
                          <input 
                            type="text" name="pickupAddress" placeholder="Street Address"
                            value={formData.pickupAddress}
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-1">
                          <label className="text-sm font-semibold text-gray-600">Moving To (City/Zip) <span className="text-red-500">*</span></label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                            <input 
                              type="text" name="dropoffCity" required placeholder="e.g. Vancouver, BC"
                              value={formData.dropoffCity}
                              className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label className="text-sm font-semibold text-gray-600">Dropoff Address (Optional)</label>
                          <input 
                            type="text" name="dropoffAddress" placeholder="Street Address"
                            value={formData.dropoffAddress}
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Inventory */}
                  <div>
                    <h3 className="text-blue-900 font-bold text-lg mb-4 flex items-center border-b pb-2">
                      <Package className="w-5 h-5 mr-2 text-orange-500" /> 
                      Inventory & Size
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-600">Home Size</label>
                        <select 
                          name="moveSize" 
                          value={formData.moveSize}
                          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                          onChange={handleChange}
                        >
                          <option>Studio / Bachelor</option>
                          <option>1 Bedroom Apartment</option>
                          <option>2 Bedroom Apartment</option>
                          <option>2 Bedroom House</option>
                          <option>3 Bedroom House</option>
                          <option>4+ Bedroom House</option>
                          <option>Small Office</option>
                          <option>Large Office</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-600">Additional Details / Special Items</label>
                        <textarea 
                          name="details" 
                          rows={3}
                          value={formData.details}
                          placeholder="e.g. Piano, Pool Table, heavy safe, or strict elevator times..."
                          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button 
                      disabled={isLoading}
                      className={`w-full ${isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800'} text-white font-bold text-lg py-4 rounded-xl shadow-lg transition transform ${!isLoading && 'hover:-translate-y-1'} flex items-center justify-center`}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 w-5 h-5 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          Submit Quote Request <ArrowRight className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-gray-400 mt-4">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </div>

                </form>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Sidebar Info */}
          <div className="lg:w-1/3 space-y-8">
            
            {/* Contact Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-500">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Need Help?</h3>
              <p className="text-gray-600 text-sm mb-6">
                Not sure about the details? Give us a call and our moving specialists will guide you.
              </p>
              <div className="space-y-4">
                <a href="tel:1-833-838-9898" className="flex items-center text-blue-800 font-bold hover:text-orange-600 transition">
                  <Phone className="w-5 h-5 mr-3" />
                  1-833 838 9898
                </a>
                <a href="mailto:sales@amazonvanlines.com" className="flex items-center text-blue-800 font-bold hover:text-orange-600 transition">
                  <Mail className="w-5 h-5 mr-3" />
                  sales@amazonvanlines.com
                </a>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-blue-900 text-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  "Fully Licensed & Insured",
                  "Transparent Pricing",
                  "No Hidden Fees",
                  "Professional Packers",
                  "Climate-Controlled Storage",
                  "Real-time GPS Tracking"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial Mini */}
            <div className="bg-gray-100 p-6 rounded-xl border border-gray-200">
              <div className="flex text-yellow-400 mb-3">
                {[1,2,3,4,5].map(i => <ShieldCheck key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-600 text-sm italic mb-4">
                "The team was incredibly professional. They handled my antique furniture with such care. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold text-xs mr-3">
                  JD
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">John Doe</p>
                  <p className="text-xs text-gray-500">Moved Toronto to Montreal</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Simple Footer for this page */}
      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2024 Amazon Van Lines. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}