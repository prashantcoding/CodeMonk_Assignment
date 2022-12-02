import React from "react";
import "./Nav.css";
import search from "../../Asset/icon/search.png";
import user from "../../Asset/icon/user.png";
import cart from "../../Asset/icon/shopping.png";
import { Link } from "react-router-dom";
import logo from "../../Asset/Images/logo.png";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar  nav__head">
        <div className="container-fluid">
          <Link to="/">
            <span className="fw-bold fs-5 mx-3 mb-3">
              <img src={logo}></img>
            </span>
          </Link>
          <div>
            <ul className="nav_navigation">
              <li className="hide">Track order</li>
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
                <Link to="/cart">
                  <img src={cart} alt="cart"></img>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
