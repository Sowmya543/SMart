import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

import "./contact.css"

import "./Contact.css"
import Support from './components/Support/Support'
import Feedback from './components/Feedback/Feedback'
import Office from './components/Office/Office'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className='contact-container'>
        <h2>📞 Contact Us – We’re Here to Help!</h2>
        <Feedback />
        <Support/>
        <Office />
      </div>
      <Footer />
    </div>
  )
}

export default Contact
