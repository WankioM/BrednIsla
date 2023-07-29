import React, { useState, useEffect } from 'react'
import './ImageList2.css';
import brick from '../../assets/brick-wall-g45f40a8cf_1920.jpg';
import chairs from '../../assets/chairs-g941722bc3_1920.jpg';
import chairs2 from '../../assets/chairs-gd5e6116b5_1920.jpg';
import home from '../../assets/home-gb0bf3c760_1920.jpg';
import livingroom from '../../assets/living-room-gbd00dde08_1920.jpg';




  
  function ImageList2() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    /*

    const images = [
        '../../assets/brick-wall-g45f40a8cf_1920.jpg',
        '../../assets/chairs-g941722bc3_1920.jpg',
        '../../assets/chairs-gd5e6116b5_1920.jpg',
        '../../assets/home-gb0bf3c760_1920.jpg',
        '../../assets/living-room-gbd00dde08_1920.jpg',
        // Add more image URLs here
      ];

      */

    const images=[brick,chairs, chairs2, home, livingroom]
  
    useEffect(() => {
      const interval = setInterval(() => {
        // Increment the currentImageIndex to show the next image
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change image every 3 seconds (adjust this value as you like)
  
      return () => clearInterval(interval);
        }, [images.length, setCurrentImageIndex]); // Include both dependencies
  
    return (
      <div className='slidingimcontainer'>
        
        {/* Translucent overlay (parent overlay) */}
        <div className='overlay-parent'>
            {/* Display the current image */}
            <img
            src={images[currentImageIndex]}
            alt={`${currentImageIndex + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', maxHeight: '565px' ,maxWidth: '1385px' }}
            />
            
            {/* Translucent overlay */}
            <div className='overlay2'>
                <h2>2018-Now</h2>
                <hr /> {/* Horizontal line */}
                <p>
                We offer bespoke furniture and custom designs crafted by skilled artisans. Our passion is
                creating unique and high-quality furniture that perfectly suits your style and needs.
                </p>
                <div className='inspiration'>
                    <p>"Creating beautiful spaces that inspire."</p>
                    <p>"Elevate your living with our timeless designs."</p>
                    </div>
            </div>

         </div>

    </div>
    );
  }
export default ImageList2