import React from 'react'

import "./Essentials.css"

import de1 from "../../../../assets/de1.png"
import de2 from "../../../../assets/de2.png"
import de3 from "../../../../assets/de3.png"
import de4 from "../../../../assets/de4.png"
import de5 from "../../../../assets/de5.png"
import de6 from "../../../../assets/de6.png"


const essen = [
  {
    id: 1,
    image: de1,
    name: 'Daily Essentials'
  },
  {
    id: 2,
    image: de2,
    name: 'Vegitables'
  },
  {
    id: 3,
    image: de3,
    name: 'Fruits'
  },
  {
    id: 4,
    image: de4,
    name: 'Strawberry'
  },
  {
    id: 5,
    image: de5,
    name: 'Mango'
  },
  {
    id: 6,
    image: de6,
    name: 'Cherry'
  }
]



const Essentials = () => {
  return (
    <div className='essentials'>
      <div className='ess-content'>
        <div className="head">
          <h1>Daily Essentials</h1>
          <button><p>View all &gt;</p></button>
        </div>
        <div>
          <div className="underline" id="deu"></div>
          <div className="divider"></div>
        </div>
      </div>
      <div className='ess-cards'>
        {essen.map(essen => (
          <div key={essen.id} className='ess-card'>
            <img src={essen.image} alt="" />
            <p>{essen.name}</p>
            <h3>UP to 50% OFF</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Essentials
