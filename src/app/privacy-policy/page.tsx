"use client";
import React from 'react';
import { Shield, Info, Lock, Share2, UserCheck, RefreshCw, Mail, ChevronRight } from 'lucide-react';
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="font-sans text-gray-800 antialiased bg-white flex flex-col min-h-screen relative overflow-hidden">
      <Header />
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 mt-40 w-96 h-96 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60"></div>
      <div className="absolute bottom-0 left-0 -ml-20 mb-40 w-96 h-96 bg-orange-50 rounded-full blur-3xl -z-10 opacity-60"></div>

      {/* Main Content Area */}
      <main className="flex-grow pt-32 md:pt-48 pb-24">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Security & Trust</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Policy</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              At Amazon Van Lines, we value your trust. This policy outlines how we handle your information with the highest standards of care.
            </p>
          </div>

          <div className="bg-white shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] rounded-3xl p-8 md:p-16 border border-gray-100 relative">
             {/* Subtle pattern overlay */}
             <div className="absolute inset-0 bg-grid-slate-50 [mask-image:linear-gradient(0deg,transparent,black)] pointer-events-none rounded-3xl"></div>
             
             <div className="relative z-10">
                <p className="mb-12 text-gray-600 leading-relaxed text-lg italic border-l-4 border-blue-500 pl-6 bg-blue-50/30 py-4 rounded-r-xl">
                  <strong>Amazon Van Lines</strong> is committed to protecting the privacy of our users. This policy explains how we collect, use, and protect the personal information that we collect through our website, <a href="https://amazonvanlines.com/" className="text-blue-600 hover:underline font-semibold">amazonvanlines.com</a>.
                </p>

                <div className="space-y-12">
                  <section className="group">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center group-hover:text-blue-600 transition-colors">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <Info className="w-5 h-5" />
                      </div>
                      Personal Information We Collect
                    </h2>
                    <div className="pl-14">
                      <p className="text-gray-600 leading-relaxed">
                        When you use our website, we may collect personal information from you. This information may include your name, email address, phone number, and zip code of your physical address. We collect this information through web forms on our website.
                      </p>
                    </div>
                  </section>

                  <section className="group">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center group-hover:text-blue-600 transition-colors">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                      How We Use Your Personal Information
                    </h2>
                    <div className="pl-14">
                      <p className="text-gray-600 leading-relaxed">
                        We use your personal information to provide you with the best user experience possible on our website. This may include providing customer support, responding to your inquiries, and sending you quotes. We may also use your personal information to improve our website and to ensure that we are providing you with relevant information.
                      </p>
                    </div>
                  </section>

                  <section className="group">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center group-hover:text-blue-600 transition-colors">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <Lock className="w-5 h-5" />
                      </div>
                      How We Protect Your Personal Information
                    </h2>
                    <div className="pl-14">
                      <p className="text-gray-600 leading-relaxed">
                        We take the security of your personal information seriously. We use reasonable physical, technical, and administrative measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of transmission over the internet, or method of electronic storage, is 100% secure.
                      </p>
                    </div>
                  </section>

                  <section className="group">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center group-hover:text-blue-600 transition-colors">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <Share2 className="w-5 h-5" />
                      </div>
                      Sharing Your Personal Information
                    </h2>
                    <div className="pl-14">
                      <p className="text-gray-600 leading-relaxed mb-4 font-semibold text-slate-800 bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                        SMS Consent, and phone numbers collected for SMS communication purposes will not be shared with any third party or affiliates for marketing purposes.
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        We do not sell, rent, or share your personal information with third parties, except as described in this policy or as required by law. These third parties are required to protect your personal information in accordance with this policy and applicable law.
                      </p>
                    </div>
                  </section>

                  <section className="group">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center group-hover:text-blue-600 transition-colors">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <UserCheck className="w-5 h-5" />
                      </div>
                      Accessing and Controlling Your Personal Information
                    </h2>
                    <div className="pl-14">
                      <p className="text-gray-600 leading-relaxed">
                        You have the right to access and control your personal information that we collect through our website. If you wish to access, correct, update, or delete your personal information, please contact our customer support team at <strong className="text-blue-600">617-307-2705</strong>.
                      </p>
                    </div>
                  </section>

                  <section className="group">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center group-hover:text-blue-600 transition-colors">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <RefreshCw className="w-5 h-5" />
                      </div>
                      Changes to this Privacy Policy
                    </h2>
                    <div className="pl-14">
                      <p className="text-gray-600 leading-relaxed">
                        We reserve the right to modify or update this privacy policy at any time without prior notice. We will post any changes to this policy on our website, and the changes will be effective immediately upon posting.
                      </p>
                    </div>
                  </section>

                  <section className="group">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center group-hover:text-blue-600 transition-colors">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <Mail className="w-5 h-5" />
                      </div>
                      Contact Us
                    </h2>
                    <div className="pl-14">
                      <p className="text-gray-600 leading-relaxed">
                        If you have any questions or concerns about this privacy policy or our privacy practices, please contact us at <strong className="text-blue-600">617-307-2705</strong>. We will respond to your inquiry as soon as possible.
                      </p>
                    </div>
                  </section>
                </div>
             </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
