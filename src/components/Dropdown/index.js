import React from 'react';
import './Dropdown.style.scss';
import CloseIcon from '../../assets/icons/close.png';
import ReactDom from 'react-dom';
import { CSSTransition } from 'react-transition-group';

const Dropdown = ({ handlerClick, show }) => {
  const content = (
    <CSSTransition
      in={show}
      timeout={500}
      classNames='slide-in-right'
      mountOnEnter
      unmountOnExit
    >
      <aside className='dropdown' onClick={handlerClick}>
        <img src={CloseIcon} style={{ width: '15px' }} alt='close Icon'></img>
        dropdown
      </aside>
    </CSSTransition>
  );
  return ReactDom.createPortal(
    content,
    document.getElementById('dropdown-menu')
  );
};

export default Dropdown;
