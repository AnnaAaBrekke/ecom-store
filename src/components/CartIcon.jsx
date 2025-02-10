import React from "react";
import { Link } from "react-router-dom";

const CartIcon = () => {
  const cartCount = 0; // Replace later with actual function

  return (
    <div>
      <Link to="/cart">
        🛒 <span className="cart-count">{cartCount}</span>
      </Link>
    </div>
  );
};

export default CartIcon;
