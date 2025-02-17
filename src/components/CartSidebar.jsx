import React from "react";
import { useLocation, Link } from "react-router-dom";
import useCart from "../stores/cartStore";
import { KeyboardArrowLeft } from "@mui/icons-material";

const CartSidebar = () => {
  const {
    cart,
    isCartOpen,
    toggleCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const location = useLocation();
  const isCheckoutPage = location.pathname === "/checkout"; // Detect if on checkout page

  // Calculate total price
  const totalAmount = cart.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );

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
              <li
                key={item.id}
                style={{
                  borderBottom: "1px solid #ddd",
                  padding: "10px 0",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={item.image?.url || "/placeholder.jpg"}
                    alt={item.image?.alt || item.title}
                    style={{
                      width: "50px",
                      height: "auto",
                      marginRight: "10px",
                      borderRadius: "5px",
                    }}
                  />
                  <div>
                    <h4 style={{ margin: "0 0 5px", color: "black" }}>
                      {item.title}
                    </h4>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        color: "black",
                      }}
                    >
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={item.quantity === 1}
                        style={{
                          border: "none",
                          background: "#ddd",
                          padding: "4px 8px",
                          cursor: "pointer",
                          borderRadius: "5px",
                        }}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        style={{
                          border: "none",
                          background: "#ddd",
                          padding: "4px 8px",
                          cursor: "pointer",
                          borderRadius: "5px",
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <p style={{ marginTop: "5px", color: "black" }}>
                  Price:{" "}
                  <strong>
                    {(
                      Math.round(item.discountedPrice * item.quantity * 100) /
                      100
                    ).toFixed(2)}
                    kr
                  </strong>
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    color: "red",
                    cursor: "pointer",
                    border: "none",
                    background: "none",
                    textAlign: "left",
                  }}
                >
                  Remove
                </button>
              </li>
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
            <Link to="/checkout">
              <button
                onClick={toggleCart} // Close sidebar when going to checkout
                style={{
                  width: "100%",
                  background: "green",
                  color: "white",
                  padding: "10px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CartSidebar;
