import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import LogoFull from "../../assets/images/logo-1.png";
export default function Navbar() {
  return (
    <div className="navbar light">
      <ul className="navbar-links">
        <div className="navlink navlink-left">
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="active-navlink"
              className="navbar-link text-light-blue"
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/produtos"
              activeClassName="active-navlink"
              className="navbar-link text-light-blue"
            >
              PRODUTOS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobre"
              activeClassName="active-navlink"
              className="navbar-link text-light-blue"
            >
              SOBRE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/discord"
              activeClassName="active-navlink"
              className="navbar-link text-light-blue"
            >
              DISCORD
            </NavLink>
          </li>
        </div>
        <div className="navlink navlink-right">
          <li>
            <img className="navbar-img" src={LogoFull} alt="logo coddei" />
          </li>
        </div>
      </ul>
    </div>
  );
}
