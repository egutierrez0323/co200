import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className='mainContainer'>
      <Sidebar/>
      <Header />
      <main>{children}</main>
    
    </div>
  );
};

export default Layout;

