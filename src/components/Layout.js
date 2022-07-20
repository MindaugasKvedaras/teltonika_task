import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import { Divide as Hamburger } from 'hamburger-react';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const [isOpen, setOpen] = useState(false);
  const closeHamburger = () => {
    setOpen(false);
  }

  return (
    <>
    <header>
        <Header />
    </header>
        <div className='app_navbar-links_desktop'>
              <div className='app_dropdown-menu'>
                  <button className='app_dropdown-menu_home-btn'>
                      <Link to="/">Add new developers</Link>
                  </button>
              </div>
            <div className='app_dropdown-menu'>
              <button className='app_dropdown-menu_btn'>Front-end developers</button>
              <div className='app_dropdown-menu_content'>
                  <Link to="/junior-front-end-developers">Junior</Link>
                  <Link to="/senior-front-end-developers">Senior</Link>
              </div>  
            </div>
            <div className='app_dropdown-menu'>
              <button className='app_dropdown-menu_btn'>Back-end developers</button>
              <div className='app_dropdown-menu_content'>
                  <Link to="/junior-back-end-developers">Junior</Link>
                  <Link to="/senior-back-end-developers">Senior</Link>
              </div>  
            </div>
            <div className='app_dropdown-menu'>
                  <button className='app_dropdown-menu_home-btn'>
                      <Link to="/search-developer">Search developer</Link>
                  </button>
              </div>
          </div>
          <Hamburger color="#0078AA" fontSize={27} toggled={isOpen} toggle={setOpen} />
          {isOpen && (
            <div className='app_navbar-links'>
              <div className='app_dropdown-menu'>
                  <button className='app_dropdown-menu_home-btn'>
                      <Link to="/" onClick={closeHamburger}>Add new developers</Link>
                  </button>
              </div>
            <div className='app_dropdown-menu'>
              <button className='app_dropdown-menu_btn'>Front-end developers</button>
              <div className='app_dropdown-menu_content'>
                  <Link to="/junior-front-end-developers" onClick={closeHamburger}>Junior</Link>
                  <Link to="/senior-front-end-developers" onClick={closeHamburger}>Senior</Link>
              </div>  
            </div>
            <div className='app_dropdown-menu'>
              <button className='app_dropdown-menu_btn'>Back-end developers</button>
              <div className='app_dropdown-menu_content'>
                  <Link to="/junior-back-end-developers" onClick={closeHamburger}>Junior</Link>
                  <Link to="/senior-back-end-developers" onClick={closeHamburger}>Senior</Link>
              </div>  
            </div>
            <div className='app_dropdown-menu'>
                  <button className='app_dropdown-menu_home-btn'>
                      <Link to="/search-developer" onClick={closeHamburger}>Search developer</Link>
                  </button>
              </div>
          </div>
          )}
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </>
  )
};

export default Layout;