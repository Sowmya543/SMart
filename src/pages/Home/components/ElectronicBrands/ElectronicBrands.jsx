import "./ElectronicBrands.css"

import e1 from "../../../../assets/eb1.png"
import e2 from "../../../../assets/eb2.png"
import e3 from "../../../../assets/eb3.png"

const elect = [
  {
    id: 1,
    image: e1
  },
  {
    id: 2,
    image: e2
  },
  {
    id: 3,
    image: e3
  }
]

const ElectronicBrands = () => {
  return (
    <div className='electronics'>
      <div className='ele-content'>
        <div className="head">
          <h1>Top Electronics Brands</h1>
          <button><p>View all &gt;</p></button>
        </div>
        <div>
          <div className="underline" id="ebu"></div>
          <div className="divider"></div>
        </div>
      </div>
      <div className="eb-cards">
        {elect.map(elect => (
          <div key={elect.id} className="eb-card">
            <img src={elect.image} alt="" />
          </div>
        ))}
      </div>
      <div className="swiper">
        <div className="dots" id="dot"></div>
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>
      </div>
    </div>
  )
}

export default ElectronicBrands
