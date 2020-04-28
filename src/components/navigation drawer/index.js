import React from "react";
import { NavLink } from "react-router-dom";
import "./navigationDrawer.css";
import CloseIcon from "../../assets/images/close-icon.svg";
export default function NavigationDrawer({ updateNavigation, setLeft, left }) {
  return (
    <>
      <div class="navigation-drawer" style={{ left: left }}>
        <img
          src={CloseIcon}
          alt=""
          className="close-icon"
          onClick={() => {
            updateNavigation(false);
            setLeft("-60vw");
          }}
        />
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
      {left == '0vw' ? <div className="closerDiv" onClick={() => {
            updateNavigation(false);
            setLeft("-60vw");
          }}></div> : null}
    </>
  );
}
