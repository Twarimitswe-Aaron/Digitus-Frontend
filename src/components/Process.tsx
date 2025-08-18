import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { processSteps } from '../data/mockData';

const Process: React.FC = () => {
  return (
    <section id="process" className=" ">
      <div className="container-max mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900  mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600  max-w-3xl mx-auto">
            Our proven 3-step process ensures sustainable digital literacy in every community we visit.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative ">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600 rounded-full"></div>

          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-16 lg:mb-24 ${
                index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2 lg:text-right'
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>

              {/* Content Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className={`bg-[#08083C] rounded-md p-8 ${
                  index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'
                }`}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:items-start' : 'lg:items-end'}`}>
                  {/* Duration Badge */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-4"
                  >
                    <Clock className="w-4 h-4" />
                    <span>{step.duration}</span>
                  </motion.div>

                  {/* Step Number */}
                  <div className="text-6xl font-bold text-blue-200 dark:text-blue-800 mb-4">
                    {step.id.toString().padStart(2, '0')}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 max-w-md">
                    {step.description}
                  </p>

                  {/* Image */}
                  <div className="relative overflow-hidden rounded-lg mb-4 group">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Learn More Link */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center "
        >
          <p className="text-lg mb-2 text-gray-600 ">
            Want to see our process in action in your community?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#08083C] p-3 rounded-xl text-white font-semibold cursor-pointer mb-8"
          >
            Schedule a Visit
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;