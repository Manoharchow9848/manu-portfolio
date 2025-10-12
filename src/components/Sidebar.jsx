// src/components/Sidebar.jsx
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ColorContext } from "../context/ColorContext";
import { FaAddressBook, FaHome, FaImages } from "react-icons/fa";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { BsGraphUpArrow } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";

const Sidebar = () => {
  const { color } = useContext(ColorContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ====== MOBILE HEADER ====== */}
      <div
        className="md:hidden fixed top-0 left-0 w-full flex items-center justify-between bg-gray-900 text-white px-5 py-4 z-50 shadow-md"
        style={{ borderBottom: `3px solid ${color}` }}
      >
        <h1 className="text-xl font-semibold italic">
          <span style={{ color }}>KMC</span> Portfolio
        </h1>
        <button onClick={() => setIsOpen(true)}>
          <FiMenu size={26} color={color} />
        </button>
      </div>

      {/* ====== SIDEBAR FOR DESKTOP ====== */}
      <div
        className="hidden md:flex flex-col text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r-8 dark:border-gray-600 dark:bg-gray-900 dark:text-white rounded-r-3xl z-40"
        style={{
          borderRadius: `0 250px 250px 0`,
          borderColor: color,
        }}
      >
        <Link to="/">
          <h1 className="text-2xl font-bold hidden md:block mt-20 italic">
            <span style={{ color }}>KMC</span> Portfolio
          </h1>
        </Link>

        <ul className="flex flex-col mt-20 text-xl">
          <Link to="/">
            <li className="flex items-center py-3 px-2 space-x-4 hover:rounded-r-2xl hover:bg-slate-400 hover:text-white">
              <FaHome color={color} />
              <span className="hidden md:inline">Home</span>
            </li>
          </Link>
          <Link to="/about">
            <li className="flex items-center py-3 px-2 space-x-4 hover:rounded-r-2xl hover:bg-slate-400 hover:text-white">
              <FaAddressBook color={color} />
              <span className="hidden md:inline">About</span>
            </li>
          </Link>
          <Link to="/achievements">
            <li className="flex items-center py-3 px-2 space-x-4 hover:rounded-r-2xl hover:bg-slate-400 hover:text-white">
              <BsGraphUpArrow color={color} />
              <span className="hidden md:inline">Achievements</span>
            </li>
          </Link>
          <Link to="/projects">
            <li className="flex items-center py-3 px-2 space-x-4 hover:rounded-r-2xl hover:bg-slate-400 hover:text-white">
              <FaImages color={color} />
              <span className="hidden md:inline">Projects</span>
            </li>
          </Link>
          <Link to="/contact">
            <li className="flex items-center py-3 px-2 space-x-4 hover:rounded-r-2xl hover:bg-slate-400 hover:text-white">
              <PiContactlessPaymentFill color={color} />
              <span className="hidden md:inline">Contact</span>
            </li>
          </Link>
        </ul>
      </div>

      {/* ====== SLIDING SIDEBAR FOR MOBILE ====== */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 p-6 rounded-r-3xl`}
        style={{ borderRight: `5px solid ${color}` }}
      >
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-semibold italic">
            <span style={{ color }}>KMC</span> Portfolio
          </h2>
          <button onClick={() => setIsOpen(false)}>
            <FiX size={26} color={color} />
          </button>
        </div>

        <ul className="flex flex-col gap-5 text-lg">
          {[
            { name: "Home", path: "/", icon: <FaHome color={color} /> },
            { name: "About", path: "/about", icon: <FaAddressBook color={color} /> },
            { name: "Achievements", path: "/achievements", icon: <BsGraphUpArrow color={color} /> },
            { name: "Projects", path: "/projects", icon: <FaImages color={color} /> },
            { name: "Contact", path: "/contact", icon: <PiContactlessPaymentFill color={color} /> },
          ].map((item, i) => (
            <Link key={i} to={item.path} onClick={() => setIsOpen(false)}>
              <li className="flex items-center gap-4 hover:text-pink-400 transition-colors">
                {item.icon}
                <span>{item.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* ====== OVERLAY when sidebar open ====== */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
