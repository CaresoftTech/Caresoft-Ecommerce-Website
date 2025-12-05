import React from "react";
import { Truck, Lock, Gift, Users, Globe, Star } from "lucide-react";
import bgAbout from "@/assets/bg1.png"; // optional background image

export default function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-[#f0faff] via-[#e2f5ff] to-[#ffffff] py-12 overflow-hidden">

      {/* Background Decorative Image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${bgAbout})` }}
      ></div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Page Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#45b8ff] via-[#3287bc] to-[#020608] animate-slideUp">
          About Caresoft Technologies
        </h1>

        {/* Who We Are / Mission / Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div className="bg-white/40 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-[#3491cb] transition-all transform hover:scale-105">
            <Users className="w-10 h-10 text-[#3c9edc] mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              Caresoft Technology is a leading provider of cutting-edge tech solutions and products. 
              Since our inception, we’ve been committed to delivering innovative, high-quality products that enhance the digital lives of our customers.
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-[#3491cb] transition-all transform hover:scale-105">
            <Globe className="w-10 h-10 text-[#3c9edc] mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To make advanced technology accessible to everyone. We offer the latest tech products at competitive prices, backed by exceptional customer service and support.
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-[#3491cb] transition-all transform hover:scale-105">
            <Star className="w-10 h-10 text-[#3c9edc] mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              We envision a future where technology integrates seamlessly into daily life, making everything simpler, faster, and more enjoyable, while staying innovative and adaptive.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <section className="bg-gradient-to-r from-[#38aaf1] via-[#2077ac] to-[#0e202b] text-white py-16 rounded-3xl shadow-xl overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            Why Choose Caresoft Technology? 🚀
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105 text-center">
              <Truck className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Free Shipping</h3>
              <p className="opacity-90 text-lg">On orders over ₹5,000</p>
            </div>

            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105 text-center">
              <Lock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Secure Payment</h3>
              <p className="opacity-90 text-lg">100% secure transactions</p>
            </div>

            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105 text-center">
              <Gift className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Best Deals</h3>
              <p className="opacity-90 text-lg">Unbeatable prices guaranteed</p>
            </div>
          </div>
        </section>

        {/* Optional Decorative Section */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#3287bc] animate-slideUp">
            Our Promise
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed">
            We are committed to providing exceptional products, innovative solutions, and a delightful shopping experience. Your satisfaction and trust are our highest priorities.
          </p>
        </section>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 1s ease-out forwards; }

          @keyframes slideUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slideUp { animation: slideUp 0.8s ease-out forwards; }
        `}
      </style>
    </div>
  );
}
