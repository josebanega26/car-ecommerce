import React from 'react';
import './Footer.styles.scss';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>{year} | Made by Jose Banega with React</footer>
  );
};

export default Footer;
