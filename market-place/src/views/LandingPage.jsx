import React, { useState } from 'react';
import "../App.css";
import HomePage from "../components/HomePage";
import Form from '../components/Form';
import Register from '../components/Register';


const LandingPage = () => {
  return (
    <div className="landing w-screen h-screen flex justify-around items-center">
      <div className="rounded-3xl w-[40%] h-[100%]  flex flex-col justify-around ">
        <div className="rounded-3xl w-[100%] h-[30%]   p-8  -mt-32">
          <img src="/logo.png" alt="logo" className="w-1/2 h-auto -ml-28" />
        </div>
        <div className="rounded-3xl w-[100%] h-[30%]  ">
          <h1>BIENVENIDO</h1>
          <p>AL MARKETPLACE</p>
        </div>
      </div>
      
      <div className="rounded-3xl w-[40%] max-w-[500px] h-[80%]  bg-gray-700 p-8 shadow-lg flex flex-col ">   
      {/* <HomePage/>
      <Register/> */}
      </div>
    </div>
  );
};

export default LandingPage;

