import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem, Nav } from "react-bootstrap";

const NavBar = props => (
  <div id="navbar">
    <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Home</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="/gallery">
            Gallery
          </NavItem>
          <NavItem eventKey={2} href="/tree">
            Family Tree
          </NavItem>
          <NavItem eventKey={2} href="/writing">
            Writing
          </NavItem>
          <NavItem eventKey={2} href="/photos">
            Photos
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    {/* <nav className="navbar-toggle" id="links">
      <Link to="/">Home</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/tree">Family Tree</Link>
      <Link to="/writing">Writing</Link>
      <Link to="/photos">All Photos</Link>
    </nav> */}
  </div>
);

export default NavBar;
