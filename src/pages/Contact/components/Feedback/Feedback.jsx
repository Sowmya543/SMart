import React from 'react'

import img1 from "../../../../assets/contact.jpg"

import "./Feedback.css"
import Framer from '../../../../components/Framer/Framer'

const Feedback = () => {
    return (
        <div className='feedback'>
            <h1>Feedback or Suggestions?</h1>
            <form className="fb-form">
                <input type="email" placeholder="Enter Email" required />
                <input type="text" placeholder="Subject" required />
                <textarea placeholder="Message" required />
                <button type="submit">Send Feedback</button>
            </form>
            {/* <img src={img1} alt="" />    */}
            <Framer src={img1} alt="" direction='right'/>
        </div>
    )
}

export default Feedback
