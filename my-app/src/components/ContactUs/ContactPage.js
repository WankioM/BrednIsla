import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './AdressBlock';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className='contactpage'>
        <ContactInfo />
        <ContactForm />
    </div>
  )
}

export default ContactPage