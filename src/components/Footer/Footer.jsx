import React from 'react';
import { assets } from '../../assets/assets';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
         <img src={assets.logo} alt="" />
         <p> Located in the picturesque heart of West Sikkim, Soreng, Tugna is a charming eatery renowned for its authentic Indian and local cuisine. Nestled in a region rich with cultural heritage and natural beauty, Tugna provides a unique dining experience that blends traditional flavors with a warm, welcoming atmosphere. </p>
             <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                </div>  
               
                </div>
                <div className="footer-content-right">
               <h2>COMPANY</h2>
               <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
               </ul>
                </div>
                <div className="footer-content-center">
<h2>GET IN TOUCH</h2>
<ul>
    <li>123456789</li>
    <li>tugna@gmail.com</li>
</ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © Tungna All Right Reserved </p>
        </div>
    </div>
  )
}

export default Footer