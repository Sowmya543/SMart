

import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Dropdown from "../../components/Dropdown/Dropdown";
import Slider from "./components/Slider/Slider";
import SmartPhones from "./components/SmartPhones/SmartPhones";
import TopCategories from "./components/TopCategories/TopCategories";
import ElectronicBrands from "./components/ElectronicBrands/ElectronicBrands";
import Essentials from "./components/Essentials/Essentials";
import Footer from "../../components/Footer/Footer";
import FAQ from "./components/FAQ/FAQ";
import Form from "./components/Form/Form";
import CartForm from "./components/CartForm/CartForm";

import ScrollFadeIn from "../../components/Framer/ScrollFadeIn";

import { motion } from 'framer-motion';

const Home = ({ cartCount, handleAddToCart }) => {
  const [showForm, setShowForm] = useState(false);

  const handleLoginClick = () => {
    setShowForm(true); // Show the form when login button is clicked
  };

  const handleCloseForm = () => {
    setShowForm(false); // Hide the form when X button is clicked
  };

  return (
    <div className='Home'>

      <motion.div
        initial={{ opacity: 0, y: 500 }}   // Start off-screen
        animate={{ opacity: 1, y: 0 }}      // Slide in
        transition={{ duration: 0.5 }}      // Smooth transition
      >


        <Navbar cartCount={cartCount} onLoginClick={handleLoginClick} />
        <Dropdown />

        {showForm && <Form onClose={handleCloseForm} />}
        <Slider />


        <ScrollFadeIn direction="up">
          <SmartPhones handleAddToCart={handleAddToCart} />
        </ScrollFadeIn>

        <ScrollFadeIn direction="up">
          <TopCategories />
        </ScrollFadeIn>


        <ScrollFadeIn direction="up">
          <ElectronicBrands />
        </ScrollFadeIn>


        <ScrollFadeIn direction="up">
          <Essentials />
        </ScrollFadeIn>


        <ScrollFadeIn direction="up">
          <CartForm />
        </ScrollFadeIn>


        <ScrollFadeIn direction="up">
          <FAQ />
        </ScrollFadeIn>


        <ScrollFadeIn direction="up">
          <Footer />
        </ScrollFadeIn>



      </motion.div>
    </div>
  );
};

export default Home;
