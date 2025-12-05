import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Search, User, LogOut, Edit, Sparkles, MapPin, Zap } from 'lucide-react';
import { toast } from 'sonner';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Customer() {
  const { user, logout, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    address: user?.address || '',
  });

  useEffect(() => {
    if (!user) {
      navigate('/signin');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
  };

  const handleUpdateProfile = () => {
    updateProfile(profileData);
    setDialogOpen(false);
    toast.success('Profile updated successfully');
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const featuredProducts = products.slice(0, 6);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background overflow-x-hidden">

      {/* Header with Profile Icon */}
      <div className="bg-gradient-to-r from-vibrant-purple via-vibrant-pink to-vibrant-blue py-3 h shadow-xl">
        <div className="container mx-auto px-4 h-">
          <div className="flex items-center justify-between h-8">
            <div>
              <h1 className="text-2xl md:text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="h-4 w-8 animate-pulse" />
                Welcome back, {user.name}!
              </h1>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm h-12 w-12"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <User className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Profile Card - Hidden by default */}
      {profileOpen && (
        <div className="container mx-auto px-4 py-6 animate-fade-in">
          <Card className="bg-gradient-to-br from-vibrant-purple/10 to-vibrant-pink/10 border-2 border-vibrant-purple/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-vibrant-purple">
                  <User className="h-5 w-5" />
                  My Profile
                </div>
                <div className="flex gap-2">
                  <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-vibrant-purple hover:bg-vibrant-purple/10"
                      onClick={() => setDialogOpen(true)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-vibrant-purple">Edit Profile</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div>
                          <Label htmlFor="edit-name">Name</Label>
                          <Input
                            id="edit-name"
                            value={profileData.name}
                            onChange={(e) =>
                              setProfileData({ ...profileData, name: e.target.value })
                            }
                            className="border-vibrant-purple/30 focus:border-vibrant-purple"
                          />
                        </div>
                        <div>
                          <Label htmlFor="edit-phone">Phone</Label>
                          <Input
                            id="edit-phone"
                            value={profileData.phone}
                            onChange={(e) =>
                              setProfileData({ ...profileData, phone: e.target.value })
                            }
                            className="border-vibrant-purple/30 focus:border-vibrant-purple"
                          />
                        </div>
                        <div>
                          <Label htmlFor="edit-address">Address</Label>
                          <Input
                            id="edit-address"
                            value={profileData.address}
                            onChange={(e) =>
                              setProfileData({ ...profileData, address: e.target.value })
                            }
                            className="border-vibrant-purple/30 focus:border-vibrant-purple"
                          />
                        </div>
                        <div className="flex gap-2 pt-4">
                          <Button onClick={handleUpdateProfile} className="flex-1 bg-gradient-to-br from-[#4cb9fd] to-[#153f5b] hover:bg-[#2579ac]">
                            Save Changes
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => {
                              setDialogOpen(false);
                              setProfileData({
                                name: user?.name || '',
                                phone: user?.phone || '',
                                address: user?.address || '',
                              });
                            }}
                            className="flex-1 hover:bg-red-500 "
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-vibrant-purple hover:bg-vibrant-purple/10"
                    onClick={() => setProfileOpen(false)}
                  >
                    ✕
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {user.profilePhoto && (
                  <div className="flex justify-center md:justify-start">
                    <img
                      src={user.profilePhoto}
                      alt="Profile"
                      className="w-24 h-24 rounded-full object-cover ring-4 ring-vibrant-purple/30"
                    />
                  </div>
                )}
                <div className="bg-gradient-to-br from-vibrant-purple/10 to-vibrant-pink/10 p-4 rounded-lg">
                  <p className="text-muted-foreground text-xs mb-1">Name</p>
                  <p className="font-semibold text-vibrant-purple">{user.name}</p>
                </div>
                <div className="bg-gradient-to-br from-vibrant-blue/10 to-vibrant-teal/10 p-4 rounded-lg">
                  <p className="text-muted-foreground text-xs mb-1">Email</p>
                  <p className="font-semibold text-vibrant-blue">{user.email}</p>
                </div>
                <div className="bg-gradient-to-br from-vibrant-teal/10 to-vibrant-green/10 p-4 rounded-lg">
                  <p className="text-muted-foreground text-xs mb-1">Phone</p>
                  <p className="font-semibold text-vibrant-teal">{user.phone}</p>
                </div>
                <div className="bg-gradient-to-br from-vibrant-orange/10 to-vibrant-yellow/10 p-4 rounded-lg">
                  <p className="text-muted-foreground text-xs mb-1">Address</p>
                  <p className="font-semibold text-vibrant-orange">{user.address}</p>
                </div>
                <div className="flex items-center">
                  <Button
                    onClick={() => navigate('/order-tracking')}
                    className="w-full bg-gradient-to-r from-vibrant-teal to-vibrant-blue"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Track Orders
                  </Button>
                </div>
                <div className="md:col-span-2 flex items-center gap-2">
                  <Button
                    variant="outline"
                    onClick={handleLogout}
                    className="flex-1 border-destructive/30 text-destructive hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}


      {/* Banner Carousel */}
      <section className="w-screen py-">
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

            {/* IMAGE 1 */}
            <CarouselItem>
              <div className="h-[240px] md:h-[280px] w-screen overflow-hidden">
                <img
                  src="/src/assets/c2.webp"
                  alt="Banner 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>

            {/* IMAGE 2 */}
            <CarouselItem>
              <div className="h-[240px] md:h-[280px] w-screen overflow-hidden">
                <img
                  src="/src/assets/c1.webp"
                  alt="Banner 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>

            {/* IMAGE 3 */}
            <CarouselItem>
              <div className="h-[240px] md:h-[280px] w-screen overflow-hidden">
                <img
                  src="/src/assets/c3.webp"
                  alt="Banner 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>

            {/* IMAGE 4 */}
            <CarouselItem>
              <div className="h-[240px] md:h-[280px] w-screen overflow-hidden">
                <img
                  src="/src/assets/c4.webp"
                  alt="Banner 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>

          </CarouselContent>

          <CarouselPrevious className="left-2 bg-white/90 hover:bg-white shadow-md" />
          <CarouselNext className="right-2 bg-white/90 hover:bg-white shadow-md" />

        </Carousel>
      </section>


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




      {/* Animated Product Slider */}
      <section className="container mx-auto px-4 py-3">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2 ">
            🔥<span className='text-3xl font-bold mb-2 bg-gradient-to-r from-[#30aefc] via-[#24a6f7] to-[#17506c] bg-clip-text text-transparent' >Hot Deals for You</span>
          </h2>
          <p className="text-muted-foreground">Trending products you'll love</p>
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
              <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
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



      {/* All Products - 4 per row */}
      <section className="container mx-auto px-4 pb-12">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#36acf5] via-[#1390ac] to-[#020608] bg-clip-text text-transparent">
            All Products
          </h2>
          <p className="text-muted-foreground">Browse our complete collection</p>
        </div>

        {/* 🎯 NEW Product Filter Section */}
        <section className="container mx-auto px-4 mt-0 mb-6">
          <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-[#3491cb] rounded-2xl p-4 md:p-6 bg-gradient-to-br from-[#ffffff0a] via-[#c7dfff0f] to-[#315d790c]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">

              {/* Categories */}
              <div className="flex flex-wrap gap-3">
                {["All", "Laptops", "Computers", "Headphones", "Accessories", "Printers", "Laptops", "Computers", "Accessories", "Printers"].map(
                  (cat) => (
                    <button
                      key={cat}
                      className="px-4 py-2 text-sm font-semibold rounded-sm bg-gradient-to-br from-[#6fc8ff] to-[#1b4e70] text-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      {cat}
                    </button>
                  )
                )}
              </div>

              {/* Sort */}
              <select className="px-4 py-2 rounded-xl border bg-white  text-gray-700  shadow-md focus:ring-2 focus:ring-[#3491cb] outline-none transition-all">
                <option value="default">Sort By</option>
                <option value="low-high">Price: Low → High</option>
                <option value="high-low">Price: High → Low</option>
                <option value="new">Newest First</option>
              </select>
            </div>
          </div>
        </section>


        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found 🔍</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Advertisement Section Above Footer */}
      <section className="container mx-auto px-4 pb-8">
        <div className="relative h-[200px] md:h-[250px] rounded-2xl overflow-hidden bg-gradient-to-r from-vibrant-purple via-vibrant-blue to-vibrant-teal shadow-xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=400&fit=crop')] bg-cover bg-center opacity-20" />
          <div className="relative h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
            <div className="text-white text-center md:text-left py-6">
              <p className="text-sm md:text-base font-medium opacity-90 mb-2">🎁 Exclusive Member Offer</p>
              <h2 className="text-2xl md:text-4xl font-bold mb-2">Get ₹500 OFF Your Next Order</h2>
              <p className="text-sm md:text-lg opacity-80">Use code: CARESOFT500 at checkout</p>
            </div>
            <div className="pb-6 md:pb-0">
              <Button
                size="lg"
                className="bg-white text-vibrant-purple hover:bg-vibrant-yellow hover:text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                onClick={() => navigate('/customer')}
              >
                Shop Now →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
