import React from 'react';
import bike from "../assets/bike.png";
import car from '../assets/car.png'; // Added missing import
import carr from "../assets/carr.png"; // Added missing import
import bikee from "../assets/bikee.png"; // Added missing import
import './Category.css';

function Category() {
  return (
    <div className='free-container'>
      <div className='free-row' style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div className="card" style={{ width: '18rem', transition: 'transform .9s'}}>
          <img src={car} className="card-img-top" alt="car" />
          <div className="card-body">
            <h5 className="card-title">Car Spares</h5>
          </div>
        </div>
        <div className="card" style={{ width: '18rem', transition: 'transform .9s' }}>
          <img src={bike} className="card-img-top" alt="bike" />
          <div className="card-body">
            <h5 className="card-title">Bike Spares</h5>
          </div>
        </div>
        <div className="card" style={{ width: '18rem', transition: 'transform .9s' }}>
          <img src={carr} className="card-img-top" alt="car" />
          <div className="card-body">
            <h5 className="card-title">Car Services</h5>
          </div>
        </div>
        <div className="card" style={{ width: '18rem', transition: 'transform .9s', marginRight: '15px' }}>
          <img src={bikee} className="card-img-top" alt="bike" />
          <div className="card-body">
            <h5 className="card-title">Bike Services</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;