import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./NavBar.css";
import UserContext from "../repeated/UserContext";
import { 
  Navbar, 
  Nav, 
  NavItem 
} from "reactstrap";

/**
 * Display nav bar
 *
 */

function NavBar({logout}) {

   /** Get user from context*/

  const { user } = useContext(UserContext);

     /** If user get first name*/
  if(user) {

   const firstName = user.firstName
  }

    /** Render nav bar */

  return (
    <div> 
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">Jobly
        </NavLink>
        <Nav className="ml-auto" navbar >
          {user && <> (
            <NavItem className="Navbar-Companies">
              <NavLink to="/companies">Companies</NavLink>
            </NavItem>
            <NavItem className="Navbar-Jobs">
              <NavLink to="/jobs">Jobs</NavLink>
            </NavItem>
            <NavItem className="Navbar-Jobs">
              <NavLink to="/profile">Profile</NavLink>
            </NavItem>
            <NavItem className="Navbar-Logout">
              <Link to="/" onClick={logout}>Logout {user.firstName}</Link>
            </NavItem>
          ) </>}

          { !user && <>
              <NavItem className="Navbar-Signup">
                <NavLink to="/signup">Signup</NavLink>
              </NavItem>
              <NavItem className="Navbar-Login">
                <NavLink to="/login"  activeClassName="active">Login</NavLink>
              </NavItem>
          </> }
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
