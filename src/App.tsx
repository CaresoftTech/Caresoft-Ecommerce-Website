import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import { Layout } from "@/components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NewSignIn from "./pages/NewSignIn";
import NewSignUp from "./pages/NewSignUp";
import Cart from "./pages/Cart";
import Customer from "./pages/Customer";
import Profile from "./pages/Profile";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Shipping from "./pages/Shipping";
import Refund from "./pages/Refund";
import OrderTracking from "./pages/OrderTracking";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCustomers from "./pages/admin/AdminCustomers";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminProducts from "./pages/admin/AdminProducts";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import ContactButtons from "./components/ContactButtons";
import GoogleReviews from "@/components/GoogleReview";
import Services from "./pages/Services";

const App = () => (
  <TooltipProvider>
    <AuthProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
             <ScrollToTop />
             
            <Routes>
              <Route path="/" element={<Home />} />
              
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signin" element={<NewSignIn />} />
              <Route path="/signup" element={<NewSignUp />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/services" element={<Services />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/refund" element={<Refund />} />
              <Route path="/order-tracking" element={<OrderTracking />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/customers" element={<AdminCustomers />} />
              <Route path="/admin/orders" element={<AdminOrders />} />
              <Route path="/admin/products" element={<AdminProducts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
             
            <ContactButtons />
          </Layout>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  </TooltipProvider>
);

export default App;
