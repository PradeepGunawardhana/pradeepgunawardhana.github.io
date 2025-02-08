/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./About.css"
import "./DarkAbout.css"
import imgProfile from "../../assets/profile-img.png"

function About() {
  return (

    <section >


      <div className="container text-center py-md-5 py-3 page-title">
        <h3>About Me</h3>
        
      </div>

      <div className="container">
        <div className="row profile-wrapper">
          <div className="col-lg-4 profile-pic-container ">
            <img src={imgProfile} className='img-fluid profile-pic' data-aos="fade-right" data-aos-duration="1500" />
          </div>


          <div className="col-lg-8" data-aos="fade-left" data-aos-duration="1500">
            <h4>Fullstack Developer</h4>
            <p className='aboutme-para'>I'm a passionate Software Engineering undergraduate who loves turning ideas into seamless, user-friendly digital experiences. Whether it's crafting a sleek front-end or optimizing the back-end, I enjoy building solutions that are both efficient and scalable. Problem-solving is my thing—I thrive on tackling challenges with creativity and logic. I believe great projects come from teamwork, innovation, and continuous learning, so I'm always eager to explore new technologies and improve my skills. My goal? To create impactful solutions that not only work flawlessly but also make a real difference in the ever-evolving tech world. </p>
          </div>
        </div>
      </div>







      {                               /* Programming Skill Section */}


      <div className="skill-section-container">

        <div className="container text-center py-5 page-title">
          <h3>Programming Skills</h3>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, maiores.</p> */}
        </div>

        <div className="container">

          <div className="row">

            <div className="col-6 skill-list">

              <div className="skill">
                <span className="skill-name">
                  <span>React js</span>
                  <i className="val">60%</i>
                </span>
                <div className="progress">
                  <div
                    className="progress-bar "
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"

                    data-aos="fade-right"
                    data-aos-duration="1000"
                    style={{ width: '60%' }}
                  >
                  </div>
                </div>
              </div>


              <div className="skill">
                <span className="skill-name">
                  <span>Express js</span>
                  <i className="val">50%</i>
                </span>
                <div className="progress">

                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"


                    data-aos="fade-right"
                    data-aos-duration="1000"

                    style={{ width: '50%' }}
                  >
                  </div>
                </div>
              </div>


              <div className="skill">
                <span className="skill-name">
                  <span>HTML</span>
                  <i className="val">100%</i>
                </span>
                <div className="progress">

                  <div
                    className="progress-bar "
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"


                    data-aos="fade-right"
                    data-aos-duration="1000"
                    style={{ width: '100%' }}
                  >
                  </div>
                </div>
              </div>

            </div>

            <div className="col-6 skill-list">

              <div className="skill">
                <span className="skill-name">
                  <span>Mongo DB</span>
                  <i className="val">50%</i>
                </span>
                <div className="progress">

                  <div
                    className="progress-bar "
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"


                    data-aos="fade-right"
                    data-aos-duration="1000"
                    style={{ width: '50%' }}
                  >
                  </div>
                </div>
              </div>
              <div className="skill">
                <span className="skill-name">
                  <span>c#</span>
                  <i className="val">50%</i>
                </span>
                <div className="progress">

                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"


                    data-aos="fade-right"
                    data-aos-duration="1000"
                    style={{ width: '50%' }}
                  >
                  </div>
                </div>
              </div>
              <div className="skill">
                <span className="skill-name">
                  <span>JAVA</span>
                  <i className="val">50%</i>
                </span>
                <div className="progress">

                  <div
                    className="progress-bar "
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"


                    data-aos="fade-right"
                    data-aos-duration="1000"
                    style={{ width: '50%' }}
                  >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {                                   /* Soft Skills  */}

      <div className="skill-section-container">
        <div className="container text-center py-5 page-title">
          <h3>Soft Skills</h3>
          <p></p>
        </div>

        <div className="container d-flex justify-content-center ">

          <div className="row justify-content-center w-100" data-aos="fade-up" data-aos-duration="1500">

            <div className="col-md-4 col-sm-5 col-6  skill-list d-flex flex-column justify-content-center align-items-center">
              <div>

              

              <div className="skill">
                <span className="skill-name">

                  <span className='correct-mark'>&#10004;  </span>
                  <span className='soft-skill-name'>Leadership</span>



                </span>

              </div>
              <div className="skill ">
                <span className="skill-name">

                  <span className='correct-mark'>&#10004;  </span>
                  <span className='soft-skill-name'>Creativity</span>



                </span>

              </div>
              <div className="skill ">
                <span className="skill-name">

                  <span className='correct-mark'>&#10004;  </span>
                  <span className='soft-skill-name'>Problem-Solving</span>



                </span>

              </div>

              </div>





            </div>

            <div className="col-md-4 col-sm-5 col-6 skill-list d-flex flex-column justify-content-center align-items-center">
              <div>

         
              <div className="skill  ">
                <span className="skill-name">

                  <span className='correct-mark'>&#10004;  </span>
                  <span className='soft-skill-name'>Adaptability</span>



                </span>

              </div>
              <div className="skill  ">
                <span className="skill-name">

                  <span className='correct-mark'>&#10004;  </span>
                  <span className='soft-skill-name'>Collaboration</span>



                </span>

              </div>
              <div className="skill  ">
                <span className="skill-name">

                  <span className='correct-mark'>&#10004;  </span>
                  <span className='soft-skill-name'>Continuous Learning</span>



                </span>

              </div>
              </div>



            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About  