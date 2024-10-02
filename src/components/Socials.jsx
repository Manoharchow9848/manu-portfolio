// src/components/Socials.jsx
import React from 'react';
import { Link } from "react-router-dom";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

// Define the social items
const social = [
  { icon: <FaGithub />, path: "https://github.com/Manoharchow9848" },
  { icon: <FaFacebook />, path: "https://facebook.com/yourprofile" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/kmc767" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/_manohar_chowdary_757/" },
];

const Socials = ({ containerStyles, iconStyle }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => (
        <Link className={iconStyle} key={index} to={item.path} target="_blank" rel="noopener noreferrer">
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
