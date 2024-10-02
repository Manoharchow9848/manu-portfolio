import { ColorContext } from '../context/ColorContext';
import { useContext } from 'react';
import collegeImage1 from '../assets/collegeImage1.png';
import collegeImage2 from '../assets/collegeImage2.png';
import { FaLinkedin, FaGithub, FaTwitter, FaDownload, FaGitAlt } from 'react-icons/fa';
import Photo from '../components/Photo';
import { DiJava } from 'react-icons/di';
import { SiCplusplus } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { SiExpress } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import Container from '../components/Footer';
const About = () => {
  const { color } = useContext(ColorContext);
  const educationDetails = [
    {
      institution: "KL University",
      location: "Vijayawada, India",
      duration: "2021 - 2025",
      image: collegeImage1,
    },
    {
      institution: "Sasi Junior College",
      location: "Rajahmundry, India",
      duration: "2019 - 2021",
      image: collegeImage2,
    }
  ];
  
  const skills = [
    <DiJava key="java" />,
    <SiCplusplus key="cpp" />,
    <SiJavascript key="javascript" />,
    <FaNodeJs key="nodejs" />,
    <SiMongodb key="mongodb" />,
    <GrMysql key="mysql" />,
    <SiExpress key="express" />,
    <FaReact key="reactjs" />,
    <FaGitAlt key="git" />
  ];

  return (
    <div className=" h-full w-full ml-80 mt-28 mr-5 justify-center ">
      <section className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
        {/* Description and Social Icons */}
        <div className="md:w-1/2 space-y-4 mt-20">
          <h2 className="text-3xl font-bold" style={{ color: `${color}` }}>About Me</h2>
          <p className="text-lg text-white">
            Hi, I'm <span style={{ color: `${color}` }}>Manohar</span>, a passionate software developer specializing in full-stack development. I enjoy building web applications that are performant and scalable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Side */}
            <div className="space-y-2 text-white">
              <p><strong><span style={{ color: `${color}` }}>Age:</span></strong> 21</p>
              <p><strong><span style={{ color: `${color}` }}>Gender:</span></strong> Male</p>
              <p><strong><span style={{ color: `${color}` }}>Languages:</span></strong> English, Telugu</p>
              <p><strong><span style={{ color: `${color}` }}>Work:</span></strong> Student</p>
            </div>

            {/* Right Side */}
            <div className="space-y-2 text-white">
              <p><strong><span style={{ color: `${color}` }}>Freelance:</span></strong> Available</p>
              <p><strong><span style={{ color: `${color}` }}>Instagram:</span></strong> <a href="https://www.instagram.com/_manohar_chowdary_757/" className="text-blue-500">@_manohar_chowdary_757</a></p>
              <p><strong><span style={{ color: `${color}` }}>Email:</span></strong> <a href="mailto:manoharchowdary.757@gmail.com" className="text-blue-500">manoharchowdary.757@gmail.com</a></p>
              <p><strong><span style={{ color: `${color}` }}>Country:</span></strong> India</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <a style={{ color: `${color}` }} href="https://www.linkedin.com/in/manohar757/" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-600" />
            </a>
            <a style={{ color: `${color}` }} href="https://github.com/Manoharchow9848" target="_blank" rel="noreferrer">
              <FaGithub className="text-2xl hover:text-gray-700" />
            </a>
            <a style={{ color: `${color}` }} href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="text-2xl hover:text-blue-400" />
            </a>
            <a style={{ color: `${color}` }} href="#" download>
              <FaDownload className="text-2xl hover:text-green-600" />
            </a>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="flex">
          <Photo />
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-16 text-center relative z-0 overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold" style={{ color: `${color}` }}>Skills</h2>
          <h2 className="text-3xl font-bold" style={{ color: `${color}` }}>My Education</h2>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="flex mt-12  space-x-6 animate-scroll">
            {skills.map((icon) => (
              <div key={icon.key} className="text-6xl text-white opacity-50 hover:opacity-100">
                {icon}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto mt-20 relative z-0 overflow-hidden ">
        <h2 className="text-3xl mr-80 font-bold mb-14" style={{ color: `${color}` }}>My Education</h2>
        {/* Boxes Container */}
        <div className="flex space-x-4  justify-center w-full max-w-6xl mb-96"  >
          {educationDetails.map((college, index) => (
            <div
              key={index}
              className="relative flex-1 p-4 bg-black text-white text-center shadow-md"
              style={{
               
                borderColor: color,
                borderRadius: '40px 40px',
                borderWidth: '0px 2px 6px 2px', // Hide top border by reducing its size
                borderStyle: 'solid',
              }}
            >
              {/* College Photo (Aligned with Top Border Line) */}
              <div className="mr-96 absolute -top-8 left-1/2 transform -translate-x-1/2">
                <img
                  src={college.image}
                  alt={college.institution}
                  className="w-48 h-18 object-cover rounded-full border-4 mr-96"
                  style={{ borderColor: color }}
                />
              </div>

              {/* College Info */}
              <div className="mt-16"> {/* Adjust margin to accommodate photo */}
                <h3 className="text-lg font-bold text-gray-700">{college.institution}</h3>
                <p className="text-sm text-gray-600">{college.location}</p>
                <p className="text-sm text-gray-500">{college.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default About;



//<h2 className="text-3xl mr-80 font-bold mb-8" style={{ color: `${color}` }}>My Education</h2>