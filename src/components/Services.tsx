import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, MapPin, Wifi, Award, X } from "lucide-react";
import { services } from "../data/mockData";

// Map for icons
const iconMap = { Users, MapPin, Wifi, Award };

// Provinces and districts
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

const Services: React.FC = () => {
  const [courseModal, setCourseModal] = useState(false);
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
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
            Our Mission: Digital Confidence for All
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="bg-[#08083C] pb-4 rounded-md text-center"
              >
                {/* Service Image */}
                <div className="relative overflow-hidden rounded-t-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="flex flex-col items-center p-3 justify-between">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-7 h-7 bg-gradient-to-r from-gray-900 to-gray-600 cursor-pointer my-4 rounded-full flex items-center justify-center mx-auto"
                  >
                    <IconComponent className="w-5 h-5 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
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
          <p className="text-lg text-gray-600 mb-6">
            Ready to bring digital literacy to your community?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#08083C] p-3 text-white rounded-xl cursor-pointer"
            onClick={() => setCourseModal(true)}
          >
            Request Our Services
          </motion.button>
        </motion.div>
      </div>


      {/* Modal Form */}
      {courseModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="border border-gray-600 backdrop-blur-sm bg-white/15 rounded-xl p-6 w-full max-w-md shadow-lg relative">
            <h2 className="text-xl font-bold mb-4 text-white">Request Our Services</h2>
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
              onClick={() => setCourseModal(false)}
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

export default Services;
