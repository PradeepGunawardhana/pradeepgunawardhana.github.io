/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Navbar.css'
import './DarkNavbar.css'
import { Link, NavLink } from "react-router-dom";



function Navbar({isdark}) {

  // const  [isdark,setisdark] = useState(true);


  return (
    <nav className= { isdark? "navbar navbar-expand-lg navbar-dark bg-dark " : "navbar navbar-expand-lg"  }>

      <div className="container-fluid d-flex align-items-center justify-content-between">
        
        <a className=  "navbar-brand cstm-brandName  " href="#">PRADEEP</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse p-3 " id="navbarNavDropdown">

          <ul className="navbar-nav mx-auto  ">
            <li className="nav-item px-lg-3">

              <NavLink to="/" className="nav-link">Home</NavLink>

            </li>
            <li className="nav-item px-lg-3">

              <NavLink to="/projects" className="nav-link">Projects</NavLink>
            </li>
            <li className="nav-item px-lg-3">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item px-lg-3">
              <NavLink to="/Contact" className="nav-link">Contact</NavLink>
            </li>
          </ul>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/pradeep-gunawardhana-301024256" title='linkedin' target='_blank'>
              <i className="bi bi-linkedin "></i>
            </a>
            <a href="https://github.com/PradeepGunawardhana" title='github' target='_blank'>
              <i className="bi bi-github "></i>
            </a>
            <a href="https://www.facebook.com/share/1CwXBF6AaS/?mibextid=qi2Omg" title='facebook' target='_blank'>
              <i className="bi bi-facebook "></i>
            </a>

          </div>

        </div>

      </div>
    </nav>
  )
}

export default Navbar