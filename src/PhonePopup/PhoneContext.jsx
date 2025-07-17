import React, { createContext, useState } from 'react';

export const PhoneContext = createContext();

export const PhoneProvider = ({ children }) => {
  const [isRinging, setIsRinging] = useState(false);

  const toggleRinging = () => {
    setIsRinging(!isRinging);
  };

  return (
    <PhoneContext.Provider value={{ isRinging, toggleRinging }}>
      {children}
    </PhoneContext.Provider>
  );
};
