import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/caresoft-logo2.png";

export const Footer = () => {
  return (
    <footer className="bg-[#3491cb] text-secondary-foreground mt-auto">
      <div className="container mx-auto px-4 py-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Company Info */}
          <div className="flex flex-col items-start">
            <img 
              src={logo} 
              alt="Caresoft Logo" 
              className="h-14 w-auto mb-4 rounded-lg"
            />
            <h3 className="font-bold text-lg mb-2">Caresoft Technologies</h3>
            <p className="text-sm opacity-90">
              Your trusted partner for cutting-edge technology solutions and products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-[#12354b] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#12354b] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="/privacy" className="hover:text-[#12354b] transition-colors">
                  Privacy Policy
                </a>
              </li>
                            <li>
                <a href="/shipping" className="hover:text-[#12354b] transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-[#12354b] transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:sales@caresoft.in" className="hover:text-[#12354b] transition-colors">
                  sales@caresoft.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+91 9176012413" className="hover:text-[#12354b] transition-colors">
                  +91-9176012413
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="opacity-90">
                  1st Floor, F4, 3rd Phase, Ekkatuthangal, Chennai – 600 032
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-6 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Caresoft Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
