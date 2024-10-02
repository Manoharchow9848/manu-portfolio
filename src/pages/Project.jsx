import React, { useState, useEffect , useContext} from 'react';
import { ColorContext } from '../context/ColorContext';
import { FaLongArrowAltDown } from 'react-icons/fa'; // Import an arrow icon that is half bent

/******  4b204451-82d4-4951-ac37-386519e54bb6  *******/

const Project = () => {
  const { color } = useContext(ColorContext);

  const projects = [
    {
      title: 'ChatterZone',
      images: [
        'https://firebasestorage.googleapis.com/v0/b/myblogapp-27468.appspot.com/o/p11.jpg?alt=media&token=5bc0ebc9-ee2b-45dc-9893-29ed61041954',
        'https://firebasestorage.googleapis.com/v0/b/myblogapp-27468.appspot.com/o/p12.jpg?alt=media&token=94038d01-dd39-4e49-8b3d-178b7299b5a2',
        'https://firebasestorage.googleapis.com/v0/b/myblogapp-27468.appspot.com/o/p13.jpg?alt=media&token=8aa22e96-c211-46f1-8a61-3c4a7ffc002b',
      ],
      link: 'https://chatterzone-mc.onrender.com',
    },
    {
      title: 'GitFilter',
      images: [
        'https://firebasestorage.googleapis.com/v0/b/myblogapp-27468.appspot.com/o/p21.jpg?alt=media&token=94ebaa38-3b0d-4c14-906a-e6aad9fc4073',
        'https://firebasestorage.googleapis.com/v0/b/myblogapp-27468.appspot.com/o/p22.jpg?alt=media&token=5ca8ab8f-2977-432a-99f8-b5d7805c904c',
        'https://firebasestorage.googleapis.com/v0/b/myblogapp-27468.appspot.com/o/p22.jpg?alt=media&token=5ca8ab8f-2977-432a-99f8-b5d7805c904c',
      ],
      link: 'https://github-repo-w1mz.onrender.com',
    },
    {
      title: 'KMCBLOG',
      images: [
        'https://firebasestorage.googleapis.com/v0/b/myblogapp-27468.appspot.com/o/p31.jpg?alt=media&token=24817244-6889-4e77-afc0-0864dc66024d',
        'https://firebasestorage.googleapis.com/v0/b/myblogapp-27468.appspot.com/o/p32.jpg?alt=media&token=db044ff3-e0c8-4e7f-a7bf-db5dfbc57965',
        'https://firebasestorage.googleapis.com/v0/b/myblogapp-27468.appspot.com/o/p33.jpg?alt=media&token=f7b9e3a5-b364-460a-9af3-67f67802da5e',
      ],
      link: 'https://myblogapp-8l4i.onrender.com',
    },
    {
      title: 'E-Commerce',
      images: [
        'https://firebasestorage.googleapis.com/v0/b/myblogapp-27468.appspot.com/o/p41.jpg?alt=media&token=ded3d7c1-1c06-414c-92a1-7151d0ecced0',
        'https://firebasestorage.googleapis.com/v0/b/myblogapp-27468.appspot.com/o/p42.jpg?alt=media&token=ade35d2b-2453-4c24-8183-ff2bbc621748',
        'https://firebasestorage.googleapis.com/v0/b/myblogapp-27468.appspot.com/o/p43.jpg?alt=media&token=3352a2d9-7007-48b3-a90c-96550caff13d',
      ],
      link: 'https://kmart-ahqr.onrender.com/',
    },
    {
      title: 'Leader With A Cader',
      images: [
        'https://firebasestorage.googleapis.com/v0/b/myblogapp-27468.appspot.com/o/p51.jpg?alt=media&token=61f75e07-d82e-4a0e-a77d-edd6d95d182d',
        'https://firebasestorage.googleapis.com/v0/b/myblogapp-27468.appspot.com/o/p52.jpg?alt=media&token=05d62070-6e0a-4188-98ff-9471d21038b9',
        'https://firebasestorage.googleapis.com/v0/b/myblogapp-27468.appspot.com/o/p53.jpg?alt=media&token=8b565d83-b54b-4774-be6d-7df3e537d747',
      ],
      link: 'https://leaderwithcader.onrender.com',
    },
    {
      title: 'Python Chat App',
      images: [
        'https://firebasestorage.googleapis.com/v0/b/myblogapp-27468.appspot.com/o/p61.jpg?alt=media&token=696f2c2f-11b1-48a7-af07-ebf7d0f1daa4',
        'https://firebasestorage.googleapis.com/v0/b/myblogapp-27468.appspot.com/o/p62.jpg?alt=media&token=bbc52f17-bda6-42bd-8425-37850df677f0',
        'https://firebasestorage.googleapis.com/v0/b/myblogapp-27468.appspot.com/o/p63.jpg?alt=media&token=50009c2e-2601-4dfa-b519-e64448625f84',
      ],
      link: 'https://python-chat-1pte.onrender.com',
    },
    
    // Add more projects as needed
  ];

  return (
    <div className="h-full w-full ml-80 mt-28 mr-5 justify-center">
      <h1 className="text-3xl mb-8 text-white"><span style={{ color: `${color}` }}  >My</span> Projects <span style={{ color: `${color}` }}>{'<6 />'}</span>
      </h1>
      <div className="grid grid-cols-3 gap-4 " style={{ width: "1150px" }}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};


const ProjectCard = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const { color } = useContext(ColorContext);

  // Cycle through images every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 2000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [project.images.length]);

  return (
    <div className="relative group bg-gray-800 p-4 rounded-lg overflow-hidden">
      <img
        src={project.images[currentImage]}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-75 group-hover:translate-x-75 group-hover:translate-y-75" // No translation to make the scaling look like it's decreasing from bottom right
      />
      <h2 className="absolute bottom-4 right-4 text-xl text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ color: color }}>
        {project.title}
      </h2>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-2 right-2 p-2 rounded-full bg-blue-600 text-white flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-45"
      >
        <FaLongArrowAltDown />
      </a>
    </div>
  );
};



export default Project;
