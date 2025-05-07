import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { typography } from "@/styles/typography";

interface ContactInfoProps {
  layout?: "horizontal" | "vertical";
}

const contactInfo = [
  {
    icon: <Phone className="h-4 w-4" />,
    title: "Phone",
    details: [
      { number: "+91 40 45182310", country: "(IN)" },
      { number: "+1 833 326 8272", country: "(USA)" }
    ],
    description: "Monday to Friday, 9am to 6pm"
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    details: "info@gccenablr.com",
    description: "We'll respond within 24 hours"
  },
];

const ContactInfo: React.FC<ContactInfoProps> = ({ layout = "horizontal" }) => {
  return (
    <div className={cn(
      "space-y-8",
      layout === "horizontal" && "lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8"
    )}>
      {contactInfo.map((info, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={cn(
            "p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden group relative",
            layout === "vertical" && "flex flex-row items-start"
          )}
        >
          {/* Top accent line with gradient hover */}
          <div className="absolute top-0 left-0 w-full h-1 bg-enablr-navy opacity-70 group-hover:bg-gradient-to-r group-hover:from-blue-800 group-hover:to-red-600 transition-colors duration-300"></div>
          
          {/* Decorative corner gradient */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-red-50 rounded-tl-[80px] -mr-16 -mb-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className={cn(
            "relative z-10",
            layout === "horizontal" ? "flex flex-col items-center text-center" : "flex items-start gap-4"
          )}>
            <div className={cn(
              "relative flex-shrink-0",
              layout === "horizontal" ? "w-16 h-16 mb-4" : "w-12 h-12 mr-4"
            )}>
              <div className="absolute inset-0 bg-enablr-navy/10 rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-red-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-enablr-navy text-white rounded-full">
                {info.icon}
              </div>
            </div>
            
            <div className={layout === "vertical" ? "" : ""}>
              <h3 className={cn(
                layout === "horizontal" ? "text-lg" : "text-base",
                "text-enablr-navy group-hover:text-enablr-navy transition-colors duration-300 mb-2"
              )}>
                {info.title}
              </h3>
              
              {Array.isArray(info.details) ? (
                <div className="space-y-0.5 text-sm">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-enablr-navy font-medium whitespace-nowrap">
                      <span className="inline-block">{detail.number}</span>
                      <span className="text-gray-500 text-xs ml-1 inline-block">{detail.country}</span>
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-enablr-navy font-medium text-sm mb-2">
                  {info.details}
                </p>
              )}
              
              <p className="text-gray-600 text-xs leading-relaxed font-light mt-2">
                {info.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactInfo;
