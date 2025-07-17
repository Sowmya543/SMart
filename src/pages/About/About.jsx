import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

import "./About.css"
import Intro from './components/Intro/Intro'
import Story from './components/Story/Story'
import Vision from './components/Vision/Vision'

const About = () => {
  return (
    <div className='about-page'>
      <Navbar />
      <div className='about-container'>
        <h2>🛍️" SMart: Where shopping meets smart living. "</h2>
        <Intro />
        <Story />
        <Vision />
      </div>
      <Footer />
    </div>
  )
}

export default About
