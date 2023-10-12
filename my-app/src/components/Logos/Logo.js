import React from 'react';
import './Logos.css';

import facebookIcon from '../../assets/facebook.png';
import mailIcon from '../../assets/mail.png';
import instagramIcon from '../../assets/instagram.png';
import whatsappIcon from '../../assets/whatsapp.png';







const Logo = () => {

  const whatsappNumber = '+254795104387';
  const email = 'edwardjohnokoth@gmail.com';

  return (
    <footer className="logo"  >
       
        <div className='iconlist'>

          <div className='icon1'>

            <a href='https://www.facebook.com/bredisla/' target='_blank' rel='noopener noreferrer'>
              <img src={facebookIcon} alt="Facebook Icon" className='logoicon'/>
              </a>
          </div>

        <div className='icon2'>
            <a href={`mailto:${email}`} target='_blank' rel='noopener noreferrer'>
            <img src={mailIcon} alt="Mail Icon" className='logoicon' />
            </a>
        </div>


        <div className='icon3'>
        <a href='https://www.instagram.com/bredandisla/' target='_blank' rel='noopener noreferrer'>
        <img src={instagramIcon} alt="Instagram Icon" className='logoicon'/>
        </a>
        </div>


      <div className='icon4'>
      <a
            href={`https://wa.me/${whatsappNumber}`}
            target='_blank'
            rel='noopener noreferrer'
          >
      <img src={whatsappIcon} alt="WhatsApp Icon" className='logoicon'/>
      </a>
      </div>

      </div>
      
      

     
    </footer>
  );
};

export default Logo;
