import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { processSteps } from '../data/mockData';

// Provinces and districts (same as Services.tsx)
const provinces = {
  Kigali: ["Gasabo", "Kicukiro", "Nyarugenge"],
  Northern: ["Musanze", "Gicumbi", "Burera", "Rulindo", "Gakenke"],
  Southern: [
    "Huye",
    "Nyaruguru",
    "Gisagara",
    "Nyamagabe",
    "Muhanga",
    "Kamonyi",
    "Nyanza",
    "Ruhango",
  ],
  Eastern: [
    "Rwamagana",
    "Ngoma",
    "Bugesera",
    "Kayonza",
    "Gatsibo",
    "Nyagatare",
    "Kirehe",
  ],
  Western: [
    "Rubavu",
    "Rusizi",
    "Nyamasheke",
    "Karongi",
    "Ngororero",
    "Nyabihu",
    "Rutsiro",
  ],
};

const Process: React.FC = () => {
  const [visitModal, setVisitModal] = useState(false);
  const [province, setProvince] = useState("");
  const [districts, setDistricts] = useState<string[]>([]);

  const inputClasses =
    "w-full border border-white/50 text-white placeholder-white/70 rounded-md py-2 px-4 bg-transparent backdrop-blur-sm " +
    "focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-200";
  
  const selectClasses =
    "w-full border border-white/50 text-white placeholder-white/70 rounded-md py-2 px-4 bg-transparent backdrop-blur-sm " +
    "focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-200 [&>option]:text-black [&>option]:bg-white";
  
  const buttonClasses =
    "relative isolate overflow-hidden w-full bg-white text-[#08083C] py-4 rounded-md cursor-pointer " +
    "focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-300 font-medium backdrop-blur-sm hover:text-white " +
    "before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-[#08083C] before:rounded-md " +
    "before:transition-[width] before:duration-300 before:ease-out hover:before:w-full";

  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProvince = e.target.value;
    setProvince(selectedProvince);
    setDistricts(provinces[selectedProvince] || []);
  };

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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900  mb-10">
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
                index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-[225px] lg:text-right'
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>

              {/* Content Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className={`bg-[#08083C] rounded-md p-8 w-full lg:max-w-[1000px] ${
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
            onClick={() => setVisitModal(true)}
          >
            Schedule a Visit
          </motion.button>
        </motion.div>
      </div>

      {/* Modal Form */}
      {visitModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="border border-gray-600 backdrop-blur-sm bg-white/15 rounded-xl p-6 w-full max-w-md shadow-lg relative">
            <h2 className="text-xl font-bold mb-4 text-white">Schedule a Visit</h2>
            <div className="space-y-6 bg-transparent">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Full Name"
                  className={inputClasses}
                />
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className={inputClasses}
                />
              </div>

              {/* Province */}
              <div className="relative">
                <select
                  value={province}
                  onChange={handleProvinceChange}
                  className={selectClasses}
                >
                  <option value="">Select Province</option>
                  {Object.keys(provinces).map((prov) => (
                    <option key={prov} value={prov}>
                      {prov}
                    </option>
                  ))}
                </select>
              </div>

              {/* District */}
              {districts.length > 0 && (
                <div className="relative">
                  <select className={selectClasses}>
                    <option value="">Select District</option>
                    {districts.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Phone */}
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className={inputClasses}
                />
              </div>

              {/* Submit */}
              <button type="submit" className={buttonClasses}>
                <span className="relative z-10">Submit Request</span>
              </button>
            </div>
            <button
              onClick={() => setVisitModal(false)}
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

export default Process;