
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
import  { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {

    AOS.init();
  },[])

  return (

    <Router>
      <Navbar />
      <Routes>
     
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

    </Router>
  )
}

export default App
