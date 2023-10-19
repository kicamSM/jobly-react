import React from "react";
// import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import "./Navbar.css";

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/">Jobly</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/companies">Companies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/jobs">Jobs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile">Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/logout">Log out</NavLink>
            {/* todo: insert name into logout */}
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
