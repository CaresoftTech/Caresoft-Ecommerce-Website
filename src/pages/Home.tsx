import { useState, useEffect } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { ChevronLeft, ChevronRight, Zap, Shield, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const carouselImages = [
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1200&h=400&fit=crop',
  'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=400&fit=crop',
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Hero Carousel with Gradient Overlay */}
      <section className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-vibrant-purple/80 via-vibrant-pink/70 to-vibrant-blue/60">
              <div className="container mx-auto px-4 h-full flex items-center">
                <div className="max-w-2xl text-white animate-fade-in">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                    <Sparkles className="h-5 w-5 text-vibrant-yellow animate-pulse" />
                    <span className="text-sm font-semibold">Premium Tech Products</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-vibrant-yellow bg-clip-text text-transparent">
                    Welcome to Caresoft Technology
                  </h1>
                  <p className="text-lg md:text-2xl mb-6 text-white/90">
                    Discover cutting-edge gadgets with unbeatable offers 🎉
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="bg-vibrant-orange hover:bg-vibrant-yellow text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white backdrop-blur-sm"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white backdrop-blur-sm"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50 w-2'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Mega Sale Banner */}
      <section className="bg-gradient-to-r from-vibrant-orange via-vibrant-pink to-vibrant-purple text-white py-6 shadow-xl">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center animate-fade-in">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 animate-pulse" />
              <p className="text-xl font-bold">MEGA SALE: Up to 25% OFF!</p>
            </div>
            <p className="text-sm bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              ⏰ Limited time offer. Shop now!
            </p>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-vibrant-purple to-vibrant-pink p-6 rounded-2xl text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
            <Shield className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">100% Secure</h3>
            <p className="opacity-90">Safe & encrypted payments</p>
          </div>
          <div className="bg-gradient-to-br from-vibrant-teal to-vibrant-blue p-6 rounded-2xl text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
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

      {/* Products Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-vibrant-purple via-vibrant-pink to-vibrant-blue bg-clip-text text-transparent">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our latest collection of cutting-edge technology ✨
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} requireLogin={true} />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-r from-vibrant-blue via-vibrant-teal to-vibrant-green text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
            Why Choose Caresoft Technology? 🚀
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-2xl font-semibold mb-2">Free Shipping</h3>
              <p className="opacity-90 text-lg">On orders over ₹5,000</p>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-2xl font-semibold mb-2">Secure Payment</h3>
              <p className="opacity-90 text-lg">100% secure transactions</p>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-2xl font-semibold mb-2">Best Deals</h3>
              <p className="opacity-90 text-lg">Unbeatable prices guaranteed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
