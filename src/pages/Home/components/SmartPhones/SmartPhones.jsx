import "./SmartPhones.css"

import sp1 from "../../../../assets/sp1.png"
import sp2 from "../../../../assets/sp2.png"
import sp3 from "../../../../assets/sp3.png"
import sp4 from "../../../../assets/sp4.png"
import sp5 from "../../../../assets/sp5.png"


const products = [
  {
    id: 1,
    name: 'Galaxy S22 Ultra',
    image: sp1,
    price: '₹32999',
    oldprice: '₹74999',
    save: '₹32999'
  },
  {
    id: 2,
    name: 'Galaxy M13 (4GB | 64 GB )',
    image: sp2,
    price: '₹10499',
    oldprice: '₹14999',
    save: '₹32999'
  },
  {
    id: 3,
    name: 'Galaxy M33 (4GB | 64 GB )',
    image: sp3,
    price: '₹16999',
    oldprice: '₹24999',
    save: '₹32999'
  },
  {
    id: 4,
    name: 'Galaxy M53 (4GB | 64 GB )',
    image: sp4,
    price: '₹31999',
    oldprice: '₹40999',
    save: '₹32999'
  },
  {
    id: 5,
    name: 'Galaxy S22 Ultra',
    image: sp5,
    price: '₹67999',
    oldprice: '₹85999',
    save: '₹32999'
  }
];

const SmartPhones = ({ handleAddToCart }) => {
  return (
    <div className='smartphones'>
      <div className="content">
        <div className="head">
          <h1>Grab the best deal on Smartphones</h1>
          <button><p>View all &gt;</p></button>
        </div>
        <div>
          <div className="underline"></div>
          <div className="divider"></div>
        </div>
      </div>
      <div className='cards-container'>
        {products.map(product => (
          <div key={product.id} className='card'>
            <div id="image">
              <img src={product.image} alt={product.name} />
              <div id="off">
                <p>56% <span></span>Off</p>
              </div>
            </div>
            <div id="details">
              <h3>{product.name}</h3>
              <p><strong>{product.price}</strong> <span id="cross"> {product.oldprice}</span></p>
              <hr />
              <p id="save">Save - {product.save}</p>
              <button onClick={handleAddToCart}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SmartPhones;
