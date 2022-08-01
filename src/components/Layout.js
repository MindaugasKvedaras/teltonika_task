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
          <Link to="/">
              <div className='app_dropdown-menu'>
                  <button className='app_dropdown-menu_home-btn'>
                      <p>Add new developers</p>
                  </button>
              </div>
          </Link>    
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
            <Link to="/search-developer">
            <div className='app_dropdown-menu'>
                  <button className='app_dropdown-menu_home-btn'>
                      <p>Search developer</p>
                  </button>
              </div>
            </Link>  
          </div>
          <Hamburger color="#0078AA" fontSize={27} toggled={isOpen} toggle={setOpen} />
          {isOpen && (
            <div className='app_navbar-links'>
            <Link to="/" onClick={closeHamburger}>
              <div className='app_dropdown-menu'>
                  <button className='app_dropdown-menu_home-btn'>
                      <p>Add new developers</p>
                  </button>
              </div>
            </Link>  
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
            <Link to="/search-developer" onClick={closeHamburger}>
              <div className='app_dropdown-menu'>
                  <button className='app_dropdown-menu_home-btn'>
                      <p>Search developer</p>
                  </button>
              </div>
            </Link>  
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