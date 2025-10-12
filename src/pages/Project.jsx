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
    {
      title:'Medi-Track-App (Android) React native',
      images: [
        'https://firebasestorage.googleapis.com/v0/b/politicsapp-ffb44.appspot.com/o/5.jpg?alt=media&token=467219ca-beb9-4b1c-aa62-d6a44a164579',
        'https://firebasestorage.googleapis.com/v0/b/politicsapp-ffb44.appspot.com/o/1.jpg?alt=media&token=f953ebac-5760-4d98-ba6c-63b099b0ad3d',
        'https://firebasestorage.googleapis.com/v0/b/politicsapp-ffb44.appspot.com/o/2.jpg?alt=media&token=480a0ca6-cebb-44f6-8495-b354b23a9837',
        'https://firebasestorage.googleapis.com/v0/b/politicsapp-ffb44.appspot.com/o/3.jpg?alt=media&token=27c6aa76-9ac5-45cb-bd3c-94a1b1174ad1',
        'https://firebasestorage.googleapis.com/v0/b/politicsapp-ffb44.appspot.com/o/4.jpg?alt=media&token=f053a438-cdc9-47fa-877b-128e636484a0',


      ],
      link:'https://expo.dev/artifacts/eas/bQKvH5fVtyJ91MbZsxLx6L.apk'
    },{
      title:'Spotify Clone',
      images: [
        'https://firebasestorage.googleapis.com/v0/b/politicsapp-ffb44.appspot.com/o/s1.png?alt=media&token=2ceadfd5-e88e-42c2-98c2-adfba01372c3',
        'https://firebasestorage.googleapis.com/v0/b/politicsapp-ffb44.appspot.com/o/s2.png?alt=media&token=5d25c757-1161-4432-b1c2-90748fa8b872',
        'https://firebasestorage.googleapis.com/v0/b/politicsapp-ffb44.appspot.com/o/s3.png?alt=media&token=a3b1aa79-6bed-4503-849b-1d8c85fd3a03',
        'https://firebasestorage.googleapis.com/v0/b/politicsapp-ffb44.appspot.com/o/s4.png?alt=media&token=fc84d897-617d-40fc-acdf-5256c34170ab',
        'https://firebasestorage.googleapis.com/v0/b/politicsapp-ffb44.appspot.com/o/s5.png?alt=media&token=f680ed29-635b-47f9-b0fc-5a98acdbe932',


      ],
      link:'https://spotify-mc.onrender.com/'
    },{
      title:'Review Hive - (Store Rating Platform)',
      images: [
        'https://firebasestorage.googleapis.com/v0/b/politicsapp-ffb44.appspot.com/o/r1.png?alt=media&token=30348f0f-7d7e-4bad-8f49-37647c5e0e1b',
        'https://firebasestorage.googleapis.com/v0/b/politicsapp-ffb44.appspot.com/o/r2.png?alt=media&token=d8814152-ddc3-4412-ac7e-0caee78a3fa9',
        'https://firebasestorage.googleapis.com/v0/b/politicsapp-ffb44.appspot.com/o/r3.png?alt=media&token=8152e2ca-101b-4786-99a0-6ee803ebe5a0',
        'https://firebasestorage.googleapis.com/v0/b/politicsapp-ffb44.appspot.com/o/r4.png?alt=media&token=c8ed47f7-d245-44c5-9e71-ddc03c138f0d',
        'https://firebasestorage.googleapis.com/v0/b/politicsapp-ffb44.appspot.com/o/r5.png?alt=media&token=b8e113aa-6a03-410c-8e2d-b80c92cfdde3',
        'https://firebasestorage.googleapis.com/v0/b/politicsapp-ffb44.appspot.com/o/r6.png?alt=media&token=ff502914-fdbd-4435-87c2-8fcc4b3bfc87'


      ],
      link:'https://spotify-mc.onrender.com/'
    }
    

    
   
  ];

   return (
    <div className="min-h-screen w-full flex flex-col md:flex-row mt-28 px-4 md:px-8">
      {/* Optional sidebar space */}
      <div className="hidden md:block md:w-80"></div>

      {/* Main content */}
      <div className="flex-1">
        <h1 className="text-3xl mb-8 text-white text-center md:text-left">
          <span style={{ color }}>My</span> Projects{' '}
          <span style={{ color }}>{`<${projects.length}/>`}</span>
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};


const ProjectCard = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const { color } = useContext(ColorContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div className="relative group mb-4 bg-gray-800 p-2 sm:p-4 rounded-lg overflow-hidden">
      <img
        src={project.images[currentImage]}
        alt={project.title}
        className="w-full h-48 sm:h-60 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <h2
        className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-lg sm:text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ color }}
      >
        {project.title}
      </h2>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-2 right-2 p-2 rounded-full bg-blue-600 text-white flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <FaLongArrowAltDown />
      </a>
    </div>
  );
};

export default Project;
