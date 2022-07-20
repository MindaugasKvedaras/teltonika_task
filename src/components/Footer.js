import React from 'react';

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();

  return (
    <div className='app_footer'>
        <p>Ⓒ {currentYear}  Mindaugas Kvedaras. All rights reserved</p>
    </div>
  )
}

export default Footer;