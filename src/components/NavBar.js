import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'


const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact activeClassName="active">Home</NavLink>
      <NavLink to="/actors" activeClassName="active">Actors</NavLink>
      <NavLink to="/directors" activeClassName="active">Directors</NavLink>
    </div>
  );
};

export default NavBar;
