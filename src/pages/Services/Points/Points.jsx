import React from 'react'

import "./Points.css"


const points=[
  {
    ques: "Wide Product Range",
    ans: "Discover a vast selection of essentials, groceries, electronics, fashion, and more. We curate top-quality items from trusted brands, ensuring variety and satisfaction in every category."
  },
  {
    ques: "Smart Search & Filter",
    ans: "Our intelligent search bar and filters help you find exactly what you need—faster and smarter. Easily sort products by price, popularity, or newest arrivals."
  },
  {
    ques: "Secure Payments",
    ans: "We support multiple payment methods including UPI, cards, net banking, and cash on delivery. All transactions are encrypted and 100% secure."
  },
  {
    ques: "Lightning-Fast Delivery",
    ans: "With our wide delivery network, your orders reach your doorstep in record time. Real-time tracking included."
  },
  {
    ques: "Easy Returns & Refunds",
    ans: "Not satisfied? Return within 7 days, no questions asked. Instant refunds processed on eligible returns."
  },
  {
    ques: "24/7 Customer Support",
    ans: "Our support team is here round the clock to resolve your queries. Chat, call, or email us anytime."
  },
  {
    ques: "Mobile App Access",
    ans: "Shop on the go with our mobile app (coming soon!). Seamless browsing and faster checkouts at your fingertips."
  },
  {
    ques: "Smart Cart",
    ans: "Save items for later or organize your cart with our intuitive system. Never lose track of your favorites."
  }
]


const Points = () => {
  return (
    <div className='points-container'>
      <div className="services-grid">
        {points.map((point, index) => (
          <div key={index} className="service-card">
            <h3>{point.ques}</h3>
            <p>{point.ans}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Points
