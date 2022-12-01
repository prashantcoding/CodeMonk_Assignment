import React from "react";
import "./Nav.css";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar  nav__head">
        <div className="container-fluid">
          <span className="fw-bold fs-5 mx-3">TEST</span>
          <div>
            <ul className="nav_navigation">
              <li>Track order</li>
              <div className="line"></div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
