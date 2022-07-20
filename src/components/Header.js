import React from 'react';
import TeltonikaLogo from '../logo/teltonika_logo2.png';

const Header = () => {
  return (
    <div className='app_header'>
      <img src={TeltonikaLogo} alt="logo"/>
    </div>
  )
}

export default Header