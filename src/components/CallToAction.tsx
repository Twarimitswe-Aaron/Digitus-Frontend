import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Smartphone, BookOpen, ArrowRight } from "lucide-react";
import { callToActionData } from "../data/mockData";

const iconMap = {
  Heart,
  Smartphone,
  BookOpen,
};

const CallToAction: React.FC = () => {
  const [openForm, setOpenForm] = useState<string | null>(null);


  const renderForm = () => {
    const inputClasses =
      "w-full border border-white/50 text-white placeholder-white/70 rounded-md py-2 px-4 bg-transparent backdrop-blur-sm " +
      "focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-200";
  
    const buttonClasses =
      "w-full bg-white text-[#08083C] py-4 rounded-md hover:bg-white/90 cursor-pointer " +
      "focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-200 font-medium backdrop-blur-sm";
  
    switch (openForm) {
      case "Volunteer":
        return (
          <div className="space-y-6 bg-transparent">
            <div className="relative">
              <input type="text" placeholder="Full Name" className={inputClasses} />
            </div>
            <div className="relative">
              <input type="email" placeholder="Email Address" className={inputClasses} />
            </div>
            <div className="relative">
              <textarea
                placeholder="Which skills can you teach?"
                rows={4}
                className={`${inputClasses} resize-none`}
              ></textarea>
            </div>
            <button type="submit" className={buttonClasses}>
              Submit Application
            </button>
          </div>
        );
  
      case "Donate Devices":
        return (
          <div className="space-y-6 bg-transparent">
            <div className="relative">
              <input type="text" placeholder="Full Name" className={inputClasses} />
            </div>
            <div className="relative">
              <input type="email" placeholder="Email Address" className={inputClasses} />
            </div>
            <div className="relative">
              <input type="text" placeholder="Type of Device (Tablet, Smartphone, etc.)" className={inputClasses} />
            </div>
            <div className="relative">
              <input type="number" placeholder="Quantity" className={inputClasses} />
            </div>
            <button type="submit" className={buttonClasses}>
              Donate Device
            </button>
          </div>
        );
  
      case "Join Training":
        return (
          <div className="space-y-6 bg-transparent">
            <div className="relative">
              <input type="text" placeholder="Full Name of Register" className={inputClasses} />
            </div>
            <div className="relative">
              <input type="text" placeholder="Full Name of the Participant" className={inputClasses} />
            </div>
            <div className="relative">
              <input type="email" placeholder="Email Address" className={inputClasses} />
            </div>
            <button type="submit" className={buttonClasses}>
              Register
            </button>
          </div>
        );
  
      default:
        return null;
    }
  };
  


  return (
    <section
      id="cta"
      className="section-padding bg-[#08083C] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full opacity-90 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/The Art of Abstraction- Thought-Provoking Quotations.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            transform: "rotate(90deg) scale(1.34)",
            transformOrigin: "center center",
            filter: "blur(8px)",
          }}
        />
      </div>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
            {callToActionData.title}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {callToActionData.subtitle}
          </p>
        </motion.div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {callToActionData.actions.map((action, index) => {
            const IconComponent = iconMap[action.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="backdrop-blur-xl rounded-xl p-8 text-center border border-white/20 hover:bg-white/4 transition-all duration-300 group"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300"
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {action.title}
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  {action.description}
                </p>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setOpenForm(action.title)}
                  className="bg-white text-[#08083C] cursor-pointer font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-all duration-300 flex items-center space-x-2 mx-auto group-hover:shadow-lg"
                >
                  <span>{action.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl rounded-xl p-8 border border-white/20 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            Stay Updated
          </h3>
          <p className="text-blue-100 mb-6 text-center">
            Get the latest updates on our programs and success stories delivered
            to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#08083C] cursor-pointer font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-blue-100 mb-4">
            Have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-white">
            <a
              href="mailto:info@digitus.org.rw"
              className="hover:text-blue-200 transition-colors duration-200"
            >
              info@digitus.org.rw
            </a>
            <a
              href="tel:+2507XXXXXXXX"
              className="hover:text-blue-200 transition-colors duration-200"
            >
              +250 7XX XXX XXX
            </a>
          </div>
        </motion.div>
      </div>

    
      {openForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className=" border border-gray-600 backdrop-blur-sm bg-white/15 rounded-xl p-6 w-full max-w-md shadow-lg relative">
            <h2 className="text-xl font-bold mb-4 text-white">{openForm}  Form</h2>
            {renderForm()}
            <button
              onClick={() => setOpenForm(null)}
              className="absolute top-3 right-3 font-bold cursor-pointer text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CallToAction;
