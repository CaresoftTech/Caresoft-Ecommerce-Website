import { useState, useEffect } from "react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  Shield,
  TrendingUp, ShieldCheck, LifeBuoy, Headphones,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import bg1 from "@/assets/bg1234.png";
import hp from "@/assets/hp.png";
import dell from "@/assets/Dell.png";
import asus from "@/assets/asus.png";
import apple from "@/assets/apple-logo.jpeg";
import lenovo from "@/assets/lenovo.svg";
import sm from "@/assets/sm logo.png";
import { FiTruck, FiHeadphones, FiRefreshCw, FiCreditCard, FiShield, FiUser, FiDollarSign, FiPackage, FiStar } from "react-icons/fi";

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
  "Home",
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-muted/30 to-background overflow-x-hidden ">


      <div className=" hidden md:block w-full bg-white border-t border-gray-200 shadow-sm container">
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
      <section className="relative w-full  h-[200px] md:h-[320px] lg:h-[350px] overflow-hidden ">
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
              <div className="container px-5 md:px-11 ">
                <div className="max-w-2xl text-white animate-fade-in c">
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

        <div className="announcement-bar bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white shadow-lg w-full ">
          <div className="marquee whitespace-nowrap flex items-center gap-10 px-4 ">

            <div className="flex items-center gap-2  ">
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



      <section className="container mt-7   px-5 md:px-11 py-2 ">
        <div className="mb-8 text-center ">
          <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#72c8fe] via-[#3c9edc] to-[#020608] bg-clip-text text-transparent">
            Featured Products
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} requireLogin={true} />
          ))}
        </div>

      </section>


      {/* r Background Section */}
      <section
        className="
    relative w-full
    bg-contain md:bg-cover
    bg-center bg-no-repeat
    min-h-[120px] sm:min-h-[150px] md:min-h-[130px]
  "
        style={{ backgroundImage: `url(${bg1})` }}
      >
        {/* Optional overlay */}
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
          className="w-full container"
        >
          <CarouselContent>
            {featuredProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 "
              >
                <div className="p-1">
                  <ProductCard product={product} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>


        </Carousel>
      </section>


      <section className="mt-7 container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-[#2077ac]">
          Premium Brands We Offer
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 py-6 px-4">
          {[hp, dell, asus, apple, lenovo,sm].map((logo, index) => (
            <div
              key={index}
              className="w-full h-24 bg-white rounded-2xl shadow-sm shadow-[#3491cb] flex items-center justify-center p-4"
            >
              <img
                src={logo}
                alt="brand logo"
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>




      <section className="w-full  bg-[#3491cb] py-6 md:py-4">
        <div className="container px-6 md:px-12 ">

          <div
            className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        gap-12
        text-white , , , ,
      "
          >
            {[
              { title: "Get Free Delivery", desc: "Enjoy Free shipping on all orders", Icon: FiTruck },
              { title: "Support 24/74", desc: "We're available at +91 81225 81225 Round-the-clock assistance for a smooth shopping experience.", Icon: Headphones },
              { title: "Return Within 10 Days", desc: "If you receive an item that you are dissatisfied with, you may return within 10 days.", Icon: FiRefreshCw },
              { title: "100% Secure Payments", desc: "Pay with the world's most popular and secure payment methods.", Icon: FiCreditCard },
              { title: "100% Original", desc: "Genuine manufacturing warranty for all products", Icon: ShieldCheck },
            ].map((item, i) => (
              <div
                key={i}
                className="
            flex flex-col items-start text-left font-sm font-semibold
            space-y-1 
            animate-fadeSlide
          "
              >
                {/* ICON */}
                <div
                  className="
              w-16 h-12 
              flex items-center justify-center 
            "
                >
                  <item.Icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-lg  font-bold leading">
                  {item.title}
                </h3>

                <p className="text-white text-sm leading-relaxed">
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
