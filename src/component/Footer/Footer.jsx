/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./Footer.css"
import "./DarkFooter.css"

function Footer( {isdark} ) {



    return (
        <footer className=  {isdark? "footer light-background Dark-footer   " : ' footer light-background'} >
            <div className="container">
                <div className="copyright text-center ">
                    <p>© <span>Copyright</span> <strong className="px-1 sitename">Pradeep</strong> <span>All Rights Reserved<br /></span></p>
                </div>

                <div className="social-links d-flex justify-content-center">
                    <a href="https://www.linkedin.com/in/pradeep-gunawardhana-301024256" title='linkedin' target='_blank'>
                        <i className="bi bi-linkedin "></i>
                    </a>
                    <a href="https://github.com/PradeepGunawardhana"title='github' target='_blank'>
                        <i className="bi bi-github "></i>
                    </a>
                    <a href="https://www.facebook.com/share/1CwXBF6AaS/?mibextid=qi2Omg" title='facebook' target='_blank'>
                        <i className="bi bi-facebook "></i>
                    </a>
                    {/* <a href="#">
                        <i className="bi bi-instagram "></i>
                    </a> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer