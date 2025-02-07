/* eslint-disable no-unused-vars */
import React from 'react'
import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className='notfound-container container  d-flex flex-column justify-content-center align-items-center '>
        <h1 className='mb-md-4 mb-5'>404 Page Not Found</h1>

        <Link to="/" className="btn btn-primary go-home-btn">Goto Home</Link>
        </section>
  )
}

export default NotFound