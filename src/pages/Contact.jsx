import React, { useContext, useState } from 'react';
import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaUser, FaPhoneAlt, FaComment, FaTelegram } from 'react-icons/fa';
import { ColorContext } from '../context/ColorContext';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const Contact = () => {
  const { color } = useContext(ColorContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="w-full min-h-screen px-4 md:px-10 py-20 text-white ml-0 md:ml-72">
      
      {/* ===== Cards Section ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center text-center">
          <div className="flex items-center mb-2 justify-center">
            <FaEnvelope color={color} className="text-xl" />
            <span className="ml-2 text-lg">Email</span>
          </div>
          <span className="break-words">
            <a href="mailto:manoharchowdary.757@gmail.com" className="underline">manoharchowdary.757@gmail.com</a>
          </span>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center text-center">
          <div className="flex items-center mb-2 justify-center">
            <FaGithub className="text-xl" color={color} />
            <span className="ml-2 text-lg">GitHub</span>
          </div>
          <span className="break-words">
            <a href="https://github.com/Manoharchow9848" className="underline">Manoharchow9848</a>
          </span>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center text-center">
          <div className="flex items-center mb-2 justify-center">
            <FaMapMarkerAlt className="text-xl" color={color} />
            <span className="ml-2 text-lg">My Address</span>
          </div>
          <span className="break-words text-center">Rajahmundry</span>
        </div>
      </div>

      {/* ===== Contact Form & Map ===== */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl mb-4"><span style={{ color: color }}>Contact</span> Me</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-300 flex items-center">
                <FaUser color={color} className="mr-2 text-lg" />
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 text-white rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 flex items-center">
                <FaEnvelope color={color} className="mr-2 text-lg" />
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 text-white rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 flex items-center">
                <FaPhoneAlt color={color} className="mr-2 text-lg" />
                Phone Number:
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 text-white rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 flex items-center">
                <FaComment color={color} className="mr-2 text-lg" />
                Message:
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 text-white rounded mt-1"
                rows="4"
              ></textarea>
            </div>
            <button
              style={{ backgroundColor: color }}
              type="submit"
              className="flex items-center justify-center w-full p-2 rounded mt-2 text-white hover:opacity-90 transition"
            >
              Send Message <FaTelegram className="ml-2" />
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="w-full md:w-1/2 bg-gray-900 rounded-lg overflow-hidden">
          <h2 className="text-xl p-4"><span style={{ color: color }}>My</span> Location</h2>
          <div className="h-80 md:h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110092.80128371004!2d81.83203221904044!3d17.00784081802897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a42ff1c4f7b1f3f%3A0x5d62e69bca0ed50c!2sPallakadiam%2C%20Rajahmundry%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1696957165797!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Contact;
