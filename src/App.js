import React, { useState } from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import image from './images.jpeg';

const Navbar = () => (
  <nav>
    <div className="nav1">
    <h1>Food App</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Quote</li>
      <li>Restaurant</li>
    </ul>
    </div>
  </nav>
);

const About = () => (
  <div>
    <h2>About Us</h2>
    <p>
      Welcome to the Food App! We offer a variety of delicious dishes for you to
      choose from.
    </p>
  </div>
);
const SecPage = () => (
  <div className="secPage1">
    <img src={image} alt ="house img" height={450} width={400}/>
    <div className="secPageRight">
     <h1>Know More</h1>
    <LoremIpsum p={1} />
    <button>Get in touch</button>
  </div>
  </div>
);

const ThirdContent = ()=> (
  <div className='thirdPage'>
        <LoremIpsum span={0.5} />
          <div className='bottom'>
            <img src={image} alt ="house img" height={60} width={60} border radius={25}/>
                   <div className='bottomRight'>
                     <p>Gladis Nano</p>
                     <p>Head of SEO</p>
                  </div>
           </div>
      </div>
)

const Footer = () => (
  <footer>
    <p>&copy; 2024 Food App. All rights reserved.</p>
  </footer>
);

const FoodApp = () => {


  return (
    <div className="food-app">
      <image className='img'></image>
      <Navbar />
      <div className="content">
        <About />
        <div className="menu">
          <h2>Let us found your favourite food</h2>
          <LoremIpsum span={0.5} />
          <div className = "btn">
         <button className='btn1'>Know More</button>
         <button className='btn2'>Search Now</button>
         </div>
        </div>
     
      </div>
      <SecPage />
      <div className='thirdPage1'>
      <ThirdContent />
      <ThirdContent />
      <ThirdContent />
      <ThirdContent />
      <ThirdContent />
      </div>
      <Footer />
      </div>
  
  );
};

export default FoodApp;