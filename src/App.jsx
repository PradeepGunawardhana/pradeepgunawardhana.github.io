/* eslint-disable no-empty */
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


  const getusertheme = () => {

    const storedUserTheme = localStorage.getItem('isDark');

    if(storedUserTheme !== null){

      return JSON.parse(storedUserTheme);  //check isdark in local storage
      

    }else return window.matchMedia("(prefers-color-scheme: dark)").matches;
    
  }


  const  [isdark,setisdark] = useState(getusertheme);


  

  useEffect(() => {

    AOS.init();
    console.log("is dark in reload page " + isdark);
   

    if( isdark){
      document.body.classList.add('dark-mode');

      localStorage.setItem("isDark",true);

    }
    else{
      document.body.classList.remove('dark-mode')
      localStorage.setItem("isDark",false);

    }



  },[isdark])


  return (

    <Router>
      <Navbar isdark={isdark} setisdark={setisdark} />
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
