import React from 'react'

import './Intro.css'

import img1 from "../../../../assets/intro1.jpg"
import Framer from '../../../../components/Framer/Framer'

const Intro = () => {
    return (
        <div className='about-intro'>
            <h1>Who We Are?</h1>
            <p>Welcome to SMart, your intelligent one-stop shop for everything essential. 
                Born out of the need for <span></span> smarter, faster, and more reliable online shopping, SMart brings you groceries, <span></span>
                electronics, and daily essentials — all in one sleek platform.</p>
            <h1>Our Mission -</h1>
            <p>To simplify lives by delivering a seamless shopping experience powered by smart technology, real-time <span></span> updates, and lightning-fast service.</p>
            {/* <img src={img1} alt="" /> */}

            <Framer src={img1} alt="" direction="right"/>
        </div>
    )
}

export default Intro
