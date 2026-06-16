/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./About.css"
import "./DarkAbout.css"
import imgProfile from "../../assets/profile-img.png"

function About() {
  return (
    <section>
      <div className="container text-center py-md-5 py-3 page-title">
        <h3>About Me</h3>
      </div>

      <div className="container">
        <div className="row profile-wrapper">
          <div className="col-lg-4 profile-pic-container ">
            <img src={imgProfile} className='img-fluid profile-pic' alt="Profile" data-aos="fade-right" data-aos-duration="1500" />
          </div>

          <div className="col-lg-8" data-aos="fade-left" data-aos-duration="1500">
            <h4>Full Stack Developer</h4>
            <p className='aboutme-para'>
              I'm a passionate Full Stack Developer and Software Engineering undergraduate based in Sri Lanka, specializing in the MERN stack, React Native, and Next.js. With professional experience in the e-commerce sector, I bring a unique blend of technical expertise and commercial awareness to my projects. Whether I'm building a distributed POS system, developing a responsive tourism platform, or crafting mobile applications, I thrive on tackling complex challenges with clean, scalable logic. I believe great software is born from teamwork, continuous learning, and innovation. My goal is to deliver impactful, user-centric digital solutions that drive real-world results.
            </p>
          </div>
        </div>
      </div>

      { /* Programming Skill Section */ }
      <div className="skill-section-container">
        <div className="container text-center py-5 page-title">
          <h3>Programming Skills</h3>
        </div>

        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-md-6 skill-list">
              <div className="skill">
                <span className="skill-name">
                  <span>React.js & Next.js</span>
                  <i className="val">85%</i>
                </span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" data-aos="fade-right" data-aos-duration="1000" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className="skill">
                <span className="skill-name">
                  <span>React Native</span>
                  <i className="val">75%</i>
                </span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" data-aos="fade-right" data-aos-duration="1000" style={{ width: '75%' }}></div>
                </div>
              </div>

              <div className="skill">
                <span className="skill-name">
                  <span>HTML & CSS</span>
                  <i className="val">95%</i>
                </span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" data-aos="fade-right" data-aos-duration="1000" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-md-6 skill-list">
              <div className="skill">
                <span className="skill-name">
                  <span>Node.js & Express.js</span>
                  <i className="val">80%</i>
                </span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" data-aos="fade-right" data-aos-duration="1000" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="skill">
                <span className="skill-name">
                  <span>MongoDB & MySQL</span>
                  <i className="val">75%</i>
                </span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" data-aos="fade-right" data-aos-duration="1000" style={{ width: '75%' }}></div>
                </div>
              </div>

              <div className="skill">
                <span className="skill-name">
                  <span>.NET C#</span>
                  <i className="val">60%</i>
                </span>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" data-aos="fade-right" data-aos-duration="1000" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      { /* Soft Skills Section */ }
      <div className="skill-section-container mb-5">
        <div className="container text-center py-5 page-title">
          <h3>Soft Skills</h3>
        </div>

        <div className="container d-flex justify-content-center">
          <div className="row justify-content-center w-100" data-aos="fade-up" data-aos-duration="1500">
            <div className="col-md-4 col-sm-5 col-6 skill-list d-flex flex-column justify-content-center align-items-center">
              <div>
                <div className="skill">
                  <span className="skill-name">
                    <span className='correct-mark'>&#10004; </span>
                    <span className='soft-skill-name'>Problem-Solving</span>
                  </span>
                </div>
                <div className="skill">
                  <span className="skill-name">
                    <span className='correct-mark'>&#10004; </span>
                    <span className='soft-skill-name'>Client Communication</span>
                  </span>
                </div>
                <div className="skill">
                  <span className="skill-name">
                    <span className='correct-mark'>&#10004; </span>
                    <span className='soft-skill-name'>Adaptability</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-5 col-6 skill-list d-flex flex-column justify-content-center align-items-center">
              <div>
                <div className="skill">
                  <span className="skill-name">
                    <span className='correct-mark'>&#10004; </span>
                    <span className='soft-skill-name'>Project Management</span>
                  </span>
                </div>
                <div className="skill">
                  <span className="skill-name">
                    <span className='correct-mark'>&#10004; </span>
                    <span className='soft-skill-name'>Collaboration</span>
                  </span>
                </div>
                <div className="skill">
                  <span className="skill-name">
                    <span className='correct-mark'>&#10004; </span>
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