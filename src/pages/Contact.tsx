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
    <div className="relative min-h-screen ">
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

      <div className="container px-6 md:px-12 ">
        <section className="max-w-7xl mx-auto px-4 -mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#f0f7ff] backdrop-blur-lg shadow-lg hover:shadow-[#3491cb] rounded-2xl p-6 flex items-center gap-4 hover:scale-105 transition-transform">
            <div className="bg-[#3491cb3c] p-3 rounded-lg">
              <Mail className="w-6 h-6 text-[#3491cb]" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-700">sales@caresoft.in</p>
            </div>
          </div>

          <div className="bg-[#f0f7ff] backdrop-blur-lg shadow-lg hover:shadow-[#3491cb] rounded-2xl p-6 flex items-center gap-4 hover:scale-105 transition-transform">
            <div className="bg-[#3491cb2a] p-3 rounded-lg">
              <Phone className="w-6 h-6 text-[#3491cb]" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-700">+91-9176012413</p>
            </div>
          </div>

          <div className="bg-[#f0f7ff] backdrop-blur-lg shadow-lg hover:shadow-[#3491cb] rounded-2xl p-6 flex items-center gap-4 hover:scale-105 transition-transform">
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


        <section className="max-w-7xl mx-auto px-4 mt-14 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* LEFT — FORM CARD */}
            <div className="bg-[#f0f7ff] backdrop-blur-2xl border border-[#3491cb]/40 shadow-xl shadow-[#3491cb] rounded-3xl p-8 md:p-10">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#4cb9fd] to-[#153f5b] 
        bg-clip-text text-transparent mb-8 text-center md:text-left">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="flex-1 p-4 border rounded-xl focus:ring-2 focus:ring-blue-300 outline-none border-[#3491cb]/40"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="flex-1 p-4 border rounded-xl focus:ring-2 focus:ring-blue-300 outline-none border-[#3491cb]/40"
                    required
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-300  outline-none border-[#3491cb]/40"
                  required
                />

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-br from-[#6fc1f8] to-[#153f5b] text-white 
          rounded-xl font-semibold hover:scale-105 transition-transform"
                >
                  {loading ? "Sending…" : "Send Message"}
                </button>
              </form>
            </div>

            {/* RIGHT — MAP CARD */}
            <div className=" p-4 md:p-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#4cb9fd] to-[#153f5b] 
        bg-clip-text text-transparent mb-3 text-center md:text-left">
                Our Location
              </h2>

              <div className="rounded-2xl overflow-hidden shadow-lg h-[330px] md:h-[450px]">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.3216639754555!2d80.20544427507743!3d13.025868887294473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267aa738ff92b%3A0xc4036f85a995998c!2sCaresoft%20Technologies!5e1!3m2!1sen!2sin!4v1765533549044!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </section>

      </div>

    </div>

  );
}
