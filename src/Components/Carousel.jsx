import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length]);

  return (
    <div className="relative w-[400px] h-[400px] overflow-hidden  shadow-md rounded-full">
      <div className="absolute inset-0 flex transition-transform duration-500" >
          <img
            src={images[currentImageIndex]}
            alt={`Slide `}
            className="w-full h-full object-center "
          />
        
      </div>
    </div>
  );
};

export default Carousel;
