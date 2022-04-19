import { NavLink } from "react-router-dom";
import './NavBar.css';
import { useSelector } from "react-redux";

const NavBar = () => {

    const isLoggedIn = useSelector((state) => state.login.value);
    const account = useSelector((state) => state.account.value);

    return (<>
      
      <nav className='main-nav'>

        <div className='logo'>
            <h2>
                <span>S</span>mart
                <span> D</span>airy
            </h2>
        </div>

        <div
          className="menu-link">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            { !isLoggedIn &&
            <li>
              <NavLink to="/login">Login</NavLink>
            </li> }
            { isLoggedIn &&
            <li>
              <NavLink to="/add">Add Dairy</NavLink>
            </li> }
            { isLoggedIn &&
            <li>
              <NavLink to="/view">View Dairy</NavLink>
            </li> }
            { isLoggedIn &&
            <li>
              <NavLink to="/logout">Logout</NavLink>
            </li> }
          </ul>
        </div>
        
        <div className="account-number">
          <p>{account}</p>
        </div>
      </nav>
    </>
    );

}

export default NavBar;