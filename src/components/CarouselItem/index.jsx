import React from 'react';
import './CarouselItem.style.scss';
const CarouselItem = ({ imageUrl = null }) => {
  return (
    <div className='card_container'>
      <div className='cardImage_container'>
        <div className='card_placeholder'></div>
        {imageUrl && <img src={imageUrl} alt='' />}
      </div>
      <p className='card_title'>title</p>
      <p className='card_text'>
        Dos alternativas diesel con turbo de geometría variable, 1GD (2.8 L) y
        2GD (2.4 L).
      </p>
    </div>
  );
};

export default CarouselItem;
