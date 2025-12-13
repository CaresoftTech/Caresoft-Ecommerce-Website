import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Youtube,
  Instagram,
  Linkedin,
  ChevronRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp Icon
import logo from "@/assets/caresoft-logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1d1f24] text-slate-200 mt-auto border-t border-slate-800 ">
      <div className="container mx-auto px-5 md:px-11 pt-8 pb-8"> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">


          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Caresoft Logo"
                className="h-16 w-52"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white">
              Your trusted partner for cutting-edge technology solutions. We deliver quality
              products with exceptional service to elevate your business.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2 ">
              <SocialLink href="#" icon={<Instagram size={20} />} />
              <SocialLink href="#" icon={<Youtube size={20} />} />
              <SocialLink href="#" icon={<Facebook size={20} />} />
              
              <SocialLink href="#" icon={<Linkedin size={20} />} />
              <SocialLink
                href="https://wa.me/9176012413"
                icon={<FaWhatsapp size={20} />}
              />
            </div>
          </div>

     
          <div>
            <h3 className="font-bold text-lg text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#33e8f5] rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-white">
              <FooterLink to="/about" label="About Us" />
              
              <FooterLink to="/contact" label="Contact Us" />
            </ul>
          </div>

         
          <div>
            <h3 className="font-bold text-lg text-white mb-6 relative inline-block">
              Policies
              <span className="absolute -bottom-2 left-0 w-12 h-1  bg-[#33e8f5] rounded-full"></span>
            </h3> 
            <ul className="space-y-3 text-white">
              <FooterLink to="/privacy" label="Privacy Policy" />
              <FooterLink to="/shipping" label="Shipping Policy" />
              <FooterLink to="/terms" label="Terms & Conditions" />
              <FooterLink to="/refund" label="Refund Policy" />
            </ul>
          </div>

        
          <div>
            <h3 className="font-bold text-lg text-white mb-6 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#33e8f5] rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="bg-[#3491cb]/10 p-2 rounded-lg text-[#3491cb] 
                group-hover:bg-[#3491cb] group-hover:text-white transition-colors">
                  <MapPin size={18} />
                </div>
                <span className="text-sm text-white hover:text-[#3491cb] leading-relaxed">
                  1st Floor, F4, 3rd Phase, Ekkatuthangal, Chennai – 600 032
                </span>
              </li>

              <li className="flex items-center gap-3 group">
                <div className="bg-[#3491cb]/10 p-2 rounded-lg text-[#3491cb]
                group-hover:bg-[#3491cb] group-hover:text-white transition-colors">
                  <Phone size={18} />
                </div>
                <a
                  href="tel:+919176012413"
                  className="text-sm text-white hover:text-[#3491cb] transition-colors"
                >
                  +91-9176012413
                </a>
              </li>

              <li className="flex items-center gap-3 group">
                <div className="bg-[#3491cb]/10 p-2 rounded-lg text-[#3491cb]
                group-hover:bg-[#3491cb] group-hover:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <a
                  href="mailto:sales@caresoft.in"
                  className="text-sm text-white hover:text-[#3491cb] transition-colors"
                >
                  sales@caresoft.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#3491cb] mt-12 pt-8 flex  items-center gap-4">
          <p className="text-sm text-slate-500 ">
            &copy; {currentYear}{" "}
            <span className="text-white font-medium text-center">Caresoft Technologies</span>. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};



const FooterLink = ({ to, label }: { to: string; label: string }) => (
  <li>
    <Link
      to={to}
      className="text-slate-400 hover:text-white hover:translate-x-1 
      transition-all duration-300 flex items-center gap-2 group"
    >
      <ChevronRight
        size={14}
        className="opacity-0 group-hover:opacity-100 transition-opacity 
        -ml-4 group-hover:ml-0 text-[#33e8f5]"
      />
      {label}
    </Link>
  </li>
);


const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="h-10 w-10 flex items-center justify-center rounded-full
    bg-slate-800 text-slate-400 
    hover:bg-[#33e8f5] hover:text-white
    transition-all duration-300 hover:-translate-y-1"
  >
    {icon}
  </a>
);
