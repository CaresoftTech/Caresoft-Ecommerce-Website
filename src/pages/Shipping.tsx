import React from "react";
import { Truck, Clock, Package, DollarSign, MapPin, AlertCircle, XCircle, Shield, Phone } from "lucide-react";

const icons = [
  <MapPin className="w-6 h-6 text-white" />,
  <Clock className="w-6 h-6 text-white" />,
  <Truck className="w-6 h-6 text-white" />,
  <DollarSign className="w-6 h-6 text-white" />,
  <Package className="w-6 h-6 text-white" />,
  <AlertCircle className="w-6 h-6 text-white" />,
  <XCircle className="w-6 h-6 text-white" />,
  <Shield className="w-6 h-6 text-white" />,
  <Phone className="w-6 h-6 text-white" />,
];

export default function Shipping() {
  const sections = [
    {
      title: "1. Shipping Coverage",
      content: [
        "We currently ship to all locations within India. International shipping is not available at this time. We deliver to both residential and commercial addresses.",
      ],
    },
    {
      title: "2. Processing Time",
      content: [
        "Orders are typically processed within 1-2 business days after payment confirmation:",
        "Orders placed on weekends/holidays are processed on the next business day",
        "You will receive a confirmation email once your order ships",
        "Large orders may require additional processing time",
      ],
    },
    {
      title: "3. Delivery Time",
      content: [
        "Estimated delivery times vary by location:",
        "Metro Cities: 3-5 business days",
        "Other Cities: 5-7 business days",
        "Remote Areas: 7-10 business days",
        "Please note these are estimates and actual delivery may vary based on courier availability and external factors.",
      ],
    },
    {
      title: "4. Shipping Charges",
      content: [
        "Shipping costs are calculated based on:",
        "Order value and weight",
        "Delivery location",
        "Selected shipping method",
        "🎉 FREE SHIPPING on orders above ₹5,000!",
      ],
    },
    {
      title: "5. Order Tracking",
      content: [
        "Once your order is shipped, you will receive a tracking number via email and SMS. You can track your order status through:",
        "Your account dashboard under 'My Orders'",
        "The tracking link provided in the shipping confirmation email",
        "Our customer service team",
      ],
    },
    {
      title: "6. Delivery Issues",
      content: [
        "If you encounter any delivery issues:",
        "Ensure the shipping address is correct and complete",
        "Someone should be available to receive the package",
        "Contact us immediately if delivery is delayed beyond estimated time",
        "Inspect packages upon delivery for any damage",
      ],
    },
    {
      title: "7. Failed Delivery Attempts",
      content: [
        "If delivery fails due to incorrect address, unavailability, or refusal to accept:",
        "The courier will attempt delivery up to 3 times",
        "You will be notified via SMS/email for each attempt",
        "After 3 failed attempts, the order will be returned to us",
        "Return shipping charges may apply for redelivery",
      ],
    },
    {
      title: "8. Lost or Damaged Packages",
      content: [
        "If your package is lost or arrives damaged, please contact our customer service within 48 hours of expected delivery. We will investigate and arrange for a replacement or refund as appropriate.",
      ],
    },
    {
      title: "9. Contact for Shipping Queries",
      content: [
        "For any shipping-related questions, contact us at:",
        "📧 Email: sales@caresoft.in",
        "📞 Phone: +91-9176012413",
        "⏰ Support Hours: Mon-Sat, 9:00 AM - 7:00 PM IST",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#f7faff] via-[#e2f0ff] to-[#f0f4f8] py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#3c9edc] via-[#72c8fe] to-[#17506c] animate-slideUp">
          Shipping Policy
        </h1>

        <div className="space-y-10">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row gap-6 bg-white rounded-3xl shadow-lg hover:shadow-[#3491cb] hover:shadow-2xl transition-all p-6 md:p-8"
            >
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#72c8fe] to-[#3c9edc] rounded-xl flex items-center justify-center text-white text-xl font-bold animate-bounce">
                {icons[idx % icons.length]}
              </div>
              <div className="flex-1 space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#3c9edc]">{sec.title}</h2>
                <ul className="list-disc list-inside text-gray-700 ml-5 space-y-1">
                  {sec.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes slideUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slideUp { animation: slideUp 0.8s ease-out forwards; }

          @keyframes bounce { 
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .animate-bounce { animation: bounce 2s infinite; }
        `}
      </style>
    </div>
  );
}
