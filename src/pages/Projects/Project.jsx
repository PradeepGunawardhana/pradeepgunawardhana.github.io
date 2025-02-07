/* eslint-disable no-unused-vars */
import React from 'react'
import './Project.css'

function Project() {
    return (

        <section className='project-section '>


            <div className="container text-center py-sm-5 p-3  page-title">
                <h3>My Projects</h3>
                <p></p>
            </div>



            <div className="container">

                <div className="row" data-aos="fade-up" data-aos-duration="1500" >

                    <div className="col-lg-4 project-card-wrapper mb-sm-5 mb-4">

                        <div className="project-card p-4  ">

                            <h5>Rotaract Club Website for Saegis Campus</h5>
                            <p>I developed a MERN stack website for the Rotaract Club of Saegis Campus, which includes an Admin Dashboard, project management features, and user-friendly interfaces. I ensured scalability and implemented a responsive design using React and Styled-Components to deliver an optimal user experience.</p>

                            <div className="lan-section">
                                <p>Languages :
                                    <span> React Js </span>
                                    <span> Express Js </span>
                                    <span> Mongo DB </span>

                                </p>
                            </div>

                            <a href="https://github.com/PradeepGunawardhana/RacSaegis.git" >
                            <button type="button" className="btn btn-outline-dark">
                                <i className="bi bi-github "></i> Repo</button></a>
                        </div>
                    </div>


                    <div className="col-lg-4 project-card-wrapper mb-sm-5 mb-4">

                        <div className="project-card p-4">

                            <h5>Movie Collection Website</h5>
                            <p>I developed a Movie Database app using React.js, integrating the TMDb API to display detailed movie information. I implemented search, filtering, and movie detail features to ensure a seamless and intuitive user experience</p>

                            <div className="lan-section">
                                <p>Languages :
                                    <span> React Js</span>
                                    <span> API  </span>
                                    <span> html </span>
                                    <span> Css </span>
                                </p>
                            </div>
                           
                            <a href="https://github.com/PradeepGunawardhana/MovieDatabse.git">
                            <button type="button" className="btn btn-outline-dark">
                                <i className="bi bi-github "></i> Repo</button></a>
                        </div>
                    </div>

                    <div className="col-lg-4 project-card-wrapper mb-sm-5 mb-4">

                        <div className="project-card p-4">

                            <h5>Weather Application</h5>
                            <p>I developed a Weather web application using React.js, integrating the OpenWeather API to fetch and display real-time weather data. The application features location search and detailed weather information, designed to provide an intuitive and seamless user experience</p>

                            <div className="lan-section">
                                <p>Languages :
                                    <span> React Js</span>
                                    <span> API  </span>
                                    <span> html </span>
                                    <span> Css </span>
                                </p>
                            </div>

                             
                            <a href="https://github.com/PradeepGunawardhana/Weather-App.git">
                            <button type="button" className="btn btn-outline-dark">
                                <i className="bi bi-github "></i> Repo</button></a>
                        </div>
                    </div>

                </div>


                <div className="row mt-md-1 mb-md-5 mt-1 mb-5" data-aos="fade-up" data-aos-duration="1500">

                    <div className="col-lg-4  project-card-wrapper mb-sm-5 mb-4">

                        <div className="project-card p-3">

                            <h5>Carpenter Online System</h5>
                            <p>I developed an online platform to connect carpenters with clients, featuring job postings, service booking, and user account management. The platform was built with PHP and MySQL for the backend and a responsive, user-friendly interface using HTML, CSS, and JavaScript</p>

                            <div className="lan-section">
                                <p>Languages :
                                    <span> PHP </span>
                                    <span> html </span>
                                    <span> js </span>
                                    <span> css </span>
                                    <span> mysql </span>
                                </p>
                            </div>

                            <a href="https://github.com/PradeepGunawardhana/Carpenter-Online-System.git">
                            <button type="button" className="btn btn-outline-dark">
                                <i className="bi bi-github "></i> Repo</button></a>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 project-card-wrapper mb-sm-5 mb-1">

                        <div className="project-card p-3">

                            <h5>Sv Fashion E-Commerce Website</h5>
                            <p>I designed and developed a responsive e-commerce website for SV Fashion, featuring user authentication and session management. The backend was implemented using PHP, with CRUD operations to efficiently manage product inventory</p>

                            <div className="lan-section">
                                <p>Languages :
                                <span> PHP </span>
                                    <span> html </span>
                                    <span> js </span>
                                    <span> css </span>
                                    <span> mysql </span>
                                </p>
                            </div>

                            <a href="https://github.com/PradeepGunawardhana/Carpenter-Online-System.git">
                            <button type="button" className="btn btn-outline-dark">
                                <i className="bi bi-github "></i> Repo</button></a>
                        </div>
                    </div>

                


                </div>






            </div>

        </section>



    )
}

export default Project