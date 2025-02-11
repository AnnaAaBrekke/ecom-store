import React from "react";
import useCart from "../../stores/cartStore";

const Checkout = () => {
  const cart = useCart((state) => state.cart); // Get the cart items

  // Total Amount Function

  return (
    <div>
      <h1>Checkout Page</h1>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img
                  src={item.image.url}
                  alt={item.image.alt || item.title}
                  style={{ width: "100px", height: "auto", objectFit: "cover" }}
                />
                <h3>{item.title}</h3>
                <p>Quantity:{item.quantity}</p>
                <p>
                  Price:{" "}
                  <strong>{item.discountedPrice * item.quantity}kr</strong>
                </p>
                {item.price > item.discountedPrice && (
                  <p style={{ color: "red", textDecoration: "line-through" }}>
                    Original Price: {item.price * item.quantity}kr
                  </p>
                )}
              </li>
            ))}
          </ul>
          <h2>Total Amount: fix it my self</h2>
          <button
            onClick={(
              {
                /* directs link to checkout success page */
              }
            ) => {
              alert("Do you want to checkout?");
            }}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
