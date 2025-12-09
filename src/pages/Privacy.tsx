import React from "react";
import { Shield, Lock, Info, Users, Cookie, Gift, Mail } from "lucide-react";

const icons = [
  <Info className="w-6 h-6 text-white" />,
  <Users className="w-6 h-6 text-white" />,
  <Lock className="w-6 h-6 text-white" />,
  <Shield className="w-6 h-6 text-white" />,
  <Cookie className="w-6 h-6 text-white" />,
  <Gift className="w-6 h-6 text-white" />,
  <Mail className="w-6 h-6 text-white" />,
];

export default function PrivacyOption2() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        "We collect information that you provide directly to us, including:",
        "Name, email address, and phone number",
        "Shipping and billing addresses",
        "Payment information (processed securely)",
        "Order history and preferences",
        "Communications with customer service",
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: [
        "We use the collected information for:",
        "Processing and fulfilling orders",
        "Communicating about orders and services",
        "Providing customer support",
        "Improving our products and services",
        "Sending promotional materials (with your consent)",
      ],
    },
    {
      title: "3. Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist in operating our website and conducting business, under strict confidentiality agreements.",
      ],
    },
    {
      title: "4. Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure.",
      ],
    },
    {
      title: "5. Cookies and Tracking",
      content: [
        "We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user preferences. You can control cookie settings through your browser.",
      ],
    },
    {
      title: "6. Your Rights",
      content: [
        "You have the right to:",
        "Access your personal information",
        "Correct inaccurate data",
        "Request deletion of your data",
        "Opt-out of marketing communications",
        "Object to data processing",
      ],
    },
    {
      title: "7. Children's Privacy",
      content: [
        "Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children under 18.",
      ],
    },
    {
      title: "8. Changes to Privacy Policy",
      content: [
        "We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy on this page with an updated revision date.",
      ],
    },
    {
      title: "9. Contact Us",
      content: [
        "If you have questions about this Privacy Policy or how we handle your data, please contact us at sales@caresoft.in",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#f7faff] via-[#e2f0ff] to-[#f0f4f8] py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#3c9edc] via-[#72c8fe] to-[#17506c] animate-slideUp">
          Privacy Policy
        </h1>

        <div className="space-y-10">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row gap-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-[#3491cb] transition-all p-6 md:p-8"
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
