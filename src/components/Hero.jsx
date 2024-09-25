import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-[#101010] text-white">
      <div className="absolute inset-0 opacity-50">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
              <feColorMatrix type="saturate" values="0"/>
            </filter>
            <mask id="mask">
              <rect width="100%" height="100%" filter="url(#noise)"/>
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="#444">
            <animate attributeName="x" from="-100%" to="100%" dur="20s" repeatCount="indefinite"/>
          </rect>
          <rect width="100%" height="100%" fill="#888" mask="url(#mask)">
            <animate attributeName="x" from="100%" to="-100%" dur="15s" repeatCount="indefinite"/>
          </rect>
        </svg>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Revive Your Memories
        </motion.h1>
        
        <motion.p 
          className="mb-8 text-xl sm:text-2xl max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Photo Restore breathes new life into your cherished memories. Our AI technology repairs scratches, restores colors, and enhances details, bringing your old photos back to their original glory.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link 
            to="/restore" 
            className="inline-block bg-white text-black text-xl px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;