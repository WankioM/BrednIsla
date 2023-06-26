import React from 'react';
import './Logos.css';

import facebookIcon from '../../assets/facebook.png';
import mailIcon from '../../assets/mail.png';
import instagramIcon from '../../assets/instagram.png';
import whatsappIcon from '../../assets/whatsapp.png';
import SlidingImages from './SlidingImages.js'






const Logo = () => {
  return (
    <footer className="logo" style={{ padding: '20px'}} >
       
        <div className='iconlist'>

          <div className='icon1'>
  
        <img src={facebookIcon} alt="Facebook Icon" className='logoicon'/>
        </div>

        <div className='icon2'>
        <img src={mailIcon} alt="Facebook Icon" className='logoicon'/>
        </div>


        <div className='icon3'>
        <img src={instagramIcon} alt="Facebook Icon" className='logoicon'/>
        </div>


      <div className='icon4'>
      <img src={whatsappIcon} alt="Facebook Icon" className='logoicon'/>
      </div>

      </div>
      
      

     
    </footer>
  );
};

export default Logo;
