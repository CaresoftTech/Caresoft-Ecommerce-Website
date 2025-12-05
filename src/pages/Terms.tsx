import React from "react";
import { FileText, Shield, CreditCard, Package, CheckCircle, User, AlertCircle, Edit, Phone } from "lucide-react";

const icons = [
  <FileText className="w-6 h-6 text-white" />,
  <Shield className="w-6 h-6 text-white" />,
  <CreditCard className="w-6 h-6 text-white" />,
  <Package className="w-6 h-6 text-white" />,
  <CheckCircle className="w-6 h-6 text-white" />,
  <User className="w-6 h-6 text-white" />,
  <AlertCircle className="w-6 h-6 text-white" />,
  <Edit className="w-6 h-6 text-white" />,
  <Phone className="w-6 h-6 text-white" />,
];

export default function Terms() {
  const sections = [
    {
      title: "1. Agreement to Terms",
      content: [
        "By accessing and using the Caresoft Technology website, you agree to be bound by these Terms and Conditions. If you do not agree to all terms, you may not access or use our services.",
      ],
    },
    {
      title: "2. Use License",
      content: [
        "Permission is granted to temporarily download one copy of the materials on Caresoft Technology's website for personal, non-commercial transitory viewing only.",
        "You may not modify or copy the materials",
        "You may not use the materials for commercial purposes",
        "You may not attempt to reverse engineer any software",
        "You may not remove any copyright or proprietary notations",
      ],
    },
    {
      title: "3. Product Information",
      content: [
        "We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, reliable, current, or error-free.",
      ],
    },
    {
      title: "4. Pricing and Payment",
      content: [
        "All prices are listed in Indian Rupees (₹). We reserve the right to modify prices at any time without prior notice. Payment must be received before order processing.",
      ],
    },
    {
      title: "5. Order Acceptance",
      content: [
        "We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in product or pricing information, or suspected fraudulent activity.",
      ],
    },
    {
      title: "6. Account Responsibilities",
      content: [
        "You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately of any unauthorized use.",
      ],
    },
    {
      title: "7. Limitation of Liability",
      content: [
        "Caresoft Technology shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.",
      ],
    },
    {
      title: "8. Changes to Terms",
      content: [
        "We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the modified terms.",
      ],
    },
    {
      title: "9. Contact Information",
      content: [
        "For questions about these Terms and Conditions, please contact us at support@caresofttech.com",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#f7faff] via-[#e2f0ff] to-[#f0f4f8] py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#3c9edc] via-[#72c8fe] to-[#17506c] animate-slideUp">
          Terms & Conditions
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
