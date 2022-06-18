import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";

const Navbar = () => {
  return (
    <div className="nav-div">
      <ul>
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
      </ul>
      <div>
        <img
          className="iimg"
          src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
          alt=""
        />
        <input type="text" placeholder="Search " className="search" />
        <Link to="/Signin">
          {" "}
          <button id="sign"> Sign In </button>{" "}
        </Link>

        <img
          className="heart"
          src="https://www.iconpacks.net/icons/2/free-heart-icon-3510-thumb.png"
          alt=""
        />
        <Link to="/Cart">
          {" "}
          <img
            className="cartimg"
            src="https://www.kindpng.com/picc/m/443-4431015_website-shopping-bag-icon-hd-png-download.png"
            alt=""
          />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
