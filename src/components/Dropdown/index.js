import React from 'react';
import './Dropdown.style.scss';
import CloseIcon from '../../assets/icons/close.png';
import ReactDom from 'react-dom';
const Dropdown = ({ handlerClick }) => {
  const content = (
    <aside className='dropdown' onClick={handlerClick}>
      <img src={CloseIcon} style={{ width: '15px' }} alt='close Icon'></img>
      dropdown
    </aside>
  );
  return ReactDom.createPortal(
    content,
    document.getElementById('dropdown-menu')
  );
};

export default Dropdown;
