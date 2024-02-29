import React from 'react';
import "./Aboutus.css";
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';

function Aboutus() {
  return (
  <div className='aboutus-container'>
    <div className='aboutus-box'>
    <h1>About US</h1>
    <p>Welcome to AutoHub, your one-stop solution for vehicle maintenance. We bring you three essential services: Service Locator, Information Hub, and Spare Parts Shop.At AutoHub, your feedback matters. Our user-friendly interface, robust search, and personalized recommendations based on your vehicle aim to redefine your service experience.Thanks for choosing AutoHub your trusted partner in keeping your vehicle in top shape!</p>
    <div><img src={img5} className='aboutus-image' alt='teamwork'style={{ width: '250px', height: '150px' }}/>
    <img src={img6} className='aboutus-image' alt='teamwork'style={{ width: '250px', height: '150px' }}/> 
    </div>
    <h1>Our Team</h1>
    <p>Our team is dedicated to simplifying your automotive experience. Using advanced technology, we connect you with authorized service centers and skilled mechanics, providing real-time info on services, prices, and customer reviews.Explore our Information Hub for practical insights, tips, and guides to empower you in proactive vehicle care. In Spare Parts Shop, find genuine parts through a secure e-commerce system for a hassle-free repair and maintenance process.</p>
</div>
</div>
  )
}

export default Aboutus;