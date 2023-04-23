import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Header.style.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header-logo">Barcelona Example Map</div>
          <ul className="header-ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/map">Map</Link>
            </li>
            <li>
              <Link to="/panel">Panel</Link>
            </li>
          </ul>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Header;
