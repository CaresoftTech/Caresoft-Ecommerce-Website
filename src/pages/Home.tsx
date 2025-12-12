import { useState, useEffect } from "react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  Shield,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import bg1 from "@/assets/bg12.png";
import hp from "@/assets/hp.png";
import dell from "@/assets/Dell.png";
import asus from "@/assets/asus.png";
import sophose from "@/assets/sophos.png";
import lenovo from "@/assets/lenovo.svg";
import micro from "@/assets/micro.png";
import zebra from "@/assets/zebra-logo-horizontal.svg";
import zoho from "@/assets/zoho-mail.svg";
import fortinet from "@/assets/fortinett.jpeg";
import mifcro from "@/assets/cisco.png";
import hikvision from "@/assets/hikvision.jpeg";
import k7 from "@/assets/k7-logo.png";
import synology from "@/assets/synology.png";
import gsuite from "@/assets/g-suite.png";
import { FiTruck, FiHeadphones, FiRefreshCw, FiCreditCard, FiShield } from "react-icons/fi";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const carouselImages = [
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=400&fit=crop",
  "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1200&h=400&fit=crop",
  "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=400&fit=crop",
];


const categories = [
  "All Products",
  "Laptops",
  "Computers",
  "Headphones",
  "Accessories",
  "Printers",
];


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };




  const featuredProducts = products.slice(0, 6);



  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-muted/30 to-background overflow-x-hidden">


      <div className="w-full bg-white border-t border-gray-200 shadow-sm ">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-3 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                className="
                      px-4 py-2 text-sm font-medium whitespace-nowrap
                      border border-gray-300 rounded-full
                      hover:bg-gradient-to-br hover:from-[#4cb9fd] hover:to-[#153f5b]
                      hover:text-white transition-all
                    "
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/*  Hero Section Slider */}
      <section className="relative w-full  h-[200px] md:h-[320px] lg:h-[350px] overflow-hidden">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
              }`}
          >
            <img
              src={image}
              alt="Slide"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-vibrant-purple/80 via-vibrant-pink/70 to-vibrant-blue/60 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white animate-fade-in">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                    <Sparkles className="h-5 w-5 text-vibrant-yellow animate-pulse" />
                    <span className="text-sm font-semibold">
                      Premium Tech Products
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-6xl  font-bold mb-4 bg-gradient-to-r from-white to-vibrant-yellow bg-clip-text text-transparent">
                    Welcome to Caresoft Technologies
                  </h1>
                  <p className="text-lg md:text-2xl mb-6 text-white/90">
                    Discover cutting-edge gadgets with unbeatable offers 🎉
                  </p>

                  <Button className="bg-vibrant-orange hover:bg-vibrant-yellow text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}


        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="absolute left-1 top-1/2 -translate-y-1/2 hover:bg-white/30 text-white backdrop-blur-none p-2"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 hover:bg-white/30 text-white  p-2"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </section>



      <section className="relative overflow-hidden w-full">
        <div className="announcement-bar bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white shadow-lg w-full">
          <div className="marquee whitespace-nowrap flex items-center gap-10 px-4">

            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 animate-pulse" />
              <span className="font-semibold text-sm tracking-wide">
                MEGA SALE: Up to 25% OFF!
              </span>
            </div>

            <span className="text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">
              ⏰ Limited time offer. Shop now!
            </span>

            <span className="font-semibold text-sm tracking-wide flex items-center gap-2">
              <Zap className="h-4 w-4 animate-pulse" />
              Free Shipping on Orders Above ₹999
            </span>

            <span className="text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">
              🚚 Fast Delivery Available!
            </span>

            <span className="font-semibold text-sm tracking-wide flex items-center gap-2">
              <Zap className="h-4 w-4 animate-pulse" />
              New Arrivals Live Now!
            </span>

          </div>
        </div>
      </section>




      <section className="container mt-7  px-4 py-2 ">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#72c8fe] via-[#3c9edc] to-[#020608] bg-clip-text text-transparent">
            Featured Products
          </h2>
        </div>



        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} requireLogin={true} />
          ))}
        </div>

      </section>

      {/* r Background Section */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat min-h-[150px] md:min-h-[150px] "
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="absolute inset-0 bg-black/0"></div>
      </section>

      <section className="container mx-auto px-4 py-3 mt-7">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2 text-center">
            🔥
            <span className="text-3xl  font-bold mb-2 bg-gradient-to-r from-[#30aefc] via-[#24a6f7] to-[#17506c] bg-clip-text text-transparent">
              Hot Deals for You
            </span>
          </h2>
          <p className="text-muted-foreground text-center">Trending products you'll love</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {featuredProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="p-1">
                  <ProductCard product={product} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="bg-vibrant-purple text-white hover:bg-vibrant-pink" />
          <CarouselNext className="bg-vibrant-purple text-white hover:bg-vibrant-pink" />
        </Carousel>
      </section>


      <section className="mt-7">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-[#2077ac]">
          Premium Brands We Offer
        </h2>


        <div className="overflow-hidden py-4 relative">
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




      <section className="w-full bg-white py-14">
        <div className="max-w-7xl mx-auto px-4">

          <div
            className="
        grid grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-5 
        gap-8
      "
          >
            {[
              { title: "Get Free Delivery", desc: "Enjoy free shipping on all orders.", Icon: FiTruck },
              { title: "Support 24/7", desc: "Call +91 81225 81225 anytime.", Icon: FiHeadphones },
              { title: "Return Within 10 Days", desc: "Return items easily within 10 days.", Icon: FiRefreshCw },
              { title: "100% Secure Payments", desc: "Trusted & secure payment methods.", Icon: FiCreditCard },
              { title: "100% Original", desc: "Genuine warranty for all products.", Icon: FiShield },
            ].map((item, i) => (
              <div
                key={i}
                className="
            flex flex-col items-center text-center 
            bg-white border border-[#3491cb]/20 rounded-2xl 
            p-6 shadow-lg 
            hover:shadow-lg hover:shadow-[#3491cb]  hover: 
            transition-all duration-300
          "
              >
                {/* ICON */}
                <div
                  className="
              w-16 h-16 rounded-xl 
              bg-[#3491cb]/10 
              border border-[#3491cb]-300 
              flex items-center justify-center 
              shadow-sm
            "
                >
                  <item.Icon className="text-[#3491cb] w-8 h-8" />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>

                
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
