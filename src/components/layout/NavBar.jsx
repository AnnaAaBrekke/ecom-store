import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";
import { CartSidebar, CartIcon } from "../cart";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" className="logo-link">
          Home Logo
        </Link>
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <CartIcon />
          <CartSidebar />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
