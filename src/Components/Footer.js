import React from 'react';
import logo from '../assets/logo.png';
import Aboutus from './Aboutus';
import './Footer.css';
function Footer() {
  return (
    <>
     <div className="footer">
      <div className="footer-left">
        <img src={logo} alt="Logo" />
      </div>
      <div className="footer-right">
        <div><b>Menu</b>
        <ul><li>Home</li>
            <li>Car Services</li>
            <li>Bike Services</li>
            <li>Car Spareparts</li>
            <li>Bike Spareparts</li>
            </ul></div>
        <div><b>Contact</b>
        <ul><li>automodo2024@gmail.com</li>
        <li>+91-3895738900</li></ul></div>
        <div><b>Inquiries</b>
        <ul><li>Services</li>
            <li>Pricing</li>
            <li>About us</li>
            </ul></div>
      </div>
    </div>
    </>
  )
}

export default Footer