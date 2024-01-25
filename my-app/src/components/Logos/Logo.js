import React from 'react';
import './Logos.css';








const Logo = () => {

  const whatsappNumber = '+254795104387';
  const email = 'edwardjohnokoth@gmail.com';

  return (
    <footer className="logo"  >
       
        <div className='iconlist'>

          <div className='icon1'>

            <a href='https://www.facebook.com/bredisla/' target='_blank' rel='noopener noreferrer'>
              <img src='https://i.postimg.cc/FHB9fWSJ/facebook-e6629bed21ce62af6488.png' alt="Facebook Icon" className='logoicon'/>
              </a>
          </div>

        <div className='icon2'>
            <a href={`mailto:${email}`} target='_blank' rel='noopener noreferrer'>
            <img src='https://i.postimg.cc/prTGnZzp/mail-8729f9493995ba074cf4.png' alt="Mail Icon" className='logoicon' />
            </a>
        </div>


        <div className='icon3'>
        <a href='https://www.instagram.com/bredandisla/' target='_blank' rel='noopener noreferrer'>
        <img src='https://i.postimg.cc/LXyvR1wR/instagram-df97d86906bc7358093d.png' alt="Instagram Icon" className='logoicon'/>
        </a>
        </div>


      <div className='icon4'>
      <a
            href={`https://wa.me/${whatsappNumber}`}
            target='_blank'
            rel='noopener noreferrer'
          >
      <img src='https://i.postimg.cc/PqTMwykT/whatsapp-1662842d4bbe089a1e4f.png' alt="WhatsApp Icon" className='logoicon'/>
      </a>
      </div>

      </div>
      
      

     
    </footer>
  );
};

export default Logo;
