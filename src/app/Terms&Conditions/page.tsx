"use client";
import React from 'react';
import { MessageSquare, List, Clock, CreditCard, XCircle, HelpCircle, Lock, FileEdit, FileText } from 'lucide-react';
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsAndConditionsPage() {
  return (
    <div className="font-sans text-gray-800 antialiased bg-white flex flex-col min-h-screen relative overflow-hidden">
      <Header />
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 -ml-20 mt-40 w-96 h-96 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60"></div>
      <div className="absolute bottom-0 right-0 -mr-20 mb-40 w-96 h-96 bg-orange-50 rounded-full blur-3xl -z-10 opacity-60"></div>

      {/* Main Content Area */}
      <main className="flex-grow pt-32 md:pt-48 pb-24">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-full mb-6">
              <FileText className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Legal Agreements</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">Conditions</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Please review our SMS Terms of Service and general usage guidelines to understand your rights and responsibilities.
            </p>
          </div>

          <div className="bg-white shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] rounded-3xl p-8 md:p-16 border border-gray-100 relative">
             {/* Subtle pattern overlay */}
             <div className="absolute inset-0 bg-grid-slate-50 [mask-image:linear-gradient(0deg,transparent,black)] pointer-events-none rounded-3xl"></div>
             
             <div className="relative z-10 space-y-12">
                <section className="group">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center group-hover:text-orange-600 transition-colors">
                    <div className="bg-orange-100 p-2 rounded-lg mr-4 group-hover:bg-orange-600 group-hover:text-white transition-all">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    SMS TERMS OF SERVICE
                  </h2>
                  <div className="pl-14">
                    <p className="text-gray-600 leading-relaxed text-lg italic border-l-4 border-orange-500 pl-6 bg-orange-50/30 py-4 rounded-r-xl">
                      By opting into SMS messaging from <strong>Amazon Van Lines</strong> (formerly MileWay Moving & Storage), you agree to receive text messages related to customer care, scheduling, service updates, and move coordination.
                    </p>
                  </div>
                </section>

                <section className="group">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center group-hover:text-orange-600 transition-colors">
                    <div className="bg-orange-100 p-2 rounded-lg mr-4 group-hover:bg-orange-600 group-hover:text-white transition-all">
                      <List className="w-5 h-5" />
                    </div>
                    TYPES OF MESSAGES
                  </h2>
                  <div className="pl-14">
                    <p className="text-gray-600 leading-relaxed mb-4">Messages may include:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Appointment and scheduling updates",
                        "Arrival notifications",
                        "Customer service responses",
                        "Service-related alerts"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section className="group">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center group-hover:text-orange-600 transition-colors">
                    <div className="bg-orange-100 p-2 rounded-lg mr-4 group-hover:bg-orange-600 group-hover:text-white transition-all">
                      <Clock className="w-5 h-5" />
                    </div>
                    MESSAGE FREQUENCY
                  </h2>
                  <div className="pl-14">
                    <p className="text-gray-600 leading-relaxed">
                      Message frequency may vary depending on your interaction with us. We strive to only send essential updates regarding your move.
                    </p>
                  </div>
                </section>

                <section className="group">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center group-hover:text-orange-600 transition-colors">
                    <div className="bg-orange-100 p-2 rounded-lg mr-4 group-hover:bg-orange-600 group-hover:text-white transition-all">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    MESSAGE RATES
                  </h2>
                  <div className="pl-14">
                    <p className="text-gray-600 leading-relaxed">
                      Message and data rates may apply based on your mobile carrier plan. Please check with your provider for details on any potential costs.
                    </p>
                  </div>
                </section>

                <section className="group">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center group-hover:text-orange-600 transition-colors">
                    <div className="bg-orange-100 p-2 rounded-lg mr-4 group-hover:bg-orange-600 group-hover:text-white transition-all">
                      <XCircle className="w-5 h-5" />
                    </div>
                    OPT-OUT
                  </h2>
                  <div className="pl-14">
                    <p className="text-gray-600 leading-relaxed bg-red-50 p-4 rounded-xl border border-red-100">
                      You may opt out at any time by replying <strong className="text-red-600">STOP</strong> to any message. Once opted out, you will no longer receive SMS messages unless you opt back in.
                    </p>
                  </div>
                </section>

                <section className="group">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center group-hover:text-orange-600 transition-colors">
                    <div className="bg-orange-100 p-2 rounded-lg mr-4 group-hover:bg-orange-600 group-hover:text-white transition-all">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    HELP
                  </h2>
                  <div className="pl-14">
                    <p className="text-gray-600 leading-relaxed">
                      For assistance, reply <strong className="text-orange-600">HELP</strong> or visit our website at <a href="https://amazonvanlines.com/" className="text-blue-600 hover:underline font-semibold">amazonvanlines.com</a>.
                    </p>
                  </div>
                </section>

                <section className="group">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center group-hover:text-orange-600 transition-colors">
                    <div className="bg-orange-100 p-2 rounded-lg mr-4 group-hover:bg-orange-600 group-hover:text-white transition-all">
                      <Lock className="w-5 h-5" />
                    </div>
                    PRIVACY
                  </h2>
                  <div className="pl-14">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Your privacy is important to us. Please review our Privacy Policy at: <a href="/privacy-policy" className="text-blue-600 hover:underline font-semibold">https://amazonvanlines.com/privacy-policy</a>
                    </p>
                    <p className="text-gray-600 font-semibold bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
                      SMS consent is not shared with third parties or affiliates.
                    </p>
                  </div>
                </section>

                <section className="group">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center group-hover:text-orange-600 transition-colors">
                    <div className="bg-orange-100 p-2 rounded-lg mr-4 group-hover:bg-orange-600 group-hover:text-white transition-all">
                      <FileEdit className="w-5 h-5" />
                    </div>
                    CHANGES TO TERMS
                  </h2>
                  <div className="pl-14">
                    <p className="text-gray-600 leading-relaxed">
                      We reserve the right to modify these Terms of Service at any time. Changes will be effective when posted on this page. Your continued use of the service constitutes acceptance of those changes.
                    </p>
                  </div>
                </section>
             </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
