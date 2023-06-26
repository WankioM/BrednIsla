import React, { useState, useEffect } from 'react';
import './ImageList.css';
import chairA from '../../assets/chair_0001.png';
import chairB from '../../assets/chairB_0001.png';
import chairC from  '../../assets/chairC_0001.png';
import tableA from  '../../assets/table_0001.png';
import tableB from  '../../assets/tableB_0001.png';
import tableC from  '../../assets/tableC_0001.png';
import shelfA from  '../../assets/shelf_0001.png';
import shelfB from  '../../assets/shelfB_0001.png';
import shelfC from  '../../assets/shelfC_0001.png';




const ImageList = () => {

    const chair=[chairA, chairB, chairC,
        'Manikandan',
        'DINING CHAIR'

    ]

    const table=[tableA, tableC, tableB,
        'Rustic Dark wood ',
        'SIDE TABLE'

    ]

    const shelf=[shelfA,shelfB,shelfC,
        'Dominican standard ',
        'STANDARD SHELF'

    ]
  const imageUrls = [chair, table, shelf];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [imageUrls.length]);

  return(

    <div className='images'>
        <div classname='sideA'>
            <img src={imageUrls[currentIndex][0]}  alt="Chair Image" />
        </div>
        <div classname='sideB'>
            <img src={imageUrls[currentIndex][1]} />
        </div>
        <div classname='sideC'>
        <img src={imageUrls[currentIndex][2]}  />
          
        </div>
        <div className= 'textdesc'>
            <h2 className='h2slant'> {imageUrls[currentIndex][3]} </h2>
            <p className='pcaps'>{imageUrls[currentIndex][4]}</p>
        </div>
    </div>

  )
}

export default ImageList;