import React from "react";

export default function RefundPolicy() {
  const sections = [
    {
      title: "Eligibility for Refunds",
      content: `Refunds are applicable only for products purchased directly from our website.
• Items must be returned in unused, original condition with all accessories.
• Refund requests must be raised within 7 days of delivery.`,
    },
    {
      title: "Non-Refundable Items",
      content: `• Products damaged due to misuse are not eligible.
• Items with missing parts, physical damage, or tampered packaging are not accepted.
• Customized or special-order products are non-refundable.`,
    },
    {
      title: "Refund Process",
      content: `• Submit your refund request via our customer support email or phone.
• Our team verifies your request within 2 business days.
• Once approved, you'll receive pickup or drop-off instructions.`,
    },
    {
      title: "Return Pickup & Inspection",
      content: `• Returned products undergo quality inspection.
• Inspection takes 2–4 business days.
• Refund approval depends on successful verification.`,
    },
    {
      title: "Refund Timeline",
      content: `After inspection approval, refunds are processed within:
• UPI / Wallet: 1–2 business days
• Bank Transfer: 3–5 business days
• Credit / Debit Cards: 5–7 business days`,
    },
    {
      title: "Refund Deductions",
      content: `• Shipping charges are non-refundable.
• If pickup fails due to unavailability, extra charges may apply.
• A restocking fee may be applied for certain categories.`,
    },
    {
      title: "Order Cancellation Refunds",
      content: `• Orders cancelled before dispatch get a full refund.
• If already shipped, cancellation becomes a return request.`,
    },
    {
      title: "Damaged or Defective Items",
      content: `• Report damaged/defective items within 48 hours.
• Provide clear photos/videos for faster processing.
• Based on assessment, replacement or refund will be issued.`,
    },
    {
      title: "Contact for Refund Queries",
      content: `For assistance, contact:
📧 Email: sales@caresoft.in
📞 Phone: +91-9176012413
⏰ Mon–Sat, 9:00 AM – 7:00 PM IST`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7fb] py">
      <section className="pt-4 pb-2 bg-gradient-to-r from-[#38aaf1] via-[#2077ac] to-[#0e202b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 animate-fadeIn">
            Refund Policy
          </h1>
        </div>
      </section>

      <div className=" container px-5 md:px-9 mt-7">

        
        {sections.map((sec, index) => (
          <div key={index} className="space-y-1 mb-3 border-[#3ca5e8] pl-6">
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
