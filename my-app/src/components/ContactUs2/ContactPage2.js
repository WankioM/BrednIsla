import './ContactPage2.css';
import React from 'react'

function ContactPage2() {
  return (
    <div className='contact-page-container' id="contact-section">
        Contact page container
      {/* Main content */}
      <div className='main-content'>
        
        <p>
          For any inquiries or to place an order, please feel free to contact us.
        </p>
        {/* Add your contact form or other content here */}
      </div>

      {/* Second overlay on top */}
      <div className='overlay-top'>
        {/* Add content for the second overlay here */}

            <div className= 'contactents'>

                <h2>Contact Us</h2>
                <div className='neumorphic-input-container'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' />
                </div>
                <div className='neumorphic-input-container'>
                <label htmlFor='phone-email'>Phone/Email</label>
                <input type='text' id='phone-email' />
                </div>
                <div className='neumorphic-input-container'>
                <label htmlFor='message'>Message</label>
                <textarea id='message' rows='4'></textarea>
                </div>
                <button className='neumorphic-button'>Send</button>

                </div>
        
       
      </div>

      {/* First overlay on the left */}
      <div className='overlay-left'>
        {/* Add content for the first overlay here */}
        
      </div>

      
    </div>
  )
}

export default ContactPage2