"use client";
import React from 'react';
import { Truck, Mail, Briefcase, Star, ArrowRight, User, ShieldCheck, Heart, Map } from 'lucide-react';
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutImage from "@/asset/about.webp";
// --- Static Data ---

const adminTeam = [
  { name: "Satya Kumar", role: "Accounting Manager", email: "satyakumar@amazonvanlines.com" },
  { name: "Vaka", role: "HR Manager", email: "vaka@amazonvanlines.com" },
  { name: "Bala", role: "Sales Manager", email: "bala@amazonvanlines.com" },
  { name: "Prakash", role: "Dispatch Manager", email: "prakash@amazonvanlines.com" },
  { name: "Lakshmi", role: "Sales Executive", email: "lakshmi@amazonvanlines.com" },
  { name: "Tharanikan", role: "Sales Executive", email: "tharani@amazonvanlines.com" },
  { name: "Pramoda", role: "Sales Executive", email: "pramoda@amazonvanlines.com" },
  { name: "Krish Ch", role: "Sales Executive", email: "krishna@amazonvanlines.com" },
  { name: "Jaya Krishna", role: "Sales Executive", email: "jayakrishna@amazonvanlines.com" },
];

const operationalTeam = [
  { name: "Selva", role: "Driver, Helper", email: "selva@amazonvanlines.com" },
  { name: "Rahul", role: "Driver, Helper", email: "rahul@amazonvanlines.com" },
  { name: "Murugan", role: "Driver, Helper", email: "murugan@amazonvanlines.com" },
  { name: "Mohideen", role: "Driver, Helper", email: "mohideen@amazonvanlines.com" },
  { name: "ABU", role: "Driver, Helper", email: "abu@amazonvanlines.com" },
  { name: "Nithin", role: "Helper", email: "nithin@amazonvanlines.com" },
  { name: "Kumar", role: "Helper", email: "kumar@amazonvanlines.com" },
];

const openPositions = [
  {
    title: "Moving Specialist",
    type: "Full-Time",
    desc: "Responsible for managing and coordinating moves, ensuring every detail is accounted for, and providing exceptional customer service throughout the process."
  },
  {
    title: "Driver / Mover",
    type: "Shift Based",
    desc: "Handle the physical aspects of the move, safely transporting our clients’ belongings and ensuring their satisfaction with our service."
  },
  {
    title: "Customer Service Rep",
    type: "Remote / Hybrid",
    desc: "Interact directly with clients, addressing inquiries, providing information, and ensuring a positive customer experience from start to finish."
  }
];

// --- New Component: Admin Card (Premium Look) ---
const AdminCard = ({ name, role, email }: { name: string, role: string, email: string }) => (
  <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 h-full">
    {/* Top Gradient Line */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    
    <div className="flex items-start space-x-4 relative z-10">
      {/* Avatar */}
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center text-blue-700 font-bold text-2xl shadow-inner border border-white group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all duration-300">
        {name.charAt(0)}
      </div>
      
      <div className="flex-1 min-w-0 pt-1">
        <h5 className="font-bold text-gray-900 text-lg leading-tight mb-1 group-hover:text-blue-700 transition-colors">{name}</h5>
        <p className="text-[14px] text-blue-500 font-bold uppercase tracking-wider mb-3">{role}</p>
        
        <a 
          href={`mailto:${email}`} 
          className="inline-flex items-center text-[13px] text-gray-500 hover:text-orange-600 transition-colors bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 group-hover:bg-white group-hover:shadow-sm"
        >
          <Mail className="w-3 h-3 mr-2 text-blue-400" />
          <span className="truncate max-w-[140px]">{email}</span>
        </a>
      </div>
    </div>
    
    {/* Decorative Background Blob */}
    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-50/50 rounded-full group-hover:bg-blue-100/50 transition-colors duration-500 pointer-events-none"></div>
  </div>
);

// --- New Component: Operational Card (Compact & Rugged Look) ---
const OperationalCard = ({ name, role, email }: { name: string, role: string, email: string }) => (
  <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-300 flex items-center space-x-4 group h-full">
    <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 font-bold group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 flex-shrink-0 border border-orange-100">
        <Truck className="w-6 h-6" />
    </div>
    <div className="flex-1 min-w-0">
        <h5 className="font-bold text-gray-900 text-base mb-0.5">{name}</h5>
        <p className="text-[14px] text-gray-500 mb-1.5 flex items-center">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>
            {role}
        </p>
        <a href={`mailto:${email}`} className="text-[13px] text-blue-600 hover:text-blue-800 flex items-center truncate opacity-80 hover:opacity-100">
           <Mail className="w-3 h-3 mr-1.5" /> 
           <span className="truncate">{email}</span>
        </a>
    </div>
  </div>
);

// --- Main Page Component ---
export default function AboutUsPage() {
  return (
    
    <div className="font-sans text-gray-800 antialiased bg-white flex flex-col min-h-screen">
      <Header />
      {/* Main Content Area */}
      <main className="flex-grow pt-32 md:pt-40 pb-20">
        <div className="container mx-auto px-4">
          
          {/* --- HERO / INTRO SECTION (Modern Premium UI) --- */}
          <div className="relative mb-20">
            {/* Decorative BG Blob */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60"></div>

            <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              {/* Left: Image Composition */}
              <div className="lg:w-1/2 relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.01]">
                   <img 
                    src={aboutImage.src} 
                    alt="Amazon Van Lines Fleet" 
                    className="w-full h-[500px] object-cover center"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
                  
                  {/* Floating Content on Image */}
                  <div className="absolute bottom-8 left-8 text-white max-w-sm">
                     <div className="flex items-center space-x-2 mb-3">
                        <div className="bg-orange-500 p-1.5 rounded-lg">
                            <Star className="w-4 h-4 text-white fill-current" />
                        </div>
                        <span className="font-bold text-lg tracking-wide">Premium Service</span>
                     </div>
                     <p className="text-blue-50 text-sm font-medium leading-relaxed"> 
                        "We don't just move boxes; we move lives. Delivering happiness across Canada since 2020."
                     </p>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 border-[3px] border-orange-500/20 rounded-3xl -z-0"></div>
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-dots-pattern opacity-10"></div>
              </div>

              {/* Right: Content */}
              <div className="lg:w-1/2 space-y-8">
                <div>
                  <div className="flex items-center space-x-3 mb-5">
                     <span className="h-0.5 w-10 bg-orange-500 rounded-full"></span>
                     <span className="text-orange-600 font-extrabold uppercase tracking-widest text-xs">Our Story & Mission</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] mb-6">
                    Moving Canada with <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Passion & Purpose</span>
                  </h1>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Founded in 2020 with a single truck and a vision, Amazon Van Lines has grown into a premier relocation partner serving 10 provinces. Our mission is simple: deliver affordable, reliable, and stress-free moving services tailored to your unique needs.
                  </p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                   <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100 hover:bg-blue-50 transition-colors">
                      <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                         <div className="bg-blue-100 p-1.5 rounded-md mr-3">
                            <ShieldCheck className="w-5 h-5 text-blue-600" />
                         </div>
                         Reliable & Safe
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">Backed by 5+ years of experience ensuring your valuables arrive safely and on time.</p>
                   </div>
                   <div className="bg-orange-50/50 p-5 rounded-2xl border border-orange-100 hover:bg-orange-50 transition-colors">
                      <h4 className="font-bold text-orange-900 mb-2 flex items-center">
                         <div className="bg-orange-100 p-1.5 rounded-md mr-3">
                            <Heart className="w-5 h-5 text-orange-600" />
                         </div>
                         Customer First
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">A team culture built on mutual support, transparency, and dedication to satisfaction.</p>
                   </div>
                </div>

                {/* Call to Action Box */}
                <div className="flex items-center justify-between p-6 bg-slate-900 rounded-2xl text-white shadow-xl shadow-slate-200">
                   <div>
                      <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Ready to move?</p>
                      <p className="font-bold text-lg">Contact our team today</p>
                   </div>
                   <a href="tel:5877015576" className="flex items-center bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-bold transition-all shadow-lg shadow-orange-500/30 hover:-translate-y-0.5">
                      <span className="mr-2">(587) 701-5576</span>
                      <ArrowRight className="w-4 h-4" />
                   </a>
                </div>
              </div>
            </div>
          </div>

          {/* --- COMMITMENT & CULTURE SECTION (SEO Content) --- */}
          <div className="max-w-5xl mx-auto mb-24 bg-slate-50 p-8 md:p-12 rounded-3xl border border-gray-100 relative overflow-hidden">
             {/* Decorative corner */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full -mr-8 -mt-8"></div>
             
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-1.5 h-8 bg-blue-600 rounded-full mr-3"></span>
                Our Commitment & Culture
            </h3>
            <div className="text-gray-600 leading-relaxed space-y-6 text-justify">
              <p>
                At Amazon Van Lines, we believe in fostering a team culture built on hard work, mutual support, and a shared dedication to customer satisfaction. Our team consistently strives to improve, ensuring we exceed customer expectations every step of the way. Transparency in pricing and services is at the core of our operations, and we only employ experienced, reliable professionals. No matter the challenges of your move, your satisfaction remains our highest priority.
              </p>
              
              <p>
                  As a leading moving company, we proudly serve local and long-distance moves, junk removal, packing services, and more across Canada. From start to finish, we are committed to delivering a stress-free moving experience tailored to your needs.
              </p>
            </div>
          </div>

          {/* --- TEAM SECTION --- */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2">The People Behind the Moves</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Our Team</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Admin Team Grid */}
            <div className="bg-slate-50/50 rounded-3xl p-8 mb-16 border border-gray-100">
                <h4 className="text-2xl font-bold text-blue-900 mb-8 border-b border-gray-200 pb-4 flex items-center">
                    <span className="bg-blue-100 p-2 rounded-lg mr-3">
                        <User className="w-6 h-6 text-blue-600" />
                    </span>
                    Administration & Management
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {adminTeam.map((member, idx) => (
                    <AdminCard key={idx} {...member} />
                ))}
                </div>
            </div>

            {/* Operational Team Grid */}
            <div className="bg-white rounded-3xl p-2 md:p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4 flex items-center">
                    <span className="bg-orange-100 p-2 rounded-lg mr-3">
                        <Truck className="w-6 h-6 text-orange-600" />
                    </span>
                    Operational Team
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {operationalTeam.map((member, idx) => (
                    <OperationalCard key={idx} {...member} />
                ))}
                </div>
            </div>
          </div>

          {/* --- CAREERS SECTION --- */}
          <div id="careers" className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Left Column: Intro Text */}
              <div className="p-8 md:p-12 lg:p-16 text-white space-y-8 relative z-10">
                <div>
                  <h3 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2">Join Our Team</h3>
                  <h4 className="text-3xl md:text-4xl font-bold mb-6">Build Your Career With Us</h4>
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                    At AMAZON VAN LINES, we’re more than just a moving company – we’re a team dedicated to providing exceptional service. If you’re passionate about helping others and thrive in a dynamic, customer-centric environment, we’d love to hear from you.
                  </p>
                </div>

                <div className="space-y-4">
                    <h5 className="text-lg font-bold text-blue-300 border-b border-gray-700 pb-2 mb-4">Why Work With Us?</h5>
                    <div className="grid gap-4">
                        {[
                            { title: "Commitment to Excellence", desc: "Delivering superior service." },
                            { title: "Team Collaboration", desc: "Your contributions matter." },
                            { title: "Growth Opportunities", desc: "Ongoing learning & development." }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                                <Star className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <strong className="text-white block text-sm">{item.title}</strong>
                                    <span className="text-xs text-gray-400">{item.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
              </div>

              {/* Right Column: Positions & Apply */}
              <div className="bg-white p-8 md:p-12 lg:p-16">
                <div className="flex justify-between items-center mb-6">
                    <h4 className="text-2xl font-bold text-gray-900">Open Positions</h4>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full animate-pulse flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Hiring Now
                    </span>
                </div>
                
                <div className="space-y-4 mb-8">
                  {openPositions.map((job, idx) => (
                    <div key={idx} className="group border border-gray-100 rounded-xl p-5 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-default">
                      <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-blue-900 text-base group-hover:text-blue-700">{job.title}</h3>
                          <span className="text-[12px] uppercase font-bold bg-gray-100 text-gray-500 px-2 py-0.5 rounded border border-gray-200">{job.type}</span>
                      </div>
                      <p className="text-[14px] text-gray-600 leading-relaxed">{job.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-blue-800 to-blue-400 p-6 rounded-2xl shadow-lg text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-white/20 transition-colors"></div>
                  
                  <h5 className="font-bold mb-2 flex items-center relative z-10">
                    <Briefcase className="w-5 h-5 mr-2" />
                    How to Apply
                  </h5>
                  <p className="text-xs text-blue-100 mb-4 opacity-90 relative z-10">
                    Submit your resume and cover letter. Indicate the position in the subject line.
                  </p>
                  <a 
                    href="mailto:hr@amazonvanlines.com" 
                    className="relative z-10 inline-flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg transform active:scale-[0.98]"
                  >
                    Email Resume to HR <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
     <Footer /> 
    </div>
  );
}