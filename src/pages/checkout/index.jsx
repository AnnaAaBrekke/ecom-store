import React from "react";
import useCart from "../../stores/cartStore";
import CheckoutButton from "../../components/Button";

const Checkout = () => {
  const cart = useCart((state) => state.cart);

  const totalAmount = useCart((state) =>
    state.cart.reduce(
      (total, item) => total + item.discountedPrice * item.quantity,
      0
    )
  );

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
          <h2>Total Amount: {totalAmount.toFixed(2)}kr</h2>
          <CheckoutButton />
        </div>
      )}
    </div>
  );
};

export default Checkout;
