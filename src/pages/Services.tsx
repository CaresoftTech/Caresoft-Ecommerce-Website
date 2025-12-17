import React from "react";

// SERVICE IMAGES
import onsite from "@/assets/service1.png";
import network from "@/assets/service2.png";
import server from "@/assets/service3.png";
import security from "@/assets/service4.png";
import av from "@/assets/service5.png";
import cctv from "@/assets/service6.png";
import cloud from "@/assets/service7.png";

interface ServiceItem {
  title: string;
  description: string;
  points: string[];
  img: string;
}

const services: ServiceItem[] = [
  {
    title: "ONSITE SUPPORT SERVICES",
    description:
      "Reliable onsite IT support to keep your daily business operations running smoothly.",
    points: [
      "Desktop & Laptop troubleshooting",
      "Printer installation & maintenance",
      "CCTV support & monitoring",
      "Quick response time",
    ],
    img: onsite,
  },
  {
    title: "NETWORK IMPLEMENTATION & MAINTENANCE",
    description:
      "End-to-end network solutions designed for security and scalability.",
    points: [
      "Network design & cabling",
      "Router & switch configuration",
      "Firewall setup",
      "Regular health monitoring",
    ],
    img: network,
  },
  {
    title: "SERVERS & STORAGE – SUPPORT & MAINTENANCE",
    description:
      "Enterprise-level server and storage solutions with continuous support.",
    points: [
      "Server installation & upgrades",
      "Storage management",
      "Performance monitoring",
      "Preventive maintenance",
    ],
    img: server,
  },
  {
    title: "FIREWALL & ANTIVIRUS – INSTALLATION & SUPPORT",
    description:
      "Advanced security solutions to protect your business from cyber threats.",
    points: [
      "Firewall deployment",
      "Antivirus configuration",
      "Threat monitoring",
      "Security updates & support",
    ],
    img: security,
  },
  {
    title: "AV & BOARD ROOM SOLUTIONS",
    description:
      "Smart AV solutions for modern meeting and conference rooms.",
    points: [
      "Video conferencing setup",
      "Display & projector installation",
      "Audio system integration",
      "Board room automation",
    ],
    img: av,
  },
  {
    title: "CCTV & SURVEILLANCE SOLUTIONS",
    description:
      "Complete surveillance systems for safety and monitoring.",
    points: [
      "HD CCTV installation",
      "Remote monitoring",
      "Recording & backup setup",
      "Maintenance & support",
    ],
    img: cctv,
  },
  {
    title: "DATA BACKUP & CLOUD SERVICES",
    description:
      "Secure data protection and cloud solutions for business continuity.",
    points: [
      "Cloud backup solutions",
      "Disaster recovery planning",
      "Data security & encryption",
      "Scalable cloud services",
    ],
    img: cloud,
  },
];

const Service: React.FC = () => {
  return (
    <div className="min-h-screen">

      <section className="pt-7 pb-2 bg-gradient-to-r from-[#38aaf1] via-[#2077ac] to-[#0e202b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
             Our Services 
          </h1>

        </div>
      </section>

   
      {services.map((service, index) => {
        const isReverse = index % 2 !== 0;

        return (
          <section
            key={index}
            className={`py-16 ${isReverse ? "bg-[#f0f7ff]" : "bg-white"}`}
          >
            <div className="container px-6 md:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

                
                <div className={`${isReverse ? "lg:order-2" : ""}`}>
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full max-w-xl mx-auto rounded-2xl shadow-xl"
                  />
                </div>

         
                <div className={`${isReverse ? "lg:order-1" : ""}`}>
                  <h2 className="text-3xl font-bold mb-4 text-[#3491cb]">
                    {service.title}
                  </h2>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {service.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Service;
