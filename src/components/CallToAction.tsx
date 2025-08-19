import React from "react";
import { motion } from "framer-motion";
import { Heart, Smartphone, BookOpen, ArrowRight } from "lucide-react";
import { callToActionData } from "../data/mockData";

const iconMap = {
  Heart,
  Smartphone,
  BookOpen,
};

const CallToAction: React.FC = () => {
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
      transform: "rotate(90deg) scale(1.34)", // rotate & zoom to cover full width
      transformOrigin: "center center", // pivot around center
      filter: "blur(8px)", // keep your blur
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
                className=" backdrop-blur-xl rounded-xl p-8 text-center border border-white/20 hover:bg-white/4 transition-all duration-300 group"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6  transition-all duration-300"
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
          className=" backdrop-blur-xl rounded-xl p-8 border border-white/20 max-w-2xl mx-auto"
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
              className="flex-1 px-4 py-3 rounded-lg  border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
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
              href="mailto:info@digitalbridge.org"
              className="hover:text-blue-200 transition-colors duration-200"
            >
              info@digitus.org.rw
            </a>
            <a
              href="tel:+1-555-0123"
              className="hover:text-blue-200 transition-colors duration-200"
            >
              +250 7XX XXX XXX
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
