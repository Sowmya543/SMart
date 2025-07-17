import React from 'react'
import "./Navbar.css"

import { Link } from 'react-router-dom'

import { assets } from '../../assets/assets'

import ToggleTheme from "../Theme/ThemeToggle"

import Linkslide from '../Linkslide/Linkslide.jsx';
import { useState } from 'react';

import { useContext } from 'react';
import { PhoneContext } from '../../PhonePopup/PhoneContext.jsx';
import { FaPhone } from 'react-icons/fa';

import Phonepopup from "../Phone/Phonepopup.jsx";




// const Navbar = ({ cartCount }) => {

//   const handleLogin = ()=>{
//     console.log("done")
//   }
//   return (
//     <>
//       <div className='nav'>
//         <div className='logo'>
//           <img src={assets.logo} alt="" />
//           <h1>SMart</h1>
//         </div>
//         <div className='search-but'>
//           <div className='search'>
//             <div><img src={assets.s1} id='s1' alt="" /></div>
//             <input type="text" placeholder='Search essentials, groceries and more...' />
//             <div><img src={assets.s2} id='s2' alt="" /></div>
//           </div>
//           <div className='buttons'>
//             <div className='button' id='login' onClick={handleLogin}>
//               <img src={assets.b1} alt="" id="img1"/>
//               <p>Sign Up/Sign In</p>
//             </div>
//             <p>|</p>
//             <div className='button'>
//               <img src={assets.b2} alt="" />
//               <p>Cart ({cartCount})</p>

//             </div>
//           </div>
//         </div>
//       </div>
//       <hr />
//     </>
//   )
// }

// export default Navbar

const Navbar = ({ cartCount, onLoginClick }) => {
  const handleLogin = () => {
    onLoginClick(true); // Trigger parent handler to show the form
  };

  const { toggleRinging } = useContext(PhoneContext);

  const [isLinkSlideVisible, setLinkSlideVisible] = useState(false);
  const toggleLinkSlide = () => {
    setLinkSlideVisible(!isLinkSlideVisible);
  };

  return (
    <>
      <div className='nav'>
        <div className='logo'>
          <button onClick={toggleLinkSlide} className='menu-btn'>
            <img src={assets.logo} alt="" />
          </button>
          <h1>SMart</h1>
        </div>
        <Linkslide isVisible={isLinkSlideVisible} />


        <div className='search-but'>
          <div className='search'>
            <div><img src={assets.s1} id='s1' alt="" /></div>
            <input type="text" placeholder='Search essentials, groceries and more...' />
            <div><img src={assets.s2} id='s2' alt="" /></div>
          </div>
          <div className='buttons'>
            <div className='call'>
              <button onClick={toggleRinging} id="call-btn" style={{ fontSize: '24px' }}>
                <FaPhone />
              </button>
              <Phonepopup />
            </div>
            <div className='button' id='login' onClick={handleLogin}>
              <img src={assets.b1} alt="" id="img1" />
              <p>Sign Up/Sign In</p>
            </div>
            {/* <p>|</p> */}
            <div className='button' id='cart-btn'>
              <img src={assets.b2} alt="" />
              <Link to={"/cart"}>
                <p>Cart ({cartCount})</p>

              </Link>

            </div>

            <div>
              <ToggleTheme />
            </div>

          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;