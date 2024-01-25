import React, { useState, useEffect } from 'react'
import './ImageList2.css';





  
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

    const images=['https://i.postimg.cc/MZsvb7mz/brick-wall-g45f40a8cf-1920-1922569b85c8b5fc0c5f.jpg','https://i.postimg.cc/v8VG4t84/chairs-g941722bc3-1920-0b0e4171919989f9fb75.jpg', 'https://i.postimg.cc/631TBWhF/chairs-gd5e6116b5-1920-386bdfaa8c847de359df.jpg', 'https://i.postimg.cc/Y0Y48c1V/home-gb0bf3c760-1920-bcda0fbbc917d77bcf88.jpg', 'https://i.postimg.cc/Y0Y48c1V/home-gb0bf3c760-1920-bcda0fbbc917d77bcf88.jpg']
  
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