import React, { useState } from 'react';
import { motion } from 'framer-motion';

function LessonResources() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const resources = [
    'Resource 1',
    'Resource 2',
    'Resource 3',
    // Add more resources as needed
  ];

  const handleDownloadResource = (resourceName) => {
    // Handle individual resource download
    console.log(`Downloading ${resourceName}`);
  };

  const handleDownloadAll = () => {
    // Handle all resources download
    console.log("Downloading all resources");
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
      <motion.h2 
        className="text-2xl font-bold mb-2 text-gray-200"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Lesson Resources ({resources.length})
      </motion.h2>
      <ul className="divide-y divide-gray-700">
        {resources.map((resource, index) => (
          <motion.li 
            key={index}
            className="py-4 text-gray-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {resource}
            <button 
              className={`ml-4 text-xs rounded-md px-2 py-1 ${hoverIndex === index ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-300'}`}
              onClick={() => handleDownloadResource(resource)}
            >
              Download
            </button>
          </motion.li>
        ))}
        {resources.length === 0 && <li className="py-4 text-gray-500 italic">No resources available.</li>}
      </ul>
      {resources.length > 0 && 
        <motion.button 
          className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleDownloadAll}
        >
          Download All
        </motion.button>
      }
    </div>
  );
}

export default LessonResources;
