import React from 'react';
import Header from '../Header/index';
import Footer from '../Footer/index';
import './Layout.style.scss';
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <section className='main-container'>{children}</section>
      <Footer />
    </div>
  );
};

export default Layout;
