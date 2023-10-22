import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import "./NavBar.css";


function NavBar({logout, user}) {
  console.log("user:", user)
  // const { firstName } = user
  // console.log("firstName:", firstName)

  if(user) {
   const { firstName } = user
    console.log("firstName:", firstName)
  }


  // console.log("user in nav", user.firstName)
  // !taking break will have to come back to getting user information out
  // !also note prefilling login page would be a good idea

// todo: insert name into logout. 

  return (
    <div> 
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
        </NavLink>
        <Nav className="ml-auto" navbar >
          {user && <> (
            <NavItem className="Navbar-Jobly">
              <NavLink to="/">Jobly</NavLink>
            </NavItem>
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
              <Link to="/" onClick={logout}>Logout</Link>
            </NavItem>
          ) </>}

          { !user && <>(
              <NavItem className="Navbar-Signup">
                <NavLink to="/signup">Signup</NavLink>
              </NavItem>
              <NavItem className="Navbar-Login">
                <Link to="/login">Login</Link>
              </NavItem>
          )</> }
            {/* <NavItem className="Navbar-Logout">
            <NavLink to="/logout">Log out</NavLink>
            </NavItem> */}
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
