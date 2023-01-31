import React from 'react';
import Logo from '../../img/svg/Logo';



function Header() {
  return (
    <div className="header">
      <div className="header-logo-container">
        <Logo />
        TESTTASK
      </div>
      <div className="header-btn-container">
        <button className="header-btn">Users</button>
        <button className="header-btn">Sing up</button>
      </div>
    </div>
  );
}

export default Header;
