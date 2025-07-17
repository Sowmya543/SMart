
import React from 'react';
import { useTheme } from "../../contextAPI/ThemeContext";

import { FaSun, FaMoon } from 'react-icons/fa';


const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button id='toggle-button' onClick={toggleTheme}>
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
