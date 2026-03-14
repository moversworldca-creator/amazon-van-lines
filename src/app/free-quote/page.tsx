import React from 'react';
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Moving Quote | Amazon Van Lines",
  description: "Get a detailed, no-obligation moving quote from Amazon Van Lines. Professional local and long-distance moving services across Canada.",
};

export default function FreeQuotePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Hero Section for Quote Page */}
      <div className="bg-blue-900 text-white pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Get Your Free Moving Quote</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Please fill out the form below with your move details for a precise estimate.
          </p>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-xl p-4 md:p-8 border border-gray-100 min-h-[600px]">
          {/* Elromco Long Quote Form Integration Tag */}
          <div className="text-black"  id="mb-single-page-form"></div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
