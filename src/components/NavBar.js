import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => (
  <div className="container">
    <div id="navBar">
      <nav id="links">
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/tree">Family Tree</Link>
        <Link to="/writing">Writing</Link>
        <Link to="/photos">All Photos</Link>
      </nav>
    </div>
  </div>
);

export default NavBar;
