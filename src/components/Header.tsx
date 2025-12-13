import { Link, useNavigate, useLocation } from "react-router-dom";
import { ShoppingCart, Search, Menu, User } from "lucide-react";
import { Button } from "./ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { useState, useEffect } from "react";
import logo from "@/assets/caresoft-logo2.png";

export const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
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
      setShowFixedHeader(window.scrollY > 120);
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
      {/* ================= MOBILE LEFT SLIDE MENU ================= */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-[999] transform transition-transform duration-300 md:hidden
        ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <img src={logo} className="h-10" />
          <button
            className="text-xl font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className="p-4 flex flex-col gap-4">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>

          {user ? (
            <Link to="/profile" onClick={() => setMobileMenuOpen(false)}>
              Profile
            </Link>
          ) : (
            <Link to="/signin" onClick={() => setMobileMenuOpen(false)}>
              Sign In
            </Link>
          )}

          <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>
            Cart
          </Link>
        </nav>
      </div>

      {/* BACKDROP */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[998] md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* ================= NORMAL HEADER ================= */}
      <header className={`${showFixedHeader ? "hidden" : "block"} w-full bg-white border-b`}>
        <div className="container mx-auto px-5 md:px-11">
          <div className="h-20 flex items-center justify-between">

            {/* MOBILE MENU BUTTON */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>

            {/* LOGO */}
            <Link to="/">
              <img src={logo} className="h-16" />
            </Link>

            {/* DESKTOP SEARCH */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-lg mx-4">
              <div className="flex items-center gap-2 bg-blue-50 border rounded-full px-3 py-1.5 w-full">
                <Search className="w-4 h-4 text-blue-600" />
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="bg-transparent w-full text-sm outline-none"
                />
                <button className="px-3 py-1 bg-gradient-to-br from-[#4cb9fd] to-[#153f5b] text-white rounded-full">
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

              {/* DESKTOP PROFILE ICON */}
              {user && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigate("/profile")}
                  className="hidden md:flex"
                >
                  <User className="h-5 w-5" />
                </Button>
              )}

              {/* DESKTOP SIGN IN */}
              {!user && (
                <Button
                  onClick={() => navigate("/signin")}
                  className="hidden md:block bg-gradient-to-br from-[#4cb9fd] to-[#153f5b] text-white px-4 py-2 rounded-md"
                >
                  Sign In
                </Button>
              )}

              {/* MOBILE PROFILE ICON */}
              {user && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigate("/profile")}
                  className="md:hidden"
                >
                  <User className="h-5 w-5" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ================= FIXED HEADER ================= */}
      {showFixedHeader && (
        <header className="fixed top-0 left-0 w-full bg-white border-b shadow-md z-50 animate-slideDown">
          <div className="container mx-auto px-5 md:px-11">
            <div className="h-16 flex items-center justify-between">

              {/* ✅ MOBILE MENU BUTTON (FIXED HEADER) */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>

              <Link to="/">
                <img src={logo} className="h-12" />
              </Link>

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
        </header>
      )}
    </>
  );
};
