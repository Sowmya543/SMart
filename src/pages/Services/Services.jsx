import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

import "./Services.css"
import Points from './Points/Points'
import Why from './Why/Why'

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className='service-container'>
        <h2>🤝 Our Services</h2>
        <Points />
        <Why />
      </div>
      <Footer />
    </div>
  )
}

export default Services
