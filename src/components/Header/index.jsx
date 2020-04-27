import React from 'react';
import './Header.style.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import Hamburguer from '../../assets/icons/hamburger.png';
function Header() {
  return (
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
            src={Hamburguer}
            className='dropdown-icon'
            alt='Dropdown Select'
          />
        </p>
      </nav>
    </header>
  );
}

export default Header;
