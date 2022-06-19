import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-div">
      <ul className="li-part">
        <h3>J.CREW</h3>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>New</li>
        <li>
          <Link to="/womens">Womens</Link>
        </li>
        <li>
          <Link to="/mens">Mens</Link>
        </li>
        <li>
          <Link to="/kids">Kids</Link>
        </li>
        <li>Swim</li>
        <li>Cashmere</li>
        <li>Stories</li>
        <img
          className="search-img"
          src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
          alt=""
        />
        <input type="text" placeholder="Search " className="search" />
        <Link to="#">
          <button id="sign"> Sign In </button>{" "}
        </Link>

        <img
          className="heart-img"
          src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png"
          alt=""
        />
        <Link to="/cart">
          <img
            className="cart-img"
            src="https://www.kindpng.com/picc/m/443-4431015_website-shopping-bag-icon-hd-png-download.png"
            alt=""
          />
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
