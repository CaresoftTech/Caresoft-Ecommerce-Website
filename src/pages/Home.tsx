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
import bg1 from "@/assets/bg1.png";

const carouselImages = [
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=400&fit=crop",
  "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1200&h=400&fit=crop",
  "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=400&fit=crop",
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

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-muted/30 to-background">



      {/* 🔥 Modern Animated Announcement Bar (Only this section) */}

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


      <style>
        {`
  .announcement-bar {
    padding: 6px 0;
    backdrop-filter: blur(6px);
  }

  .marquee {
    display: inline-flex;
    animation: marquee 28s linear infinite;
  }

  .marquee:hover {
    animation-play-state: paused;
  }

  @keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
`}
      </style>


      {/*  Hero Section Slider */}
      <section className="relative w-full h-[200px] md:h-[320px] lg:h-[350px] overflow-hidden">
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

                  <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-vibrant-yellow bg-clip-text text-transparent">
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

        {/* Controls */}
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="absolute left-1 top-1/2 -translate-y-1/2 hover:bg-white/50 text-white backdrop-blur-sm p-2"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 hover:bg-white/50 text-white backdrop-blur-sm p-2"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </section>

      {/*  Feature Cards */}
      <section className="container mx-auto px-4 py-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-vibrant-purple to-vibrant-pink p-6 rounded-2xl text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
            <Shield className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">100% Secure</h3>
            <p className="opacity-90">Safe & encrypted payments</p>
          </div>

          <div className="bg-gradient-to-br from-[#4cb9fd] to-[#153f5b] p-6 rounded-2xl text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
            <TrendingUp className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Best Prices</h3>
            <p className="opacity-90">Guaranteed lowest prices</p>
          </div>

          <div className="bg-gradient-to-br from-vibrant-orange to-vibrant-yellow p-6 rounded-2xl text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
            <Sparkles className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
            <p className="opacity-90">Top-rated products only</p>
          </div>
        </div>
      </section>




      <section className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#72c8fe] via-[#3c9edc] to-[#020608] bg-clip-text text-transparent">
            Featured Products
          </h2>
        </div>
        <section className="container mx-auto px-4 mt-1 mb-6">

          <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 
                          shadow-lg shadow-[#3491cb]/40 rounded-2xl p-4 md:p-6 
                          bg-gradient-to-br from-[#ffffff0a] via-[#d7e7ff0f] to-[#2e55750c]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar">
                {["All", "Laptops", "Computers", "Headphones", "Accessories", "Printers"].map(
                  (cat) => (
                    <button
                      key={cat}
                      className="
                px-4 py-2 text-sm font-semibold rounded-xl
                bg-gradient-to-br from-[#4cb9fd] to-[#153f5b]
                text-white shadow-md
                hover:shadow-xl hover:-translate-y-1
                transition-all duration-300
                whitespace-nowrap
              "
                    >
                      {cat}
                    </button>
                  )
                )}
              </div>


              <select
                className="
          w-full md:w-auto
          px-4 py-2 rounded-xl border bg-white text-gray-700 shadow-lg
          focus:ring-2 focus:ring-[#3491cb] transition-all outline-none
        "
              >
                <option value="default">Sort By</option>
                <option value="low-high">Price: Low → High</option>
                <option value="high-low">Price: High → Low</option>
                <option value="new">Newest First</option>
              </select>

            </div>
          </div>

        </section>


        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} requireLogin={true} />
          ))}
        </div>

      </section>

      {/* Background Section */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat min-h-[350px] md:min-h-[380px]"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="absolute inset-0 bg-black/0"></div>
      </section>
    </div>
  );
}
