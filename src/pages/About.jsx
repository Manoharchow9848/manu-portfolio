import { ColorContext } from '../context/ColorContext';
import { useContext } from 'react';
import collegeImage1 from '../assets/collegeImage1.png';
import collegeImage2 from '../assets/collegeImage2.png';
import { FaLinkedin, FaGithub, FaTwitter, FaDownload, FaGitAlt } from 'react-icons/fa';
import Photo from '../components/Photo';
import { DiJava } from 'react-icons/di';
import { SiCplusplus, SiJavascript, SiMongodb, SiExpress } from 'react-icons/si';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';

const About = () => {
  const { color } = useContext(ColorContext);

  const educationDetails = [
    { institution: "KL University", location: "Vijayawada, India", duration: "2021 - 2025", image: collegeImage1 },
    { institution: "Sasi Junior College", location: "Rajahmundry, India", duration: "2019 - 2021", image: collegeImage2 }
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
    <div className="w-full min-h-screen text-white">
      {/* Wrapper for sidebar */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar space */}
        <div className="hidden md:block md:w-72"></div>

        {/* Main Content */}
        <div className="flex-1 px-4 md:px-10 py-20">

          {/* ===== About Me Section ===== */}
          <section className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold" style={{ color }}>About Me</h2>
              <p className="text-lg text-white break-words">
                Hi, I'm <span style={{ color }}>Manohar</span>, a passionate software developer specializing in full-stack development. I enjoy building web applications that are performant and scalable.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
                <div className="space-y-2">
                  <p><strong style={{ color }}>Age:</strong> 21</p>
                  <p><strong style={{ color }}>Gender:</strong> Male</p>
                  <p><strong style={{ color }}>Languages:</strong> English, Telugu</p>
                  <p><strong style={{ color }}>Work:</strong> Student</p>
                </div>
                <div className="space-y-2">
                  <p><strong style={{ color }}>Freelance:</strong> Available</p>
                  <p><strong style={{ color }}>Instagram:</strong> <a href="https://www.instagram.com/_manohar_chowdary_757/" className="text-blue-400 break-words">@_manohar_chowdary_757</a></p>
                  <p><strong style={{ color }}>Email:</strong> <a href="mailto:manoharchowdary.757@gmail.com" className="text-blue-400 break-words">manoharchowdary.757@gmail.com</a></p>
                  <p><strong style={{ color }}>Country:</strong> India</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                <a style={{ color }} href="https://www.linkedin.com/in/manohar757/" target="_blank" rel="noreferrer"><FaLinkedin className="text-2xl hover:text-blue-600" /></a>
                <a style={{ color }} href="https://github.com/Manoharchow9848" target="_blank" rel="noreferrer"><FaGithub className="text-2xl hover:text-gray-400" /></a>
                <a style={{ color }} href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter className="text-2xl hover:text-blue-400" /></a>
                <a style={{ color }} href="#" download><FaDownload className="text-2xl hover:text-green-500" /></a>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
              <Photo />
            </div>
          </section>

          {/* ===== Skills Section ===== */}
          <section className="mt-16 w-full max-w-6xl mx-auto overflow-hidden relative">
            <h2 className="text-3xl font-bold mb-10 text-center md:text-left" style={{ color }}>Skills</h2>
            <div className="flex animate-marquee whitespace-nowrap gap-6">
              {skills.concat(skills).map((icon, i) => (
                <div key={i} className="text-5xl md:text-6xl text-white opacity-60 hover:opacity-100 transition-all">
                  {icon}
                </div>
              ))}
            </div>
          </section>

          {/* ===== Education Section ===== */}
          <section className="mt-20 w-full  max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center md:text-left mb-10" style={{ color }}>My Education</h2>
            <div className="flex flex-wrap gap-6 justify-center">
              {educationDetails.map((college, index) => (
                <div
                  key={index}
                  className="relative bg-black text-white w-full sm:w-full md:w-full lg:w-[45%] xl:w-[30%] p-6 rounded-3xl shadow-lg border-2 box-border"
                  style={{ borderColor: color }}
                >
                  <div className="flex justify-center mt-16">
                    <img
                      src={college.image}
                      alt={college.institution}
                      className="w-32 h-32 object-cover rounded-full border-4"
                      style={{ borderColor: color }}
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-lg font-bold text-gray-200">{college.institution}</h3>
                    <p className="text-sm text-gray-400">{college.location}</p>
                    <p className="text-sm text-gray-500">{college.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* ===== Custom CSS for Skills Scroll ===== */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default About;
