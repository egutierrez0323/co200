
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className='mainContainer'>
      <Sidebar/>
      <main>{children}</main>
    
    </div>
  );
};

export default Layout;

