import { Link, useNavigate, useLocation } from "react-router-dom";
import { ShoppingCart, Search, Menu, User } from "lucide-react";
import { Button } from "./ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { useState, useEffect } from "react";
import logo from "@/assets/caresoft-logo2.png";

export const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation(); // ⭐ to show filter only in Home
  const { user } = useAuth();
  const { cart } = useCart();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFixedHeader, setShowFixedHeader] = useState(false);

  const categories = [
    "All Products",
    "Laptops",
    "Computers",
    "Headphones",
    "Accessories",
    "Printers",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const HEADER_HEIGHT = 120;
      if (window.scrollY > HEADER_HEIGHT) {
        setShowFixedHeader(true);
      } else {
        setShowFixedHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${searchQuery}`);
    }
  };

  return (
    <>
      {/* HEADER 1 — Normal Header */}
      <header className={`${showFixedHeader ? "hidden" : "block"} w-full bg-white border-b`}>
        <div className="container mx-auto px-4">
          <div className="h-20 flex items-center justify-between">
            {/* LOGO */}
            <Link to="/">
              <img src={logo} className="h-16 w-auto" />
            </Link>

            {/* DESKTOP SEARCH */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-lg mx-4">
              <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1.5 w-full transition-all">
                <Search className="w-4 h-4 text-blue-600" />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="bg-transparent w-full text-sm focus:outline-none"
                />

                <button className="px-3 py-1 bg-gradient-to-br from-[#4cb9fd] to-[#153f5b] text-white text-sm font-semibold rounded-full active:scale-95 transition">
                  Search
                </button>
              </div>
            </form>

            {/* ICONS */}
            <div className="flex items-center space-x-3">
              {/* CART */}
              <Button variant="ghost" size="icon" onClick={() => navigate("/cart")} className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>

              {/* LOGIN / PROFILE */}
              {user ? (
                <Button variant="ghost" size="icon" onClick={() => navigate("/profile")}>
                  <User className="h-5 w-5" />
                </Button>
              ) : (
                <Button
                  onClick={() => navigate("/signin")}
                  className="bg-gradient-to-br from-[#4cb9fd] to-[#153f5b] hover:bg-[#2579ac] text-white px-4 py-2 rounded-md"
                >
                  Sign In
                </Button>
              )}

              {/* MOBILE MENU */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <Menu />
              </Button>
            </div>
          </div>

          {/* MOBILE SEARCH */}
          {mobileMenuOpen && (
            <div className="py-3 md:hidden">
              <form onSubmit={handleSearch}>
                <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1.5 w-full">
                  <Search className="w-4 h-4 text-blue-600" />

                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="bg-transparent text-sm w-full focus:outline-none"
                  />

                  <button className="px-3 py-1 bg-[#3491cb] text-white text-xs rounded-full active:scale-95 transition">
                    Search
                  </button>
                </div>
              </form>

              <nav className="flex flex-col space-y-2 mt-3">
                <Link to="/" className="text-sm font-medium p-2">
                  Home
                </Link>

                {!user && (
                  <Link
                    to="/signin"
                    className="text-sm font-medium p-2 bg-gradient-to-br from-[#4cb9fd] to-[#153f5b] text-white rounded-md w-fit px-4 py-2"
                  >
                    Sign In
                  </Link>
                )}
              </nav>
            </div>
          )}
        </div>

   
      </header>

      {/* HEADER 2 — Fixed Header */}
      {showFixedHeader && (
        <header className="fixed top-0 left-0 w-full bg-white border-b shadow-md z-50 animate-slideDown">
          
          <div className="container mx-auto px-4">
            <div className="h-16 flex items-center justify-between">
              {/* Small LOGO */}
              <Link to="/">
                <img src={logo} className="h-12 w-auto" />
              </Link>

              {/* SMALL SEARCH */}
              <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-sm mx-4">
                <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 w-full">
                  <Search className="w-4 h-4 text-blue-600" />

                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="bg-transparent text-sm w-full focus:outline-none"
                  />

                  <button className="px-3 py-1 bg-gradient-to-br from-[#4cb9fd] to-[#153f5b] text-white text-xs rounded-full">
                    Search
                  </button>
                </div>
              </form>

              {/* Icons */}
              <div className="flex items-center space-x-3">
                <Button variant="ghost" size="icon" onClick={() => navigate("/cart")} className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>

                {user ? (
                  <Button variant="ghost" size="icon" onClick={() => navigate("/profile")}>
                    <User className="h-5 w-5" />
                  </Button>
                ) : (
                  <Button
                    onClick={() => navigate("/signin")}
                    className="bg-gradient-to-br from-[#4cb9fd] to-[#153f5b] text-white px-4 py-2 rounded-md"
                  >
                    Sign In
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/*  CATEGORY FILTER BAR  */}
          {pathname === "/" && (
            <div className="w-full bg-white border-t border-gray-200 shadow-sm animate-slideDown">
              <div className="container mx-auto px-4 py-2">
                <div className="flex gap-3 overflow-x-auto no-scrollbar">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      className="
                        px-3 py-1.5 text-xs font-medium whitespace-nowrap
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
          )}
        </header>

        
      )}
    </>
  );
};
