import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./style.css";
import Navigationbar from "../Navbar";
import Footer from '../../components/Footerr/Footer'

/**
 * @author
 * @function HomePage
 **/

const HomePage = (props) => {
  
  return (
    <>
      <Navigationbar />
      <Footer/>
    </>
  );
};

export default HomePage;
