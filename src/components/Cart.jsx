import React from "react";
import useCart from "../stores/cartStore";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  const totalAmount = cart.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <p>
        Your cart is empty.
        <Link to="/">Go Back To Shopping</Link>
      </p>
    );
  }

  return (
    <div>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img
              src={item.image?.url || "/placeholder.jpg"}
              alt={item.image?.alt || item.title}
              style={{ width: "100px", height: "auto", objectFit: "cover" }}
            />
            <h3>{item.title}</h3>

            <div>
              <button
                onClick={() => decreaseQuantity(item.id)}
                disabled={item.quantity === 1}
              >
                -
              </button>
              <input type="number" value={item.quantity} min={1} readOnly />
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>

            <p>
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
                {(Math.round(item.price * item.quantity * 100) / 100).toFixed(
                  2
                )}
                kr
              </p>
            )}
            <button
              className="remove-button"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h2>Total Amount: {totalAmount.toFixed(2)}kr</h2>
    </div>
  );
};

export default Cart;
