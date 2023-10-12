import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slidingimages.css';

const SlidingImages = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000, // Set the time between each slide change (in milliseconds)
    dots: false, // Hide the dots (thumbnails)
    arrows: false, // Hide the arrows
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://www.roseandgrey.co.uk/news/wp-content/uploads/2020/01/For_RoseandGrey_January2020_DayOne_206-1-683x1024.jpg" 
        alt="next 1"
        className='imgdiv'  />
      </div>
      <div>
        <img src="https://www.roseandgrey.co.uk/news/wp-content/uploads/2020/02/For_RoseandGrey_January2020_DayOne_144-683x1024.jpg"
         alt="next 2"
         className='imgdiv'  />
      </div>
      <div>
        <img src="image3.jpg" alt="next 3" />
      </div>
    </Slider>
  );
};

export default SlidingImages;
