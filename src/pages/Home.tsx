import { useState } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { CheckCircle2, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  const categories = ['All Products', 'Computers & Laptops', 'Printers', 'RAM & Storage', 'Accessories', 'Audio', 'Monitors', 'Smartphones'];

  const filteredProducts = selectedCategory === 'All Products' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Banner Section */}
      <section className="relative bg-gradient-to-br from-muted/20 to-muted/40 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground uppercase tracking-tight">
                REFURBISHED PHONE
              </h1>
              <div className="inline-block">
                <div className="bg-accent text-accent-foreground px-8 py-4 rounded-2xl shadow-lg">
                  <p className="text-2xl md:text-3xl font-bold">Upto 80% Discount</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-6 mt-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-12 w-12 text-success" />
                  <div>
                    <p className="text-3xl font-bold text-foreground">32</p>
                    <p className="text-sm text-muted-foreground">Quality Check</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-12 w-12 text-success" />
                  <div>
                    <p className="text-3xl font-bold text-foreground">6</p>
                    <p className="text-sm text-muted-foreground">Month Warranty</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Product Images */}
            <div className="relative h-[300px] md:h-[400px]">
              <div className="absolute inset-0 flex items-center justify-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=400&fit=crop" 
                  alt="Smartphone 1" 
                  className="h-[250px] md:h-[350px] object-contain rounded-2xl shadow-xl transform hover:scale-105 transition-transform"
                />
                <img 
                  src="https://images.unsplash.com/photo-1592286927505-c0d0eb5c4821?w=200&h=400&fit=crop" 
                  alt="Smartphone 2" 
                  className="h-[250px] md:h-[350px] object-contain rounded-2xl shadow-xl transform hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="group relative h-[200px] rounded-2xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-vibrant-orange via-vibrant-pink to-destructive opacity-90"></div>
            <div className="relative h-full flex flex-col items-center justify-center p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold text-white uppercase">Mobiles</p>
            </div>
          </div>
          
          <div className="group relative h-[200px] rounded-2xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-vibrant-orange via-destructive to-vibrant-pink opacity-90"></div>
            <div className="relative h-full flex flex-col items-center justify-center p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold text-white uppercase">Laptops</p>
            </div>
          </div>
          
          <div className="group relative h-[200px] rounded-2xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-destructive via-vibrant-pink to-vibrant-orange opacity-90"></div>
            <div className="relative h-full flex flex-col items-center justify-center p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold text-white uppercase">Biometric Devices</p>
            </div>
          </div>
          
          <div className="group relative h-[200px] rounded-2xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-vibrant-pink via-destructive to-vibrant-orange opacity-90"></div>
            <div className="relative h-full flex flex-col items-center justify-center p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold text-white uppercase">Smart Watches</p>
            </div>
          </div>
          
          <div className="group relative h-[200px] rounded-2xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-vibrant-orange via-vibrant-pink to-destructive opacity-90"></div>
            <div className="relative h-full flex flex-col items-center justify-center p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold text-white uppercase">Headsets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section with Category Filters */}
      <section className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Featured Products
          </h2>
          
          {/* Category Filter Buttons */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className={`whitespace-nowrap transition-all ${
                  selectedCategory === category 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'hover:bg-muted'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} requireLogin={true} />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-r from-vibrant-purple via-vibrant-pink to-vibrant-blue text-white py-12 mt-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Why Choose Caresoft Technology?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="opacity-90">On orders over ₹5,000</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="opacity-90">100% secure transactions</p>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all">
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="text-xl font-semibold mb-2">Best Deals</h3>
              <p className="opacity-90">Unbeatable prices guaranteed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
