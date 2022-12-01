import React from "react";
import "./Nav.css";
import search from "../../Asset/icon/search.png";
import user from "../../Asset/icon/user.png";
import cart from "../../Asset/icon/shopping.png";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar  nav__head">
        <div className="container-fluid">
          <span className="fw-bold fs-5 mx-3 mb-3">TEST</span>
          <div>
            <ul className="nav_navigation">
              <li>Track order</li>
              <div className="line"></div>

              <div>
                <img src={search} alt="search"></img>
              </div>
              <div className="line"></div>
              <div>
                <img src={user} alt="user"></img>
              </div>
              <div className="line"></div>
              <div>
                <img src={cart} alt="cart"></img>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
