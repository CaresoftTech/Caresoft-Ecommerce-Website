import React from "react";

export default function Terms() {
  const sections = [
    {
      title: "Agreement to Terms",
      content: `By accessing and using the Caresoft Technology website, you agree to be bound by these Terms and Conditions. If you do not agree to all terms, you may not access or use our services.`,
    },
    {
      title: "Use License",
      content: `Permission is granted to temporarily download one copy of the materials on Caresoft Technology's website for personal, non-commercial transitory viewing only.
• You may not modify or copy the materials
• You may not use the materials for commercial purposes
• You may not reverse-engineer any software
• You may not remove copyright or proprietary notices`,
    },
    {
      title: "Product Information",
      content: `We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, reliable, current, or error-free.`,
    },
    {
      title: "Pricing and Payment",
      content: `All prices are listed in Indian Rupees (₹). We reserve the right to modify prices at any time without prior notice. Payment must be received before order processing.`,
    },
    {
      title: "Order Acceptance",
      content: `We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in product or pricing information, or suspected fraudulent activity.`,
    },
    {
      title: "Account Responsibilities",
      content: `You are responsible for maintaining the confidentiality of your account credentials and all activities under your account. Notify us immediately of any unauthorized use.`,
    },
    {
      title: "Limitation of Liability",
      content: `Caresoft Technology shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.`,
    },
    {
      title: "Changes to Terms",
      content: `We reserve the right to modify these terms at any time. Continued use of the website after changes indicates acceptance of the modified terms.`,
    },
    {
      title: "Contact Information",
      content: `For any questions regarding these Terms and Conditions, please contact us at support@caresofttech.com`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7fb] ">

            <section className="pt-4 pb-2 bg-gradient-to-r from-[#38aaf1] via-[#2077ac] to-[#0e202b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 animate-fadeIn">
            Terms & Conditions
          </h1>

        </div>
      </section>
      <div className=" container px-5 md:px-9 mt-7">


        {/* Sections */}
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

      {/* Animation */}
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
