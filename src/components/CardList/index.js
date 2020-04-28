import React from 'react';
import { cars } from './mock/mock-cars';
import './CardList.style.scss';
import AutoCard from '../AutoCard/index';

const CardList = (props) => {
  return (
    <div className='cards-container'>
      {
        //Card Component
        cars.map(({ id, ...otherProps }) => {
          return <AutoCard key={id} id={id} {...otherProps}></AutoCard>;
        })
      }
    </div>
  );
};

export default CardList;
