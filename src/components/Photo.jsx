// src/components/Photo.jsx
import React from 'react';
import image from '../assets/chow.jpg';
import { motion } from 'framer-motion';

const Photo = () => {
  return (
    <div className='w-full h-full  relative '>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} // Initial state
        animate={{ opacity: 1, scale: 1 }} // Animate to this state
        transition={{ duration: 0.5 }} // Duration of the animation
      >
        <div>
          <img 
            className='rounded-full '  
            src={image} 
            alt='hello' 
            width="390px" 
            height="400px" 
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
