/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import imgHero from '../../assets/hero-bg.jpg';
import vidHero from '../../assets/hero-video.mp4';

import "./Home.css";
import {  NavLink } from "react-router-dom";


function Home() {
  return (


    <section className='home-section  '>
      <div className="hero-overlay"></div>  {/* Add this overlay div */}

      <video autoPlay loop muted playsInline  src={vidHero} type="video/mp4" className='hero-img'></video>


      <div className="home-hero container  text-center">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 " data-aos="fade-up"  data-aos-duration="1500">

            <h2 className='hero-title'>Pradeep Gunawardhana</h2>

            <p className='hero-sub-title'>I'm Undergraduate Software Engineer </p>
            {/* <a href="" className='btn-get-started'> About Me </a> */}
            <NavLink to="/about" className="btn-get-started">About Me</NavLink>

          </div>


        </div>

      </div>





    </section>






  )
}

export default Home