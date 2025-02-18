import React from "react";
import useCart from "../stores/cartStore";
import { Link } from "react-router-dom";
import { calculateTotal } from "../utils/calculateTotal";
import QuantityCounter from "./Quantity";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  const totalAmount = calculateTotal(cart);

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
              src={item.image?.url || "https://placehold.co/400"}
              alt={item.image?.alt || item.title}
              style={{ width: "100px", height: "auto", objectFit: "cover" }}
            />
            <h3>{item.title}</h3>

            <QuantityCounter
              quantity={item.quantity}
              onIncrease={() => increaseQuantity(item.id)}
              onDecrease={() => decreaseQuantity(item.id)}
            />

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
