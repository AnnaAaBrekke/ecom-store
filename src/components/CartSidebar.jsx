import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../stores/cartStore";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { calculateTotal } from "../utils/calculateTotal";
import { CircularProgress } from "@mui/material";
import CartItem from "./CartItem";
import { navigateToCheckout } from "../utils/navigateToCheckout";

const CartSidebar = () => {
  const {
    cart,
    isCartOpen,
    toggleCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const totalAmount = calculateTotal(cart);
  const location = useLocation();
  const isCheckoutPage = location.pathname === "/checkout";

  return (
    <>
      {/* Only show the toggle button if the cart is not empty and NOT on checkout */}
      {cart.length > 0 && !isCheckoutPage && (
        <button
          onClick={toggleCart}
          style={{
            position: "fixed",
            top: "60px",
            right: isCartOpen ? "300px" : "20px",
            background: "white",
            border: "1px solid #ddd",
            borderRadius: "50%",
            padding: "8px",
            cursor: "pointer",
            transition: "right 0.3s ease-in-out",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
            zIndex: 1100,
          }}
        >
          <KeyboardArrowLeft style={{ fontSize: 24, color: "#333" }} />
        </button>
      )}

      {/* Only show the sidebar if cart is not empty and NOT on checkout */}
      {cart.length > 0 && !isCheckoutPage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: isCartOpen ? "0" : "-320px",
            width: "300px",
            height: "100vh",
            background: "white",
            boxShadow: "-2px 0px 10px rgba(0,0,0,0.1)",
            transition: "right 0.3s ease-in-out",
            padding: "10px",
            overflowY: "auto",
            zIndex: 1000,
            borderLeft: "2px solid #eee",
          }}
        >
          {/* Close Button */}
          <button
            onClick={toggleCart}
            style={{
              float: "right",
              background: "transparent",
              border: "none",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            ❌
          </button>
          <h2 style={{ marginBottom: "20px", color: "navy" }}>Shopping Cart</h2>

          <ul style={{ padding: 0, listStyle: "none" }}>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>

          {/* Total Amount & Checkout Button */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              width: "calc(100% - 40px)",
              padding: "10px 20px",
              background: "white",
              borderTop: "2px solid #eee",
              color: "black",
            }}
          >
            <h3>Total: {totalAmount.toFixed(2)}kr</h3>

            <button
              onClick={() => navigateToCheckout(setLoading, navigate)}
              disabled={loading}
              style={{
                cursor: loading ? "not-allowed" : "pointer",
                width: "100%",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Checkout"
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartSidebar;
