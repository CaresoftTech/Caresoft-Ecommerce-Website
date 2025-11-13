import { useState, useEffect } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
    <div className="min-h-screen flex flex-col">
      {/* Carousel */}
      <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden bg-muted">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Welcome to Caresoft Technology
                  </h1>
                  <p className="text-lg md:text-xl mb-6">
                    Discover the latest tech products with amazing offers
                  </p>
                  <Button size="lg" className="bg-accent hover:bg-accent/90">
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
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 text-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 text-white"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="bg-accent text-accent-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <p className="text-lg font-bold">🎉 MEGA SALE: Up to 25% OFF on all products!</p>
            <p className="text-sm">Limited time offer. Shop now!</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
          <p className="text-muted-foreground">
            Explore our latest collection of cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Promotional Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Caresoft Technology?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="p-6">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="opacity-90">On orders over $100</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="opacity-90">100% secure transactions</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-semibold mb-2">Best Deals</h3>
              <p className="opacity-90">Unbeatable prices guaranteed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
