import './ContactPage2.css';
import React, { useState }  from 'react'

function ContactPage2() {

  // Create state to store form data
  const [formData, setFormData] = useState({
    name: '',
    phoneEmail: '',
    message: '',
  });

  // Handle input changes and update the form data state
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Do something with the form data (e.g., send it to a server)
    console.log('Form Data:', formData);

    // Destructure the formData
    const { name, phoneEmail, message } = formData;

    // Compose the email details
    const email = 'tracywankio29@gmail.com';
    const subject = 'newinquiry';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0APhone/Email: ${encodeURIComponent(phoneEmail)}%0AMessage: ${encodeURIComponent(message)}`;

    // Open the mail client with the pre-filled email
    window.open(mailtoLink);
    
    // Clear the form fields after submission (optional)
    setFormData({
      name: '',
      phoneEmail: '',
      message: '',
    });
  };


  return (
    <div className='contact-page-container' id="contact-section">
        Contact page container
      {/* Main content */}
      <div className='main-content'>
        
       
        {/* Add your contact form or other content here */}
      </div>

      {/* Second overlay on top */}
      <div className='overlay-top'>
        {/* Add content for the second overlay here */}

            <div className= 'contactents'>

                <h2>Contact Us</h2>
                <p>
                  For any inquiries or to request a quote, please feel free to contact us.
                </p>
                <div className='neumorphic-input-container'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' value={formData.name} onChange={handleInputChange}/>
                </div>
                <div className='neumorphic-input-container'>
                <label htmlFor='phoneEmail'>Phone/Email</label>
                <input type='text' id='phoneEmail' value={formData.phoneEmail} onChange={handleInputChange} />
                </div>
                <div className='neumorphic-input-container'>
                <label htmlFor='message'>Message</label>
                <textarea id='message' rows='4' value={formData.message} onChange={handleInputChange}></textarea>
                </div>
                <button className='neumorphic-button' type='submit' onClick={handleFormSubmit }>Send</button>

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