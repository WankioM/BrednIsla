import './ContactPage2.css';
import React, { useState, useRef }  from 'react'
import emailjs from '@emailjs/browser';

function ContactPage2() {

  // Create state to store form data
  const [formData, setFormData] = useState({
    name: '',
    phoneEmail: '',
    message: '',
  });

  const form = useRef();

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

    

    // Use the emailjs API to send the email
    emailjs.sendForm('service_gycljf6', 'template_w787mql', form.current, '0VVWmdqvURihyz7ed')
      .then((result) => {
          console.log(result.text);
          console.log('Form Elements:', form.current.elements);
          
          const formElements = form.current.elements;

          for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i];
            console.log('Element Name:', element.name);
            console.log('Element Value:', element.value);
            // Access other properties as needed
          }
          
          // Clear the form fields after successful submission
          setFormData({
            name: '',
            phoneEmail: '',
            message: '',
          });
      }, (error) => {
          console.log(error.text);
      });
  
    
    
   
  };


  return (
    <div className='contact-page-container' id="contact-section">
   
  {/* Main content */}
  <div className='main-content'>
    
   
    {/* Add your contact form or other content here */}
  </div>

  {/* Second overlay on top */}
  <div className='overlay-top'>
    {/* Add content for the second overlay here */}

        <div className= 'contactents'>


                <h2>Contact Us</h2>
              
                <form ref={form} onSubmit={handleFormSubmit}>
                <div className='neumorphic-input-container'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' value={formData.name} onChange={handleInputChange}/>
                </div>
                <div className='neumorphic-input-container'>
                <label htmlFor='phoneEmail'>Phone/Email</label>
                <input type='text' id='phoneEmail' name='phoneEmail' value={formData.phoneEmail} onChange={handleInputChange} />
                </div>
                <div className='neumorphic-input-container'>
                <label htmlFor='message'>Message</label>
                <textarea id='message' rows='3' name = 'message' value={formData.message} onChange={handleInputChange}></textarea>
                </div>
                <button className='neumorphic-button' type='submit'>Send</button>
                </form>
                </div>
        
       
      </div>

      {/* First overlay on the left */}
      <div className='overlay-left'>
        {/* Add content for the first overlay here */}
        
      </div>

      <div class="bottom-div">
        <p>Designed by Tracy Wankio</p>
      </div>

      
    </div>
  )
}

export default ContactPage2