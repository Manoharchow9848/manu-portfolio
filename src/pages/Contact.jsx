import React, { useContext, useState } from 'react';
import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaUser, FaPhoneAlt, FaComment } from 'react-icons/fa'; // Import new icons
import { ColorContext } from '../context/ColorContext';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { FaTelegram } from 'react-icons/fa';

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
    <div className="h-full w-full ml-80 mt-28 mr-5 justify-center text-white">
      {/* Cards Section */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
          <div className="flex items-center mb-2">
            <FaEnvelope color={color} className="text-xl" />
            <span className="ml-2 text-lg">Email</span>
          </div>
          <span className="text-center">
            <a href="mailto:manoharchowdary.757@gmail.com" className="underline">manoharchowdary.757@gmail.com</a>
          </span>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
          <div className="flex items-center mb-2">
            <FaGithub className="text-xl" color={color} />
            <span className="ml-2 text-lg">GitHub</span>
          </div>
          <span className="text-center">
            <a href="https://github.com/Manoharchow9848" className="underline">Manoharchow9848</a>
          </span>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="text-xl" color={color} />
            <span className="ml-2 text-lg">My Address</span>
          </div>
          <span className="text-center">Rajahmundry</span>
        </div>
      </div>

      {/* Contact Form and Map Section */}
      <div className="flex">
        {/* Contact Form */}
        <div className="w-1/2 bg-gray-900 p-4 rounded-lg mr-4">
          <h2 className="text-xl mb-4"><span style={{ color: color }}>Contact</span> Me</h2>
          <form  onSubmit={handleSubmit}>
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
                className="w-full p-2 bg-gray-700 text-white rounded"
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
                className="w-full p-2 bg-gray-700 text-white rounded"
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
                className="w-full p-2 bg-gray-700 text-white rounded"
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
                className="w-full p-2 bg-gray-700 text-white rounded"
                rows="4"
              ></textarea>
            </div>
            <button
              style={{ backgroundColor: color }}
              type="submit"
              className="flex items-center bg-blue-600 p-2 rounded"
            >
              Send Message
              <FaTelegram className="text-xl ml-2" />
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="w-1/2 bg-gray-900 rounded-lg">
          <h2 className="text-xl p-4"><span style={{ color: color }}>My</span> Location</h2>
          <div className="h-96">
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

      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
}

export default Contact;
