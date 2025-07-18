import React from 'react'

import "./Story.css"

import img2 from "../../../../assets/story.jpg"
import Framer from '../../../../components/Framer/Framer'

const Story = () => {
    return (
        <div className='story'>
            {/* <img src={img2} alt="" /> */}
            <Framer src={img2} alt="" direction="left"/>
            <h1>Our Story</h1>
            <p>Started by a group of young tech enthusiasts, SMart was built during a college <span></span> hackathon — and grew into a
                full-fledged eCommerce platform loved<span></span> by many. We’re proud of our roots, and  we’re <span></span> growing with every order.</p>
            <h1>What Makes Us Different</h1>
            <ul style={{ "paddingLeft": "30px", "lineHeight": "30px", "fontSize": "18px" }}>
                <li><strong>Smart Search:</strong> Find what you need faster with AI-enhanced search and suggestions.</li>
                <li><strong>Live Inventory:</strong> We update stock in real-time so there are no surprises at checkout.</li>
                <li><strong>Fast Delivery:</strong> Essentials reach your doorstep quickly — because your time matters.</li>
                <li><strong>Clean & Intuitive UI:</strong> Easy navigation and secure checkout for every user.</li>
            </ul>
        </div>
    )
}

export default Story
