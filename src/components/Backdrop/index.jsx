import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.style.scss';

const Backdrop = ({ onClick }) => {
  return ReactDOM.createPortal(
    <div className='backdrop' onClick={onClick}></div>,
    document.getElementById('backdrop')
  );
};

export default Backdrop;
