import React from "react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#f4f7fb] py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#4cb7f9] to-[#2386b8] animate-fadeIn">
          Privacy Policy
        </h1>

      
        <div className="space-y-4  border-[#3ca5e8] pl-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3491cb]">
            Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We collect personal information that you voluntarily provide when interacting with our website. 
            This may include your name, email address, phone number, shipping and billing details, and any 
            information you share while communicating with our support team. Additionally, we gather non-personal 
            data such as device details, browsing patterns, and order preferences to enhance your shopping experience.
          </p>
        </div>

        <div className="space-y-4  border-[#3ca5e8] pl-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3491cb]">
            How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The information we collect is used to process and deliver your orders, communicate updates, 
            provide customer support, and improve our services. We may also use your data to personalize 
            your experience, recommend products, and send promotional content if you have opted in to receive it. 
            All information is handled with strict confidentiality.
          </p>
        </div>

     
        <div className="space-y-4  border-[#3ca5e8] pl-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3491cb]">
            Information Sharing
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell or rent your personal information. Your data may be shared only with trusted third-party 
            service providers who assist with payment processing, delivery, analytics, or website operations. 
            These partners are required to protect your data and are permitted to use it solely for providing services.
          </p>
        </div>

        <div className="space-y-4  border-[#3ca5e8] pl-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3491cb]">
            Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We implement strong security measures, including encryption and secure servers, to protect your 
            personal information. While we strive to ensure complete safety, no internet transmission or storage 
            system is entirely risk-free. We continuously review and update our security practices.
          </p>
        </div>

      
        <div className="space-y-4 border-[#3ca5e8] pl-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3491cb]">
            Cookies & Tracking
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our website uses cookies to remember your preferences, keep your session active, and analyze site 
            traffic. These tools help us improve performance and deliver better user experiences. You can choose 
            to disable cookies through your browser settings, though certain features may not function properly.
          </p>
        </div>

      
        <div className="space-y-4 b b pl-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3491cb]">
            Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You have full control over your personal information. You may request access, correction, or deletion 
            of your data at any time. You also have the right to opt out of marketing communications or limit how 
            your data is processed by contacting our support team.
          </p>
        </div>

 
        <div className="space-y-4  pl-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3491cb]">
            Children's Privacy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our services are intended for users aged 18 and above. We do not knowingly collect personal information 
            from children. If any such data is found, we will take immediate steps to delete it.
          </p>
        </div>

       
        <div className="space-y-4 pl-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3491cb]">
            Updates to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our Privacy Policy may be updated periodically to reflect changes in technology, regulations, or 
            business practices. The updated version will always be available on this page along with the revised date.
          </p>
        </div>

      
        <div className="space-y-4  pl-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3491cb]">
            Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            For any questions or concerns regarding this Privacy Policy, you can reach us at 
            <span className="font-semibold text-[#17506c]"> sales@caresoft.in</span>.
          </p>
        </div>
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
