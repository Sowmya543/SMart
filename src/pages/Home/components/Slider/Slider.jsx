import { useState, useRef } from 'react'
import "./Slider.css"
import { assets } from '../../../../assets/assets'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import slide1 from "../../../../assets/1.png"
import slide2 from "../../../../assets/2.png"
import slide3 from "../../../../assets/3.png"
import slide4 from "../../../../assets/4.png"
import slide5 from "../../../../assets/5.png"
import slide6 from "../../../../assets/6.png"


const Slider = () => {

  const sliderRef = useRef(null);

  const images = [slide1, slide2, slide3, slide4, slide5, slide6]

  const data = [

    {
      image: images[0]
    },
    {
      image: images[1]
    },
    {
      image: images[2]
    },
    {
      image: images[3]
    },
    {
      image: images[4]
    },
    {
      image: images[5]
    },
  ]
  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, 
    autoplaySpeed: 1000,
  };

  // const [display, setDisplay] = useState("");


  return (
    <div className='slider'>
      <div className='slide'>
        <div className='items'>
          {/* <SlickSlider {...settings}>
            {data.map((img, i) => {

              return (
                <div key={i}>
                  <img src={img.image} alt="" />
                </div>
              );

            })}

          </SlickSlider> */}

          <button className="manual-arrow left" onClick={() => sliderRef.current.slickPrev()}>
            <FaChevronLeft />
          </button>
          <div className="items">
            <SlickSlider ref={sliderRef} {...settings}>
              {images.map((img, i) => (
                <div key={i}>
                  <img src={img} alt="" />
                </div>
              ))}
            </SlickSlider>
          </div>
          <button className="manual-arrow right" onClick={() => sliderRef.current.slickNext()}>
            <FaChevronRight />
          </button>
        </div>

        <div className="slide-swiper">
          <div className="dots" id="dot1"></div>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
        </div>


        {/* <button id='left'><img src={assets.left} alt="" /></button> */}
        {/* <button id='right'><img src={assets.right} alt="" /></button> */}
      </div>
    </div>
  )
}

export default Slider
