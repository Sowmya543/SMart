import React from 'react'

import "./Linkslide.css"

import { Link } from 'react-router-dom'

const Linkslide = (props) => {

  const { isVisible } = props;

  return (
    <div className={`Linkbox ${isVisible ? 'show' : 'hide'}`}>
      <Link to={"/home"}>
        <p>Home</p>
      </Link>
      
      <Link to={"/about"}>
        <p>About</p>
      </Link>

      <Link to={"/services"}>
        <p>Services</p>
      </Link>

      <Link to={"/contact"}>
        <p>Contact</p>
      </Link>
    </div>
  )
}

export default Linkslide
