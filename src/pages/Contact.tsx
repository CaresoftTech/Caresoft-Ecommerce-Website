import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import contactIllustration from "@/assets/contact.png"; // replace with your illustration
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-[#f0f9ff] via-[#d0efff] to-[#ffffff]">
      {/* Hero Section */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4cb9fd]/80 to-[#153f5b]/80"></div>
        <div className="relative text-center z-10 text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg md:text-xl">We are here to help you. Get in touch with us!</p>
        </div>
        <img
          src={contactIllustration}
          alt="Contact Illustration"
          className="absolute right-0 bottom-0 w-3/3 md:w-4/4 opacity-20 pointer-events-none"
        />
      </section>

      {/* Floating Info Cards */}
      <section className="max-w-6xl mx-auto px-4 -mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/90 backdrop-blur-lg shadow-lg hover:shadow-[#3491cb] rounded-2xl p-6 flex items-center gap-4 hover:scale-105 transition-transform">
          <div className="bg-[#3491cb3c] p-3 rounded-lg">
            <Mail className="w-6 h-6 text-[#3491cb]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-gray-700">sales@caresoft.in</p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-lg shadow-lg hover:shadow-[#3491cb] rounded-2xl p-6 flex items-center gap-4 hover:scale-105 transition-transform">
          <div className="bg-[#3491cb2a] p-3 rounded-lg">
            <Phone className="w-6 h-6 text-[#3491cb]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Phone</h3>
            <p className="text-gray-700">+91-9176012413</p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-lg shadow-lg hover:shadow-[#3491cb] rounded-2xl p-6 flex items-center gap-4 hover:scale-105 transition-transform">
          <div className="bg-[#3491cb30] p-3 rounded-lg">
            <MapPin className="w-6 h-6 text-[#3491cb]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Address</h3>
            <p className="text-gray-700">
              1st Floor, F4, 3rd Phase <br />
              Ekkatuthangal, Chennai – 600 032
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-4 mt-12 mb-24">
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10">
          <h2 className="text-3xl font-bold  bg-gradient-to-r from-[#72c8fe] via-[#3c9edc] to-[#020608] bg-clip-text text-transparent mb-6 text-center">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="flex-1 p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="flex-1 p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-br from-[#4cb9fd] to-[#153f5b] hover:bg-[#2579ac] text-white font-semibold rounded-xl hover:scale-105 transition-transform"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
