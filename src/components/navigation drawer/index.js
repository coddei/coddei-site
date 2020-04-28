import React from "react";
import { NavLink } from "react-router-dom";
import "./navigationDrawer.css";
export default function NavigationDrawer() {
  return (
    <div class="navigation-drawer">
      <ul>
        <li className="navigation-item">
          <NavLink
            exact
            to="/"
            activeClassName="active-navlink"
            className="navbar-link text-light-blue"
          >
            HOME
          </NavLink>
        </li>
        <li className="navigation-item">
          <NavLink
            to="/produtos"
            activeClassName="active-navlink"
            className="navbar-link text-light-blue"
          >
            PRODUTOS
          </NavLink>
        </li>
        <li className="navigation-item">
          <NavLink
            to="/sobre"
            activeClassName="active-navlink"
            className="navbar-link text-light-blue"
          >
            SOBRE
          </NavLink>
        </li>
        <li className="navigation-item">
          <NavLink
            to="/sobre"
            activeClassName="active-navlink"
            className="navbar-link text-light-blue"
          >
            DISCORD
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
