import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { locations } from '../data/mockData';

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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
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
          >
            Request a Visit
          </motion.button>
        </motion.div>
      </div>
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

        {/* Learn More Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 mt-4"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Locations;