import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useCart from "../stores/cartStore";

const CartIcon = () => {
  const cartCount = useCart((state) => state.cart.length);

  return (
    <div>
      <Link to="/checkout">
        <ShoppingCartIcon style={{ fontSize: 30, color: "#333" }} />
        {cartCount > 0 && <span>{cartCount}</span>}
      </Link>
    </div>
  );
};

export default CartIcon;
