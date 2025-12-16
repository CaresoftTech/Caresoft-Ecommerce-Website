import React from "react";

export default function Shipping() {
  const sections = [
    {
      title: "Shipping Coverage",
      content: `We currently ship to all locations within India. International shipping is not available at this time. We deliver to both residential and commercial addresses.`,
    },
    {
      title: "Processing Time",
      content: `Orders are typically processed within 1–2 business days after payment confirmation. 
      Orders placed on weekends or holidays are processed on the next business day.  
      You will receive a confirmation email once your order ships.  
      Large orders may require extra processing time.`,
    },
    {
      title: "Delivery Time",
      content: `Estimated delivery times vary depending on the location:
      • Metro Cities: 3–5 business days  
      • Other Cities: 5–7 business days  
      • Remote Areas: 7–10 business days  
      These are estimated timelines and may vary depending on courier availability and external factors.`,
    },
    {
      title: "Shipping Charges",
      content: `Shipping costs are calculated based on order value, delivery location, and chosen shipping method.  
      🎉 FREE SHIPPING on orders above ₹5,000!`,
    },
    {
      title: "Order Tracking",
      content: `Once your order is shipped, you will receive a tracking number via email and SMS. You can track your order through:  
      • Your account dashboard under "My Orders"  
      • Tracking link in the confirmation email  
      • Our customer support team`,
    },
    {
      title: "Delivery Issues",
      content: `If you face delivery issues, please check the shipping address and ensure someone is available to receive the package.  
      Contact us immediately if delivery is delayed beyond the estimated time.  
      Always inspect packages upon arrival for any damage.`,
    },
    {
      title: "Failed Delivery Attempts",
      content: `If delivery fails due to an incorrect address, unavailability, or refusal:  
      • Courier will attempt delivery up to 3 times  
      • You will receive SMS/email notifications  
      • After 3 failed attempts, the product returns to us  
      • Re-delivery may require additional charges`,
    },
    {
      title: "Lost or Damaged Packages",
      content: `If your package is lost or damaged, contact customer service within 48 hours of expected delivery.  
      We will investigate and arrange a replacement or refund if applicable.`,
    },
    {
      title: "Contact for Shipping Queries",
      content: `For any shipping-related queries, contact us at:  
      📧 Email: sales@caresoft.in  
      📞 Phone: +91-9176012413  
      ⏰ Support Hours: Mon–Sat, 9:00 AM – 7:00 PM IST`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7fb] ">
      <section className="pt-4 pb-2 bg-gradient-to-r from-[#38aaf1] via-[#2077ac] to-[#0e202b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 animate-fadeIn">
            Shipping Policy
          </h1>
        </div>
      </section>

      <div className="  container px-5 md:px-9 mt-7 ">



        {sections.map((sec, index) => (
          <div key={index} className="space-y-1 border-[#3ca5e8] pl-6 mb-3">
            <h2 className="text-2xl md:text-3xl font-bold text-[#000000]">
              {sec.title}
            </h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {sec.content}
            </p>
          </div>
        ))}

      </div>

    
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn .8s ease-out forwards; }
      `}</style>
    </div>
  );
}
