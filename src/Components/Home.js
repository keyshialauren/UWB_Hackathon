import React from 'react';
import logo from "../Assets/logo.png";
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
   return (
      <div className="background">
         <div className="home-container">
            <div className="home-text-section">
               <h1 className="primary-heading">
               Welcome Back!
               </h1>
               <p className="primary-text">
                  Easily summarize any lecture or presentation with just a few clicks! We understand that it can be time-consuming to listen to long lectures and sometimes you just need a quick summary of the key points. 
                  That's why we have created SUMMA!
               </p>
               <p className="primary-text">
                  How it works:
                  Upload your lecture and our software will generate a summary of the lecture for you. It's that easy!
               </p>
               <button className="secondary-button">
               Get Started <FiArrowRight />{" "}
               </button>
            </div>
         </div>
      </div>
   )
}

export default Home