/* eslint-disable no-unused-vars */

import './App.css'
import Footer from './component/Footer/Footer'
import Home from './pages/Home/Home'
import Navbar from './component/Navbar/Navbar'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About/About';
import Project from './pages/Projects/Project';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import  { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css'


function App() {

  const  [isdark,setisdark] = useState(true);
  
  useEffect(() => {

    AOS.init();

    if( isdark ){
      document.body.classList.add('dark-mode');
    }
    else{
      document.body.classList.remove('dark-mode')
      
    }



  },[isdark])


  return (

    <Router>
      <Navbar isdark={isdark} />
      <Routes>
     
        <Route path="/about" element={<About   />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer isdark={isdark} />

    </Router>
  )
}

export default App
