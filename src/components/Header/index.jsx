import React, { useState } from 'react';
import './Header.style.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import Hamburger from '../../assets/icons/hamburger.png';
import Backdrop from '../Backdrop';
import Dropdown from '../Dropdown';
function Header() {
  const [dropdownState, setDropdownState] = useState(false);

  const OpenDropDown = () => {
    setDropdownState(true);
  };

  const closeDropdown = () => {
    setDropdownState(false);
  };
  return (
    <>
      {dropdownState && <Backdrop onClick={closeDropdown} />}
      {dropdownState && <Dropdown handlerClick={closeDropdown} />}
      <header className='header'>
        <nav className='left-side'>
          <Link to='/'>
            <Logo />
          </Link>
          <Link className='first option' to=''>
            Modelos
          </Link>
          <Link className='option' to='model'>
            Ficha de Modelo
          </Link>
        </nav>
        <nav className='right-side'>
          <p className='text'>
            <span>Menu</span>
            <img
              onClick={OpenDropDown}
              src={Hamburger}
              className='dropdown-icon'
              alt='Dropdown Select'
            />
          </p>
        </nav>
      </header>
    </>
  );
}

export default Header;
