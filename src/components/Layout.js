import { Outlet, Link } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
    <header>
        <Header />
    </header>
      <nav className='app_navbar'>
        <div className='app_navbar-links'>
            <div className='app_dropdown-menu'>
                <button className='app_dropdown-menu_home-btn'>
                    <Link to="/">Add new developers</Link>
                </button>
            </div>
          <div className='app_dropdown-menu'>
            <button className='app_dropdown-menu_btn'>Front-end developers</button>
            <div className='app_dropdown-menu_content'>
                <Link to="/junior-front-end-developers">Junior</Link>
                <Link to="/">Mid</Link>
                <Link to="/">Senior</Link>
            </div>  
          </div>
          <div className='app_dropdown-menu'>
            <button className='app_dropdown-menu_btn'>Back-end developers</button>
            <div className='app_dropdown-menu_content'>
                <Link to="/junior-front-end-developers">Junior</Link>
                <Link to="/">Mid</Link>
                <Link to="/">Senior</Link>
            </div>  
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;