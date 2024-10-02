// src/components/NameSwitcher.jsx
import React, { useState, useEffect, useContext } from 'react';
import { ColorContext } from '../context/ColorContext';

const NameSwitcher = () => {
  const names = [
    "full stack developer",
    "cse student",
    "software engineer"
  ];
  
  const { color } = useContext(ColorContext);
  const [currentName, setCurrentName] = useState(names[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentName(names[index]);
  }, [index]);

  return (
    <div className='uppercase font-semibold '>
      <h1 className='mb-6 text-white text-[48px] xl:text-[30px] leading-[1.1] font-semibold'>
        I am a <span style={{ color: color }}>{currentName}</span>
      </h1>
    </div>
  );
};

export default NameSwitcher;
