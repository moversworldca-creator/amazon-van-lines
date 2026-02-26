"use client";
import React, { useState } from 'react';
import { 
  Truck, 
  MapPin, 
  Box, 
  Package, 
  CreditCard, 
  ShieldCheck, 
  ChevronDown, 
  CheckCircle,
  ChevronUp,
  Clock,
  Users,
  Globe,
  Award,
  ArrowRight,
  PhoneCall
} from 'lucide-react';

import staff1 from "@/asset/staf-img-1.jpg";
import staff2 from "@/asset/staf-img-2.jpg";
import staff3 from "@/asset/staf-img-3.jpg";
import baner from "@/asset/trust-baner.webp";
// --- Interfaces ---
interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
}

interface OfferProps {
  title: string;
  price: string;
  details: string;
}

interface FaqItemProps {
  question: string;
  answer: string;
}

interface ProvinceData {
  name: string;
  cities: string[];
}

// --- Data ---
const serviceAreas: ProvinceData[] = [
  { name: 'Alberta', cities: ['Calgary', 'Edmonton', 'Fort McMurray', 'Grande Prairie', 'Lethbridge', 'Medicine Hat', 'Red Deer'] },
  { name: 'British Columbia', cities: ['Victoria', 'Vancouver', 'Prince George', 'Kelowna', 'Kamloops', 'Chilliwack', 'Burnaby', 'Surrey', 'Langley', 'North Shore'] },
  { name: 'Manitoba', cities: ['Winnipeg'] },
  { name: 'New Brunswick', cities: ['Fredericton', 'Moncton'] },
  { name: 'Newfoundland', cities: ['St. John\'s'] },
  { name: 'Nova Scotia', cities: ['Halifax'] },
  { name: 'Ontario', cities: ['Toronto', 'Ottawa', 'Mississauga', 'Hamilton', 'London', 'Kitchener-Waterloo', 'Brampton', 'St. Catharines', 'Oshawa', 'Richmond Hill', 'Burlington', 'Oakville', 'Vaughan', 'Markham', 'Aurora', 'Newmarket', 'Whitby', 'Ajax', 'Milton', 'Guelph', 'Barrie'] },
  { name: 'PEI', cities: ['Charlottetown'] },
  { name: 'Quebec', cities: ['Montreal', 'Laval', 'Gatineau', 'Laurentians'] },
  { name: 'Saskatchewan', cities: ['Regina', 'Saskatoon'] },
];

// --- Sub-Components ---

const Stats = () => (
  <div className="relative z-20 -mt-10 mb-10 container mx-auto px-4">
    <div className="bg-slate-900 rounded-3xl shadow-2xl p-8 md:p-12 text-white overflow-hidden relative">
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 divide-x divide-slate-700/50">
        <div className="text-center px-4 group">
          <div className="mb-3 flex justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300"><Users className="w-8 h-8" /></div>
          <div className="text-3xl md:text-5xl font-extrabold mb-1 tracking-tight">10k+</div>
          <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Moves Done</div>
        </div>
        <div className="text-center px-4 group">
          <div className="mb-3 flex justify-center text-orange-400 group-hover:scale-110 transition-transform duration-300"><Award className="w-8 h-8" /></div>
          <div className="text-3xl md:text-5xl font-extrabold mb-1 tracking-tight">98%</div>
          <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Satisfaction</div>
        </div>
        <div className="text-center px-4 group">
          <div className="mb-3 flex justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300"><Globe className="w-8 h-8" /></div>
          <div className="text-3xl md:text-5xl font-extrabold mb-1 tracking-tight">50+</div>
          <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Cities</div>
        </div>
        <div className="text-center px-4 group">
          <div className="mb-3 flex justify-center text-orange-400 group-hover:scale-110 transition-transform duration-300"><Clock className="w-8 h-8" /></div>
          <div className="text-3xl md:text-5xl font-extrabold mb-1 tracking-tight">24/7</div>
          <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Support</div>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  const services: ServiceProps[] = [
    {
      title: "Local Moves",
      description: "Seamless transitions within your city. We handle packing to transport with extreme care.",
      icon: <Truck className="w-8 h-8" />,
      delay: "0"
    },
    {
      title: "Long Distance",
      description: "Coast-to-coast relocations with expert logistics, inventory tracking and timely delivery.",
      icon: <MapPin className="w-8 h-8" />,
      delay: "100"
    },
    {
      title: "Packing Services",
      description: "Precision packing using industry-grade materials to ensure your valuables arrive intact.",
      icon: <Box className="w-8 h-8" />,
      delay: "200"
    },
    {
      title: "Storage Solutions",
      description: "Climate-controlled facilities monitored 24/7. Short or long-term secure access.",
      icon: <Package className="w-8 h-8" />,
      delay: "0"
    },
    {
      title: "Commercial Moves",
      description: "Minimize downtime with our organized business relocation strategies for IT & furniture.",
      icon: <CreditCard className="w-8 h-8" />,
      delay: "100"
    },
    {
      title: "Cross Border (US)",
      description: "Expert customs clearance and logistics for smooth moves between Canada and the US.",
      icon: <ShieldCheck className="w-8 h-8" />,
      delay: "200"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3 pl-1 border-l-4 border-orange-500">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Premium Moving Services <br/>
              <span className="text-slate-400">Tailored For You.</span>
            </h3>
          </div>
          <button className="group flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all text-slate-900 font-bold border border-slate-100">
             View All Services 
             <ArrowRight className="w-4 h-4 text-orange-500 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 relative overflow-hidden"
            >
              {/* Card Hover Gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-orange-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <div className="flex items-start justify-between mb-6">
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <span className="text-slate-400 text-5xl font-bold opacity-20 group-hover:opacity-10 transition-opacity">0{index + 1}</span>
              </div>
              
              <h4 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-700 transition-colors">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">{service.description}</p>
              
              <a href="#" className="inline-flex items-center text-sm font-bold text-slate-900 border-b-2 border-transparent hover:border-orange-500 transition-all pb-0.5">
                Learn More 
                <ArrowRight className="w-3 h-3 ml-2 text-orange-500" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => (
  <section className="py-24 bg-white relative">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h3 className="text-4xl font-extrabold text-slate-900 mb-4">Make It Happen In 4 Steps</h3>
        <p className="text-slate-500 text-lg">Our streamlined process ensures your move is organized and stress-free from the moment you contact us.</p>
      </div>

      <div className="relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { step: "01", title: "Contact Us", desc: "Reach out via phone or form to discuss details.", icon: <PhoneCall className="w-6 h-6" /> },
            { step: "02", title: "Get Quote", desc: "Receive a transparent, fixed-price estimate.", icon: <CreditCard className="w-6 h-6" /> },
            { step: "03", title: "Book Move", desc: "Lock in your date and let us plan the logistics.", icon: <CheckCircle className="w-6 h-6" /> },
            { step: "04", title: "We Deliver", desc: "Relax as we transport and unpack your life.", icon: <Truck className="w-6 h-6" /> }
          ].map((item, i) => (
            <div key={i} className="relative group text-center md:text-left">
              {/* Step Number Circle */}
              <div className="relative mx-auto md:mx-0 z-10 w-24 h-24 bg-white rounded-full border-8 border-slate-50 flex items-center justify-center mb-6 shadow-sm group-hover:border-blue-50 group-hover:scale-110 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-orange-500 transition-colors">
                  {item.icon}
                </div>
                <div className="absolute -top-2 -right-2 bg-slate-900 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full border-2 border-white">
                  {item.step}
                </div>
              </div>
              
              <h4 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
    {/* Abstract Background Shapes */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-24 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Image Composition */}
        <div className="lg:w-1/2 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800">
            <img 
              src={baner.src}
              alt="Moving Truck" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-6 right-6 bg-black/30 backdrop-blur-sm border border-white/20 p-4 rounded-xl max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-500 rounded-full p-1"><CheckCircle className="w-4 h-4 text-white" /></div>
                <span className="font-bold text-sm">Insured & Bonded</span>
              </div>
              <p className="text-xs font-bold text-white">We prioritize the safety of your belongings with full coverage.</p>
            </div>
          </div>
          {/* Decorative box behind */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-slate-700 rounded-3xl -z-10 hidden md:block"></div>
        </div>

        {/* Right: Content */}
        <div className="lg:w-1/2">
          <div className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
            We Make Moving <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Simple & Secure.</span>
          </h2>
          
          <div className="space-y-6">
            {[
              { title: "Transparent Pricing", desc: "No hidden fees. Upfront quotes you can rely on completely." },
              { title: "Climate-Controlled Storage", desc: "Keep your valuables safe in our 24/7 monitored facilities." },
              { title: "Expert Packing Teams", desc: "Our team uses high-quality materials to protect your items." },
              { title: "Guaranteed On-Time", desc: "We respect your schedule with punctual pickup and drop-off." }
            ].map((feature, i) => (
              <div key={i} className="flex group p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-slate-700">
                <div className="mr-5 mt-1">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-lg border border-slate-700">
                    <CheckCircle className="w-5 h-5 text-slate-400 group-hover:text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">{feature.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-full shadow-lg hover:shadow-blue-500/30 hover:bg-blue-50 transition-all font-bold text-sm uppercase tracking-wide">
              Start Your Move
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServiceAreas = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Service Areas</h2>
          <h3 className="text-4xl font-extrabold text-slate-900">We Cover Canada</h3>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-slate-100 pb-4">
          {serviceAreas.map((province, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-slate-900 text-white shadow-lg transform scale-105'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {province.name}
            </button>
          ))}
        </div>

        {/* Tab Content - City Grid */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 min-h-[300px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {serviceAreas[activeTab].cities.map((city, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="group flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-blue-100 hover:-translate-y-1"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                  {city}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const TeamSection = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Soft Peach Card Container */}
        <div className="bg-[#fff8f3] rounded-[2rem] p-8 md:p-12 lg:p-16 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text Content */}
            <div className="max-w-xl z-10 relative">
              <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#2a3c68] mb-6 leading-[1.1] tracking-tight">
                Our Team And <br className="hidden md:block"/> Booking Agents
              </h2>
              <div className="space-y-6 text-slate-800 text-lg leading-relaxed mb-10 font-medium">
                <p>
                  Whether your relocation is a local or long-distance move our sales experts will give accurate and customized quotes with the best price that fits your moving needs.
                </p>
                <p>
                  Check with our team your move dates, and delivery times and submit your inventory to make your move stress-free.
                </p>
              </div>
              <button className="bg-[#71c0df] hover:bg-[#5fa8c5] text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-md text-lg">
                Know about our booking agents
              </button>
            </div>

            {/* Right: Modern Graphic Collage */}
            <div className="relative h-[450px] md:h-[550px] w-full flex-shrink-0 mt-12 lg:mt-0">
              
              {/* --- Decorative Elements matching the image --- */}
              {/* Large light orange circle top right */}
              <div className="absolute top-[8%] right-[12%] w-24 h-24 md:w-28 md:h-28 bg-[#fcb37f] rounded-full opacity-80"></div>
              
              {/* Medium solid orange circle center right */}
              <div className="absolute top-[45%] right-[28%] w-14 h-14 md:w-16 md:h-16 bg-[#fad0b2] rounded-full opacity-90"></div>
              
              {/* Dark orange solid circle over Prakash (bottom right) */}
              <div className="absolute bottom-[28%] right-[32%] w-16 h-16 md:w-20 md:h-20 bg-[#e76f23] rounded-full z-10"></div>
              
              {/* Decorative Arc Top Right */}
              <svg className="absolute top-[20%] right-[-2%] w-16 h-16 text-[#e76f23]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 10 10 A 80 80 0 0 1 90 90" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>

              {/* Decorative Arc Bottom Left */}
              <svg className="absolute bottom-[10%] left-[12%] w-20 h-20 text-[#e76f23]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 10 10 A 80 80 0 0 0 90 90" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>


              {/* --- Avatars --- */}
              
              {/* Avatar 1: Lakshmi (Largest, Top Left) */}
              <div className="absolute top-[5%] left-[8%] md:left-[15%] flex flex-col items-center z-20">
                <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg border-[6px] border-white">
                  <img src={staff2.src} alt="Lakshmi" className="w-full h-full object-cover" />
                </div>
                <span className="mt-4 font-serif italic text-slate-800 text-[1.1rem]">Lakshmi</span>
              </div>

              {/* Avatar 2: Tharanikan (Medium, Right) */}
              <div className="absolute top-[25%] right-[2%] md:right-[5%] flex flex-col items-center z-20">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-lg border-4 border-white">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200" alt="Tharanikan" className="w-full h-full object-cover" />
                </div>
                <span className="mt-3 font-serif italic text-slate-800 text-[1rem]">Tharanikan</span>
              </div>

              {/* Avatar 3: Bala (Medium, Bottom Left) */}
              <div className="absolute bottom-[2%] left-[20%] md:left-[25%] flex flex-col items-center z-20">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg border-4 border-white">
                  <img src={staff1.src} alt="Bala" className="w-full h-full object-cover" />
                </div>
                <span className="mt-2 font-serif italic text-slate-800 text-[0.95rem]">Bala</span>
              </div>

              {/* Avatar 4: Prakash (Medium, Bottom Right) */}
              <div className="absolute bottom-[8%] right-[10%] md:right-[15%] flex flex-col items-center z-20">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border-4 border-white">
                  <img src={staff3.src} alt="Prakash" className="w-full h-full object-cover" />
                </div>
                <span className="mt-3 font-serif italic text-slate-800 text-[1rem]">Prakash</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs: FaqItemProps[] = [
    {
      question: "How far in advance should I book my move?",
      answer: "We recommend booking 4-6 weeks in advance, especially during the busy summer months, to ensure your preferred date is available."
    },
    {
      question: "Do you provide packing materials?",
      answer: "Yes, we offer a full range of packing supplies including boxes, tape, bubble wrap, and specialty containers for fragile items."
    },
    {
      question: "Is my move insured?",
      answer: "Absolutely. We provide comprehensive insurance coverage options to protect your belongings throughout the entire moving process."
    },
    {
      question: "How is the cost of my move calculated?",
      answer: "Local moves are typically hourly based on crew size. Long-distance moves are calculated by weight and distance. We always provide a transparent quote upfront."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4">
            <h3 className="text-3xl font-extrabold text-slate-900 mb-6">Frequently Asked Questions</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Can't find the answer you're looking for? Reach out to our customer support team.
            </p>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
              <h4 className="font-bold text-slate-900 mb-2">Still have questions?</h4>
              <p className="text-sm text-slate-500 mb-4">We're here to help you 24/7.</p>
              <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-600 transition-colors">
                Contact Support
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl overflow-hidden transition-all duration-300 border ${activeIndex === index ? 'border-blue-200 shadow-md' : 'border-slate-100 shadow-sm'}`}
              >
                <button 
                  className="w-full flex justify-between items-center p-6 text-left"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <span className={`font-bold text-lg ${activeIndex === index ? 'text-blue-600' : 'text-slate-700'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-colors ${activeIndex === index ? 'bg-blue-100 text-blue-600' : 'bg-slate-50 text-slate-400'}`}>
                    {activeIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-48' : 'max-h-0'}`}
                >
                  <div className="p-6 pt-0 text-slate-500 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Main Exported Component ---
const HomeSections = () => {
  return (
    <>
      <Process />
      <Services />
      <Stats />
      <Features />
      <ServiceAreas />
      <TeamSection/>
      <FAQ />
    </>
  );
};

export default HomeSections;