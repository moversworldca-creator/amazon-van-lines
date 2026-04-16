import React from 'react';
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Thank You | Amazon Van Lines",
  description: "Thank you for your quote request. A moving specialist will contact you shortly.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-blue-900 text-white pt-32 pb-12 md:pt-40 md:pb-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Request Received!</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Thank you for choosing Amazon Van Lines.
          </p>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 border border-gray-100 max-w-4xl mx-auto min-h-[400px] text-center">
           <p className="text-gray-600 text-lg mb-6">
            Your request has been successfully submitted. One of our moving specialists will review your details and contact you shortly with a precise quote.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Back to Home</a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
