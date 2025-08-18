import React from 'react';
import { motion } from 'framer-motion';
import { useThemeContext } from '../contexts/ThemeContext';

const ThemeDemo: React.FC = () => {
  const { theme, isDark, isLight } = useThemeContext();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700 z-50"
    >
      <div className="text-sm font-medium text-gray-900 dark:text-white mb-2">
        Current Theme: {theme}
      </div>
      <div className="flex space-x-2 text-xs">
        <span className={`px-2 py-1 rounded ${isLight ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'}`}>
          Light
        </span>
        <span className={`px-2 py-1 rounded ${isDark ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'}`}>
          Dark
        </span>
      </div>
    </motion.div>
  );
};

export default ThemeDemo; 