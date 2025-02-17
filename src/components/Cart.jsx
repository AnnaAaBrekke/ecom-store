import React from "react";
import useCart from "../stores/cartStore";

// - [ ] cart —> able to remove item from checkoutpage and totalamount updates accordingly


const Cart = ({ cart }) => {
  if (!cart || cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  const totalAmount = useCart((state) =>
    state.cart.reduce(
      (total, item) => total + item.discountedPrice * item.quantity,
      0
    )
  );

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
          </li>
        ))}
      </ul>
      <h2>Total Amount: {totalAmount.toFixed(2)}kr</h2>
    </div>
  );
};

export default Cart;
