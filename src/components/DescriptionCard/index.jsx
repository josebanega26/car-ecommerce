import React from 'react';
import './DescriptionCard.style.scss';
const DescriptionCard = ({
  title,
  subtitle = null,
  imageUrl = '',
  reverse = false,
  text,
}) => {
  const reverseGrid = reverse ? 'reverse' : '';
  return (
    <section className={`grid_section ${reverseGrid}`}>
      <div className='image_side'>
        <img
          src={require('../../assets/images/' + imageUrl + '.jpg')}
          alt='car detail'
        />
      </div>
      <div className='text_side'>
        <h6>{title}</h6>
        {subtitle && <h4> {subtitle}</h4>}
        <p>{text}</p>
      </div>
    </section>
  );
};

export default DescriptionCard;
