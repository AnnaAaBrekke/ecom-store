// components/CartItem.js
import React from "react";
import QuantityCounter from "./Quantity";

const CartItem = ({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) => {
  return (
    <li
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
          <h4 style={{ margin: "0 0 5px", color: "black" }}>{item.title}</h4>
          <QuantityCounter
            quantity={item.quantity}
            onIncrease={() => increaseQuantity(item.id)}
            onDecrease={() => decreaseQuantity(item.id)}
          />
        </div>
      </div>
      <p style={{ marginTop: "5px", color: "black" }}>
        Price:{" "}
        <strong>
          {(
            Math.round(item.discountedPrice * item.quantity * 100) / 100
          ).toFixed(2)}
          kr
        </strong>
      </p>
      {item.price > item.discountedPrice && (
        <p style={{ color: "red", textDecoration: "line-through" }}>
          Original Price:{" "}
          {(Math.round(item.price * item.quantity * 100) / 100).toFixed(2)}
          kr
        </p>
      )}
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
  );
};

export default CartItem;
