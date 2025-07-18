import React from 'react'

import "./Vision.css"

import img3 from "../../../../assets/vision.jpg"

import Framer from '../../../../components/Framer/Framer'

const Vision = () => {
    return (
        <div className='vision'>
            <h1>Our Vision</h1>
            <p>To create an ecosystem where shopping is:</p>
            <ul style={{ "paddingLeft": "30px", "lineHeight": "30px", "fontSize": "18px" }}>
                <li>Smart</li>
                <li>Sustainable</li>
                <li>Satisfying</li>
            </ul>
            <p>We’re not just building a store — we’re crafting a shopping experience for the future.</p>
            <h1>Meet the Team</h1>
            <p>We’re designers, developers, and dreamers passionate about solving everyday <span></span>problems
                with code and creativity. Your feedback fuels our improvements — <span></span>and your satisfaction
                is our greatest reward.</p>
            {/* <img src={img3} alt="" /> */}
            <Framer src={img3} alt="" direction="right"/>
        </div>
    )
}

export default Vision
