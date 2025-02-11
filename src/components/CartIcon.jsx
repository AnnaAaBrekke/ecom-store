import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartIcon = () => {
  const cartCount = 0; // Replace later with actual function

  return (
    <div>
      <Link to="/checkout">
        <ShoppingCartIcon style={{ fontSize: 30, color: "#333" }} />
        <span className="cart-count">{cartCount}</span>
      </Link>
    </div>
  );
};

export default CartIcon;
