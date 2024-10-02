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
    <>
      <div className="container h-0 w-full ml-80 mt-28 mr-5 justify-center">
        <section className='h-full'>
          <div className='container mx-auto h-full'>
            <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
              {/* text */}
              <div className='text-center xl:text-left'>
                <span className='text-xl text-white'>Software Developer</span>
                <h1 className='mb-6 text-white text-white font-semibold'>
                  Hi There... 🤞 <br /> 
                 <span className='uppercase'>I'm</span> <span style={{ color: `${color}` }} className='text-cyan-200 text-3xl'>Manohar Chowdary</span>
                </h1>
                <div style={{ minHeight: '50px' }} className="flex items-center"> {/* Fixed height container */}
                  <NameSwitcher />
                </div>
                <p className='max-w-[450px] mb-9 text-white'>
                  A passionate Computer Science and Engineering student with a strong interest in Web Development. I am always eager to learn and explore new technologies. 
                </p>
                
                {/* btn and socials */}
                <div className='flex flex-row items-center gap-8'>
                <button className='text-green-200 border-8 hover:border-white border-green-200 rounded-full uppercase flex items-center gap-2 px-4 py-2'>
  <Link to="https://drive.google.com/file/d/13hoZgcfJf2Zo7uRvmLgpVJ_D7Q7_IWB2/edit">
    <span >Download CV</span>
  </Link>
  <FiDownload className='text-lg' />
</button>

                  <div className='mb-4 xl:mb-0'>
                    <Socials 
                      containerStyles="flex gap-3" 
                      iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base bg-green-500 hover:bg-pink-500 hover:text-primary hover:transition-all hover:scale-125 duration-500"
                    />
                  </div>
                </div>
              </div>
              {/* photo */}
              <div className=''>
                <Photo  />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
