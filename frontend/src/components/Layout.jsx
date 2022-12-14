// React Imports
import React from 'react';
// Custom Imports
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div>
      <Header />
      <div className='content'>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
