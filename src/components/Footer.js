import React from 'react';

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();

  return (
    <div className='app_footer'>
        <p>Ⓒ {currentYear}  Mindaugas Kvedaras. Visos teisės saugomos</p>
    </div>
  )
}

export default Footer;