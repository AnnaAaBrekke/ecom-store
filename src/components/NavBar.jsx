import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">Home logo</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <CartIcon />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
