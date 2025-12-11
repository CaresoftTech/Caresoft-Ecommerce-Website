import React from "react";
import { Truck, Lock, Gift, Users, Globe, Star } from "lucide-react";
import hp from "@/assets/hp.png";
import dell from "@/assets/Dell.png";
import asus from "@/assets/asus.png";
import sophose from "@/assets/sophos.png";
import lenovo from "@/assets/lenovo.svg";
import micro from "@/assets/micro.png";
import zebra from "@/assets/zebra-logo-horizontal.svg";
import zoho from "@/assets/zoho-mail.svg";
import fortinet from "@/assets/Fortinet_logo.svg";
import mifcro from "@/assets/cisco.png";
import hikvision from "@/assets/hikvision.jpeg";
import k7 from "@/assets/k7-logo.png";
import synology from "@/assets/synology.png";
import gsuite from "@/assets/g-suite.png";
export default function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-[#f0faff] via-[#e2f5ff] to-[#ffffff] py-12 overflow-hidden">

      <div className="container mx-auto px-4 max-w-6xl">

        
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#45b8ff] via-[#3287bc] to-[#020608] animate-slideUp">
          About Caresoft Technologies
        </h1>

        {/* Who We Are / Mission / Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div className="bg-white/40 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-[#3491cb] transition-all transform hover:scale-105">
            <Users className="w-10 h-10 text-[#3c9edc] mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              Caresoft Technologies is a leading provider of cutting-edge tech solutions and products.
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-[#3491cb] transition-all transform hover:scale-105">
            <Globe className="w-10 h-10 text-[#3c9edc] mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              We continuously delight our customers in current and new businesses by delivering superior value through enhanced IT-Services & Solutions. We specialize in building brands, products, and technologies with excellent sales, service, and solutions.
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-[#3491cb] transition-all transform hover:scale-105">
            <Star className="w-10 h-10 text-[#3c9edc] mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To create world-class platforms and transform digital experiences across evolving technologies..
            </p>
          </div>
        </div>

        
        


        
        <section className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#2077ac]">
            Premium Brands We Offer
          </h2>

       
          <div className="overflow-hidden py-6 relative">
            <div className="flex gap-10 animate-scroll-left">

              
              {[
                hp,
                dell,
                asus,
                sophose,
                lenovo,
                micro,
                zebra,
                zoho,
                fortinet,
                mifcro,
                hikvision,
                k7,
                synology,
                gsuite
              ].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 bg-white rounded-2xl shadow-md flex items-center justify-center p-4"
                >
                  <img
                    src={logo}
                    alt="brand logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}

              
              {[
                hp,
                dell,
                asus,
                sophose,
                lenovo,
                micro,
                zebra,
                zoho,
                fortinet,
                mifcro,
                hikvision,
                k7,
                synology,
                gsuite
              ].map((logo, index) => (
                <div
                  key={`copy-${index}`}
                  className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 bg-white rounded-2xl shadow-md flex items-center justify-center p-4"
                >
                  <img
                    src={logo}
                    alt="brand logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

<style>
 {`
  @keyframes scrollLeft {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-scroll-left {
    animation: scrollLeft 23s linear infinite;
    display: flex;
   }
 `}
</style>


<section className="bg-gradient-to-r from-[#38aaf1] via-[#2077ac] to-[#0e202b] text-white py-16 rounded-3xl shadow-xl overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            Why Choose Caresoft Technology? 🚀
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105 text-center">
              <Truck className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Free Shipping</h3>
            </div>

            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105 text-center">
              <Lock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Secure Payment</h3>
            </div>

            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105 text-center">
              <Gift className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Best Deals</h3>
            </div>
          </div>
        </section>


      </div>


    </div>
  );
}
