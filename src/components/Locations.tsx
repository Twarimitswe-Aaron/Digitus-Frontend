import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { locations } from '../data/mockData';

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

const statusConfig = {
  current: {
    color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    icon: Clock,
    label: 'Currently Active'
  },
  upcoming: {
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    icon: Calendar,
    label: 'Coming Soon'
  },
  completed: {
    color: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
    icon: CheckCircle,
    label: 'Completed'
  }
};

const Locations: React.FC = () => {
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

  const currentLocations = locations.filter(loc => loc.status === 'current');
  const upcomingLocations = locations.filter(loc => loc.status === 'upcoming');
  const completedLocations = locations.filter(loc => loc.status === 'completed');

  return (
    <section id="locations" className="section-padding bg-[#08083C]">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-10">
            Where We're Making a Difference
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Follow our journey as we bring digital literacy to communities across the nation.
          </p>
        </motion.div>

        {/* Current Locations */}
        {currentLocations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Currently Active Programs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentLocations.map((location, index) => (
                <LocationCard key={location.id} location={location} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Upcoming Locations */}
        {upcomingLocations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Coming Soon
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingLocations.map((location, index) => (
                <LocationCard key={location.id} location={location} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Completed Locations */}
        {completedLocations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Success Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedLocations.map((location, index) => (
                <LocationCard key={location.id} location={location} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Want to bring our program to your community?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#08083C] font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors duration-300"
            onClick={() => setVisitModal(true)}
          >
            Request a Visit
          </motion.button>
        </motion.div>
      </div>

             {/* Modal Form */}
       {visitModal && (
         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
           <div className="border border-gray-600 backdrop-blur-sm bg-white/15 rounded-xl p-6 w-full max-w-md shadow-lg relative">
             <h2 className="text-xl font-bold mb-4 text-white">Request a Visit</h2>
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

const LocationCard: React.FC<{ location: any; index: number }> = ({ location, index }) => {
  const config = statusConfig[location.status as keyof typeof statusConfig];
  const StatusIcon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="card  bg-[#0a0a5a]"
    >
      {/* Location Image */}
      <div className="relative mb-4 overflow-hidden rounded-t-md">
        <img
          src={location.image}
          alt={location.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold ${config.color}`}>
            <StatusIcon className="w-3 h-3" />
            <span>{config.label}</span>
          </span>
        </div>
      </div>

      {/* Location Info */}
      <div className="space-y-3 p-6">
        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
          {location.name}
        </h4>
        
        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location.region}</span>
        </div>

        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">
            {new Date(location.startDate).toLocaleDateString()} - {' '}
            {location.endDate ? new Date(location.endDate).toLocaleDateString() : 'Ongoing'}
          </span>
        </div>

        {location.participantsCount && (
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <Users className="w-4 h-4" />
            <span className="text-sm">{location.participantsCount} participants</span>
          </div>
        )}

   
      </div>
    </motion.div>
  );
};

export default Locations;