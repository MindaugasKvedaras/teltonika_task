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
          <p>
            <Link to="/">New User</Link>
          </p>
          <p>
            <Link to="/userList">User List</Link>
          </p>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;