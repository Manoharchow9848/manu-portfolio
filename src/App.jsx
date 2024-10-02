import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import  { useContext } from 'react';
import { ColorContext } from './context/ColorContext';
import './App.css'
import ColorPicker from './components/ColorPicker';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import Project from './pages/Project';



import FooterCom from './components/Footer';
function App() {
  const [loading, setLoading] = useState(false);

  const { color } = useContext(ColorContext)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
  <div className='bg-custom flex h-screen '>
    

    {
      loading ? (
        <div className='flex flex-col  items-center justify-center w-full h-full '>
          <span className="loader"></span>
          <p className='mt-4 text-2xl'><b>Loading Manu's portfolio</b></p>
        </div>
      ) : (
        <div >
          <Sidebar />
         <ColorPicker />
        

         <Routes>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='achievements' element={<Achievements />} />
            <Route path='contact' element={<Contact />} />
            <Route path='projects' element={<Project />} />
          </Routes>
         
           </div>
      )
    }
  </div>
  )
}

export default App
