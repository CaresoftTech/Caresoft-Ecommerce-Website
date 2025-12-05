import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, Menu, User, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import logo from '@/assets/caresoft-logo2.png';

export const Header = () => {
  const { user } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/customer?search=${searchQuery}`);
    }
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const isHomePage = location.pathname === '/';

  // ✅ Dynamic home link
  const homeLink = user ? "/customer" : "/";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white ">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link to={homeLink} className="flex items-center space-x-2">
            <img src={logo} alt="Caresoft Technology" className="h-15 w-60" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">

            {/* Updated Home link */}
            <Link
              to={homeLink}
              className="text-sm font-medium text-[#3491cb] hover:text-[#176276f3] transition-colors"
            >
              Home
            </Link>

            {/* {user && (
              <Link to="/order-tracking" className="text-sm font-medium text-[#3491cb] hover:text-[#176178] transition-colors flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Track Order
              </Link>
            )} */}
            
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#3491cb]" />
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </form>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            {!isHomePage && (
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => navigate('/cart')}
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-semibold">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            )}

            {user ? (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/customer')}
              >
                <User className="h-5 w-5" />
              </Button>
            ) : (
              <Button onClick={() => navigate('/signin')} className="hidden sm:flex bg-gradient-to-br from-[#73c6fa] to-[#185680] hover:bg-[#2572a1]">
                Sign In
              </Button>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <form onSubmit={handleSearch} className="lg:hidden">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </form>

            <nav className="flex flex-col space-y-2">

              {/* Mobile Home Link Updated */}
              <Link
                to={homeLink}
                className="text-sm font-medium hover:text-primary transition-colors p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>



              {user && (
                <Link
                  to="/order-tracking"
                  className="text-sm font-medium hover:text-primary transition-colors p-2 flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MapPin className="h-4 w-4" />
                  Track Order
                </Link>
              )}

              {!user && (
                <Link
                  to="/signin"
                  className="text-sm font-medium hover:text-primary transition-colors p-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
