import React from 'react';
import './Dropdown.style.scss';
import CloseIcon from '../../assets/icons/close.png';
import ReactDom from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import NavLinks from '../NavLinks';
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
        <ul>
          <span className='text'>Close</span>
          <img
            src={CloseIcon}
            className='dropdown_image'
            alt='close Icon'
          ></img>
        </ul>
        <NavLinks></NavLinks>
      </aside>
    </CSSTransition>
  );
  return ReactDom.createPortal(
    content,
    document.getElementById('dropdown-menu')
  );
};

export default Dropdown;
