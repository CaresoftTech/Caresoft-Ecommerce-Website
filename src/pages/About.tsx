import React, { useState } from "react";
import {
  Truck, Lock, Gift, Users, Globe, Star, Plus, Minus,

  BadgeCheck,
  Receipt,
  ShieldCheck,
} from "lucide-react";
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
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const faqs = [
    {
      q: "Why should I buy from Caresoft instead of other online stores?",
      a: "We provide high-quality products, trusted service, and outstanding after-sales support with competitive pricing."
    },
    {
      q: "Do you have showrooms in Chennai and other cities?",
      a: "Yes, we are expanding rapidly and have multiple service points across major cities."
    },
    {
      q: "Do you provide EMI or installment options for laptops and desktops?",
      a: "Absolutely! Easy EMI options are available for a wide range of laptops, desktops, and accessories."
    },
    {
      q: "Can businesses and institutions purchase in bulk?",
      a: "Yes! We support companies with bulk orders and corporate solutions."
    },
    {
      q: "Do you sell refurbished laptops and desktops?",
      a: "Yes, certified refurbished systems with warranty are available."
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden ">

      <section className="pt-4 pb-2 bg-gradient-to-r from-[#38aaf1] via-[#2077ac] to-[#0e202b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            About Us
          </h1>

        </div>
      </section>


      <div className="container px-6 md:px-12  ">
        <section className="max-w-5xl mx-auto px-4 mt-16 space-y-14">


          <div>
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-[#3491cb]" />
              <h2 className="text-2xl md:text-3xl font-semibold text-[#3491cb]">
                Who We Are
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Caresoft Technologies is a trusted technology partner delivering reliable,
              scalable, and future-ready IT solutions for businesses across industries.
              We focus on understanding client needs and translating them into practical,
              efficient digital solutions.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With a strong emphasis on quality, performance, and long-term value, our
              team combines technical expertise with a customer-first approach to help
              organizations grow confidently in a digital-driven world.
            </p>
          </div>


          <div>
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-[#3491cb]" />
              <h2 className="text-2xl md:text-3xl font-semibold text-[#3491cb]"> Our Mission </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-5"> Our mission is to empower organizations through innovative technology, dependable IT services, and strategic digital solutions. </p>
            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              <li>Deliver high-quality IT services</li>
              <li>Enable digital transformation</li>
              <li>Build long-term client partnerships</li>
            </ul>
          </div>



          <div>
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-6 h-6 text-[#3491cb]" />
              <h2 className="text-2xl md:text-3xl font-semibold text-[#3491cb]"> Our Vision </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-5"> We envision building world-class digital platforms that transform experiences and create sustainable business growth. </p>
            <ul className="space-y-2 text-gray-500 list-disc list-inside">
              <li>Innovation-driven mindset</li>
              <li>Global standards and best practices</li>
              <li>Scalable, future-proof solutions</li>
            </ul>
          </div>






        </section>


        <section className="text-[#3491cb] py-16 overflow-hidden">
          <h2 className="text-3xl md:text-4xl mb-3 pb-5  font-bold text-center animate-fade-in bg-gradient-to-r from-[#72c8fe] via-[#3c9edc] to-[#020608] bg-clip-text text-transparent">
            Why Choose Caresoft Technologies?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-6 md:px-12">

            <div className="bg-[#f0f7ff] backdrop-blur-lg rounded-3xl p-4 shadow-lg hover:shadow-md hover:shadow-[#3491cb] text-center transition-all transform hover:scale-105">
              <BadgeCheck className="w-12 h-12 mx-auto mb-4 text-[#3491cb]" />
              <h3 className="text-md font-semibold">Genuine Products</h3>
            </div>

  
            <div className="bg-[#f0f7ff] backdrop-blur-lg rounded-3xl p-4 shadow-lg hover:shadow-md hover:shadow-[#3491cb] text-center transition-all transform hover:scale-105">
              <Truck className="w-12 h-12 mx-auto mb-4 text-[#3491cb]" />
              <h3 className="text-md font-semibold">Secure Delivery</h3>
            </div>

         
            <div className="bg-[#f0f7ff] backdrop-blur-lg rounded-3xl p-4 shadow-lg hover:shadow-md hover:shadow-[#3491cb] text-center transition-all transform hover:scale-105">
              <Receipt className="w-12 h-12 mx-auto mb-4 text-[#3491cb]" />
              <h3 className="text-md font-semibold">No Hidden Charges</h3>
            </div>

            
            <div className="bg-[#f0f7ff] backdrop-blur-lg rounded-3xl p-4 shadow-lg hover:shadow-md hover:shadow-[#3491cb] text-center transition-all transform hover:scale-105">
              <Lock className="w-12 h-12 mx-auto mb-4 text-[#3491cb]" />
              <h3 className="text-md font-semibold">Secure Payments</h3>
            </div>

            <div className="bg-[#f0f7ff] backdrop-blur-lg rounded-3xl p-4 shadow-lg hover:shadow-md hover:shadow-[#3491cb] text-center transition-all transform hover:scale-105">
              <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-[#3491cb]" />
              <h3 className="text-md font-semibold">21 Years of Trust</h3>
            </div>

          </div>
        </section>





        <section className="max-w-7xl mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 bg-[#f0f7ff] p-10 rounded-3xl">

            
            <div className="md:col-span-1 flex items-start">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
                FAQ (Frequently <br /> Asked Questions)
              </h2>
            </div>

         
            <div className="md:col-span-2 space-y-4">
              {faqs.map((item, i) => (
                <div key={i} className="border-b border-gray-300 pb-4 cursor-pointer" onClick={() => toggleFAQ(i)}>
                  <div className="flex justify-between items-center">
                    <p className="text-lg md:text-xl font-medium text-gray-800">
                      {i + 1}. {item.q}
                    </p>

                    {openIndex === i ? (
                      <Minus className="w-6 h-6 text-gray-800" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-800" />
                    )}
                  </div>

                  <div className={`transition-all duration-300 overflow-hidden ${openIndex === i ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
                    }`}>
                    <p className="text-gray-600 leading-relaxed pl-7">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>



        <section className="mt-7 container ">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 bg-gradient-to-r from-[#72c8fe] via-[#3c9edc] to-[#020608] bg-clip-text text-transparent">
            Premium Brands We Offer
          </h2>


          <div className="overflow-hidden py-2 relative m-8">
            <div className="flex gap-5 animate-scroll-left">
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
                  className="flex-shrink-0 w-40 h-32 md:w-40 md:h-20 bg-white rounded-2xl shadow-md flex items-center justify-center p-4"
                >
                  <img
                    src={logo}
                    alt="brand logo"
                    className="w-full h-14 object-contain"
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
                  className="flex-shrink-0 w-32 h-24 md:w-40 md:h-20 bg-white rounded-2xl shadow-md flex items-center justify-center p-4"
                >
                  <img
                    src={logo}
                    alt="brand logo"
                    className="w-full h-20 object-contain"
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
              animation: scrollLeft 18s linear infinite;
              display: flex;
            }
          `}
        </style>



      </div>
    </div>
  );
}
