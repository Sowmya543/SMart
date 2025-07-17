import React from 'react'

import f1 from "../../assets/f1.png"
import f2 from "../../assets/f2.png"
import f3 from "../../assets/f3.png"
import f4 from "../../assets/f4.png"

import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='parts'>
        <div className='part1'>
          <h1>SMart</h1>
          <p>Contact Us</p>
          <div className='contact'>
            <img src={f1} alt="" />
            <p>Whats App <span></span> +1 202-918-2132</p>
          </div>
          <div className='contact'>
            <img src={f2} alt="" />
            <p>Call Us <span></span> +1 202-918-2132</p>
          </div>
          <p>Download App</p>
          <img src={f3} id='f3' alt="" />
        </div>
        <div className='part2'>
          <div className='subs'>
            <h3>Most Popular Categories</h3>
            <div className='underline1'></div>
            <ul>
              <li>Staples</li>
              <li>Beverages</li>
              <li>Personal Care</li>
              <li>Home Care</li>
              <li>Baby Care</li>
              <li>Vegetables & Fruits</li>
              <li>Snacks & Foods</li>
              <li>Dairy & Bakery</li>
            </ul>
          </div>
          <div className='subs'>
            <h3>Customer Services</h3>
            <div className='underline2'></div>
            <ul>
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>E-waste Policy</li>
              <li>Cancellation & Return Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='divider1'></div>
      <div className='rights'>
        <p>© 2022 All rights reserved. Reliance Retail Ltd.</p>
      </div>
      <img src={f4} className='mask' alt="" />
    </div>
  )
}

export default Footer
