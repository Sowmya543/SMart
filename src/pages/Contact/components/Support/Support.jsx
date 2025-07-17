import React from 'react'

import "./Support.css"

const Support = () => {
  return (
    <div className='support-grid'>
      {/* <h1>Support</h1> */}
      <div className="support-box box1">
        <h3>General Inquiries</h3>
        <p><strong>Email:</strong> support@smartshop.com</p>
        <p><strong>Phone:</strong> +91-98765-43210</p>
        <p><strong>Hours:</strong> Mon – Sat | 9:00 AM – 7:00 PM</p>
      </div>

      <div className="support-box box2">
        <h3>Order & Delivery</h3>
        <p><strong>Email:</strong> orders@smartshop.com</p>
        <p>Use the “Track Order” feature for real-time updates.</p>
      </div>

      <div className="support-box box3">
        <h3>Technical Support</h3>
        <p>If you're having issues with our website, mobile app, or payment systems:</p>
        <p><strong>Email:</strong> techsupport@smartshop.com</p>
      </div>
    </div>
  )
}

export default Support
