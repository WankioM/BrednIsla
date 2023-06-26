import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h2 className="form-title">Leave us a message</h2>
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5"></textarea>
        </div>
        <button type="submit" className="send-button">
          Send <AiOutlineSend className="send-icon" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
