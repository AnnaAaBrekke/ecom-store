import React from "react";
import useCart from "../stores/cartStore";
import { Link } from "react-router-dom";

// - [ ] cart —> able to remove item from checkoutpage and totalamount updates accordingly

const Cart = () => {
  const { cart, removeFromCart } = useCart();

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

  // const totalAmount = useCart((state) =>
  //   state.cart.reduce(
  //     (total, item) => total + item.discountedPrice * item.quantity,
  //     0
  //   )
  // );

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
            <p>Quantity: {item.quantity}</p>
            <p>
              Price: <strong>{item.discountedPrice * item.quantity}kr</strong>
            </p>
            {item.price > item.discountedPrice && (
              <p style={{ color: "red", textDecoration: "line-through" }}>
                Original Price: {item.price * item.quantity}kr
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
