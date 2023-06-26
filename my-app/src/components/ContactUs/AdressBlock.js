import React from 'react';
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { FiClock } from 'react-icons/fi';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <div className="info-item">
        <AiOutlineHome className="info-icon" />
        <h3>ADDRESS</h3>
        <br />
        <p className="info-text">Nairobi, Kenya</p>
      </div>
      <div className="info-item">
      
        <AiOutlinePhone className="info-icon" />
        <h3>PHONE</h3>
        <br />
        <span className="info-text">+254795104387</span>
      </div>
      <div className="info-item">
        <AiOutlineMail className="info-icon" />
        <h3>EMAIL</h3>
        <span className="info-text">bredandisla@gmail.com</span>
      </div>
      <div className="info-item">
        <FiClock className="info-icon" />
        <h3>OPEN</h3>
        <span className="info-text">Monday to Saturday 8am to 5pm</span>
      </div>
    </div>
  );
};

export default ContactInfo;
