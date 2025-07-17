import React from 'react'

import "./Office.css"
import img from "../../../../assets/office.jpg"
import Framer from '../../../../components/Framer/Framer'

const Office = () => {
  return (
    <div className='office'>
      {/* <img src={img} alt="" /> */}
      <Framer src={img} alt="" direction='left'/>
      <div className='office-box'>
        <h1>Our Office</h1>
        <p>5th Floor, Sunrise Towers,</p>
        <p>HiTech City, Hyderabad, Telangana – 500081</p>
      </div>
      <p id='follow'>Follow us on social media for latest offers and updates: 📘 Facebook | 📸 Instagram | 🐦 Twitter | ▶️ YouTube</p>
    </div>
  )
}

export default Office
