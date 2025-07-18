// import React, { useContext } from 'react';
// import { CartContext } from '../../contextAPI/CartContext';
// import './Cart.css';

// const Cart = () => {
//   const { cartItems } = useContext(CartContext);

//   return (
//     <div className="cart-container">
//       {cartItems.map((item, index) => (
//         <div className="cart-card" key={index}>
//           <img src={item.imageURL} alt={item.itemName} />
//           <h3>{item.itemName}</h3>
//           <p>₹{item.price}</p>
//           <p>{item.details}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cart;

import React, { useContext } from 'react';
import { CartContext } from '../../contextAPI/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <h1 className="empty-cart-message">No items in cart</h1>
      ) : (
        cartItems.map((item, index) => (
          <div className="cart-card" key={index}>
            <img src={item.imageURL} alt={item.itemName} />
            <h3>{item.itemName}</h3>
            <p>₹{item.price}</p>
            <p>{item.details}</p>
          </div>
        ))
      )}
    </div>
  );  
};

export default Cart;
