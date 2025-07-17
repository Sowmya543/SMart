import React, { useContext } from 'react';
import { PhoneContext } from '../../PhonePopup/PhoneContext';
import "./Phonepopup.css"; // Style with animation
import calling from "../../assets/calling.gif"

const Phonepopup = () => {
  const { isRinging } = useContext(PhoneContext);

  if (!isRinging) return null;

  return (
    <div className="popup">
        <h3>Calling Sowmya...</h3>
      <img
        src={calling} // You can replace this with a ringing phone GIF or your own
        alt="Ringing Phone"
        className="ringing-phone"
      />
      <div className='home-btn'>
      </div>
    </div>
  );
};

export default Phonepopup;
