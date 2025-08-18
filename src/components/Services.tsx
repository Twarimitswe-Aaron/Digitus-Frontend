import React from "react";
import { motion } from "framer-motion";
import { Users, MapPin, Wifi, Award } from "lucide-react";
import { services } from "../data/mockData";

const iconMap = {
  Users,
  MapPin,
  Wifi,
  Award,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-white ">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900  mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-600  max-w-3xl mx-auto">
            Our comprehensive approach combines education, infrastructure, and
            ongoing support to ensure lasting digital literacy in every
            community we serve.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-[#08083C] pb-4  rounded-md  text-center "
              >
                {/* Service Image */}
                <div className="relative overflow-hidden rounded-t-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-300 "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

             <div className="flex flex-col items-center p-3 justify-between">
                 {/* Icon */}
                 <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-7 h-7 bg-gradient-to-r from-gray-900 cursor-pointer to-gray-600 my-4 rounded-full flex items-center justify-center mx-auto "
                >
                  <IconComponent className="w-5 h-5 text-white" />
                </motion.div>

                {/* Content */}
         <div className="">
         <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
         </div>

                {/* Learn More Button */}
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  Learn More →
                </motion.button> */}
             </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600  mb-6">
            Ready to bring digital literacy to your community?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#08083C] p-3 text-white rounded-xl cursor-pointer"
          >
            Request Our Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
