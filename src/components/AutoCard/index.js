import React from 'react';
import './AutoCard.style.scss';
import imageUrl from './mockImages/camry.png';
import { withRouter } from 'react-router-dom';

const AutoCard = (props) => {
  const { model, id, year, price, img, history } = props;

  const goToDetail = (id) => {
    // console.log('withRouter', props);
    history.push(`/model/${id}`);
  };
  return (
    <div key={id} className='autoCard_container'>
      <p className='card_title'>{model}</p>
      <p className='card_subtitle'>{`${year} | ${price}`}</p>
      <img src={imageUrl} alt={model} />
      <div className='card_button--container'>
        <button
          className='card_button'
          onClick={() => {
            goToDetail(id);
          }}
        >
          Ver Modelo
        </button>
      </div>
    </div>
  );
};

export default withRouter(AutoCard);
