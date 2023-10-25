import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.css';
import UserContext from "../repeated/UserContext";

function NavBar({logout}) {
  // console.log("user:", user)
  // const { firstName } = user
  // console.log("firstName:", firstName)
  const { user } = useContext(UserContext);
  // console.log("user in Navbar:", user)

  if(user) {
    // console.log("if statement is running")
    // console.log("user in if statement:", user)
    // console.log("user.firstName:", user.firstName)
   const firstName = user.firstName

    // console.log("firstName:", firstName)

  }


  // console.log("user in nav", user.firstName)
  // !taking break will have to come back to getting user information out
  // !also note prefilling login page would be a good idea

// todo: insert name into logout. 

  return (
    <div> 
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">Jobly
        </NavLink>
        <Nav className="ml-auto" navbar >
          {user && <> (
            {/* <NavItem className="Navbar-Jobly">
              <NavLink to="/">Jobly</NavLink>
            </NavItem> */}
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
