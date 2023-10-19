import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import "./NavBar.css";

function NavBar() {
  return (
    <div> 
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
        </NavLink>
        <Nav className="ml-auto" navbar >
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
            <NavLink to="/logout">Log out</NavLink>
            {/* todo: insert name into logout */}
            </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
