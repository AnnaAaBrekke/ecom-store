import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useCart from "../../stores/cartStore";
import { CircularProgress } from "@mui/material";
import { navigateToCheckout } from "../../utils/navigateToCheckout";

const CartIcon = () => {
  const { cart } = useCart();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => navigateToCheckout(setLoading, navigate)}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          position: "relative",
        }}
        disabled={loading} // Disable button when loading
      >
        {loading ? (
          <CircularProgress size={30} color="inherit" /> // Show spinner when loading
        ) : (
          <ShoppingCartIcon style={{ fontSize: 30, color: "#ccc" }} />
        )}
        {totalItems > 0 && !loading && (
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
      </button>
    </div>
  );
};

export default CartIcon;
