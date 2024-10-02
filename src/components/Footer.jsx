import React from 'react';

const Container = () => {
  return (
    <div className=" min-h-screen">
      {/* Content goes here */}
      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-52 right-52 overflow-hidden  bg-opacity-50 text-white text-center">
      <p className="text-lg">Developed by KMC</p>
    </footer>
  );
};

export default Container;