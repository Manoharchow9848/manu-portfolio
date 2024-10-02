// src/components/Sidebar.jsx
import React, { useContext } from 'react';
 // Ensure the correct path
import { Link } from 'react-router-dom';
import { ColorContext } from '../context/ColorContext';
import { FaAddressBook, FaHome, FaImages, FaCog } from "react-icons/fa";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { BsGraphUpArrow } from "react-icons/bs";
import ColorPicker from './ColorPicker';

const Sidebar = () => {
  const { color } = useContext(ColorContext);
 

  

 

  return (
    <div className="text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r-8 border-r-blue-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-r-3xl" 
    style={{ borderRadius: `0 250px 250px 0`, borderColor: color }}>
      
      <Link to='/'>
        <h1 className="text-2xl font-bold hidden md:block mt-20 italic">
          <span style={{ color: color }}> KMC </span> Portfolio
        </h1>
      </Link> 

      <ul className="flex flex-col mt-20 text-xl">
        <Link to="/">
          <li className="flex items-center py-3 px-2 space-x-4 hover:rounded-r-2xl hover:cursor-pointer hover:bg-slate-400 hover:text-white">
            <FaHome color={color} />
            <span className="hidden md:inline">Home</span>
          </li>
        </Link>
        <Link to="/about">
          <li className="flex items-center py-3 px-2 space-x-4 hover:rounded-r-2xl hover:cursor-pointer hover:text-white hover:bg-slate-400">
            <FaAddressBook color={color} />
            <span className="hidden md:inline">About</span>
          </li>
        </Link>
        <Link to="/achievements">
          <li className="flex items-center py-3 px-2 space-x-4 hover:rounded-r-2xl hover:cursor-pointer hover:text-white hover:bg-slate-400">
            <BsGraphUpArrow color={color} />
            <span className="hidden md:inline">Achievements</span>
          </li>
        </Link>
        <Link to="/projects">
          <li className="flex items-center py-3 px-2 space-x-4 hover:rounded-r-2xl hover:cursor-pointer hover:text-white hover:bg-slate-400">
            <FaImages color={color} />
            <span className="hidden md:inline">Projects</span>
          </li>
        </Link>
        <Link to="/contact">
          <li className="flex items-center py-3 px-2 space-x-4 hover:rounded-r-2xl hover:cursor-pointer hover:text-white hover:bg-slate-400">
            <PiContactlessPaymentFill color={color} />
            <span className="hidden md:inline">Contact</span>
          </li>
        </Link>
        
      </ul>
    
      
    </div>
  );
};

export default Sidebar;
