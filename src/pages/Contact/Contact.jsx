/* eslint-disable no-unused-vars */
import React from 'react'
import './Contact.css'
function Contact() {
    return (
        <section className='contact section container'>
            <div className=" text-center py-md-5 py-3 page-title">
                <h3>Contact Me</h3>
            </div>

            <div className="contact-container  mb-4">
                <div className="row justify-content-center">

                    <div className="col-lg-12 details-wrapper " data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom" data-aos-duration="1500">

                        <div className="details-container d-flex mb-4 ">
                            <div className="icon-container">
                                <i className="bi bi-geo-alt"></i>
                            </div>

                            <div className="details">
                                <h5>Address</h5>
                                <p>No. 180 1/2, Highlevel Road, Nugegoda.</p>
                            </div>
                        </div>



                        <div className="details-container d-flex mb-4 ">
                            <div className="icon-container">
                                <i className="bi bi-telephone"></i>
                            </div>

                            <div className="details">
                                <h5>Phone</h5>
                                <p>+94 76 710 5935</p>
                            </div>
                        </div>

                        <div className="details-container d-flex mb-4 ">
                            <div className="icon-container">
                                <i className="bi bi-envelope"></i>
                            </div>

                            <div className="details">
                                <h5>Email</h5>
                                <p>ranganapradeepgunawardhana@gmail.com</p>
                            </div>
                        </div>





                    </div>
                </div>


            </div>







        </section>
    )
}

export default Contact