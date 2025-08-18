import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { heroData } from '../data/mockData';

// 🎰 Lottery counter component
const LotteryCounter: React.FC<{ target: number; suffix?: string; duration?: number }> = ({
  target,
  suffix = '',
  duration = 2000,
}) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let start = 0;
    const intervalTime = 100; 
    const steps = duration / intervalTime;
    const increment = target / steps;

    const interval = setInterval(() => {
      start += Math.floor(Math.random() * increment * 3); // random rolling
      if (start >= target) {
        clearInterval(interval);
        setNumber(target); // stop at final value
      } else {
        setNumber(start);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [target, duration]);

  return (
    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
      {number}
      {suffix}
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-5 sm:pt-0 flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src="/Canvas of the Mind- Quotations on Abstract Imaginations.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 dark:from-black/80 dark:via-black/60 dark:to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {heroData.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {heroData.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r text-white from-gray-900 cursor-pointer to-gray-600 flex items-center space-x-2 rounded-xl text-lg px-8 py-4"
            >
              <span>{heroData.ctaText}</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 cursor-pointer text-white border border-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-xl transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              <span>Watch Our Story</span>
            </motion.button>
          </motion.div>

          {/* Stats with Lottery Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <LotteryCounter target={500} suffix="+" />
              <div className="text-gray-300">Seniors Trained</div>
            </div>
            <div className="text-center">
              <LotteryCounter target={25} suffix="+" />
              <div className="text-gray-300">Communities Reached</div>
            </div>
            <div className="text-center">
              <LotteryCounter target={95} suffix="%" />
              <div className="text-gray-300">Success Rate</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
