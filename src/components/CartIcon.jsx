import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useCart from "../stores/cartStore";

// - [ ] cart —> display it sidebar
// - [ ] cart —> remove item from cart


const CartIcon = () => {
  const totalItems = useCart((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Link to="/checkout">
        <ShoppingCartIcon style={{ fontSize: 30, color: "#333" }} />
        {totalItems > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-5px",
              right: "-10px",
              backgroundColor: "orange",
              color: "white",
              borderRadius: "50%",
              padding: "4px 8px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {totalItems}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartIcon;
