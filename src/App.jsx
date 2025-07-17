import React, { useState } from 'react';
import Home from './pages/Home/Home';
import Cart from './components/Cart/Cart';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './pages/About/About';
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contact';



const App = () => {
  const [cartCount, setCartCount] = useState(0);


  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };




  return (
    <>

        <Routes>

          
          <Route path='/' element={<Home />} />


          <Route path='/home' element={<Home cartCount={cartCount} handleAddToCart={handleAddToCart} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      






      {/* <Home cartCount={cartCount} handleAddToCart={handleAddToCart} /> */}
    </>

  );
};

export default App;