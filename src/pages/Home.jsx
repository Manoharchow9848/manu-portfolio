// src/pages/Home.jsx
import { useContext } from 'react';
import { FiDownload } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Socials from '../components/Socials';
import Photo from '../components/Photo';
import NameSwitcher from '../components/NameSwitcher';
import { ColorContext } from '../context/ColorContext';

const Home = () => {
  const { color } = useContext(ColorContext);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center px-6 md:px-12 lg:ml-72">
      <section className="flex flex-col xl:flex-row items-center justify-between py-16 xl:py-24 gap-10">
        {/* text */}
        <div className="text-center xl:text-left flex flex-col items-center xl:items-start">
          <span className="text-lg md:text-xl text-white">Software Developer</span>
          <h1 className="mb-6 text-2xl md:text-3xl font-semibold text-white leading-snug">
            Hi There... 🤞 <br />
            <span className="uppercase">I'm</span>{' '}
            <span
              style={{ color }}
              className="text-cyan-200 text-2xl md:text-4xl"
            >
              Manohar Chowdary
            </span>
          </h1>

          {/* NameSwitcher (typed text area) */}
          <div style={{ minHeight: '50px' }} className="flex items-center">
            <NameSwitcher />
          </div>

          <p className="max-w-[450px] mb-9 text-white text-sm md:text-base mt-3 px-2 md:px-0">
            A passionate Computer Science and Engineering student with a strong
            interest in Web Development. I am always eager to learn and explore
            new technologies.
          </p>

          {/* buttons and socials */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link
              to="https://drive.google.com/file/d/13hoZgcfJf2Zo7uRvmLgpVJ_D7Q7_IWB2/edit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-green-200 border-4 hover:border-white border-green-200 rounded-full uppercase flex items-center gap-2 px-5 py-2 transition-all duration-300 hover:scale-105">
                <span>Download CV</span>
                <FiDownload className="text-lg" />
              </button>
            </Link>

            <div className="mt-2 sm:mt-0">
              <Socials
                containerStyles="flex gap-3 justify-center"
                iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base bg-green-500 hover:bg-pink-500 hover:text-primary transition-all duration-500 hover:scale-125"
              />
            </div>
          </div>
        </div>

        {/* photo */}
        <div className="flex justify-center xl:justify-end w-full md:w-[60%] xl:w-[40%]">
          <Photo />
        </div>
      </section>
    </div>
  );
};

export default Home;
