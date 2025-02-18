import React from "react";
import useCart from "../../stores/cartStore";
import { Link } from "react-router-dom";
import { calculateTotal } from "../../utils/calculateTotal";
import CartItem from "./CartItem";

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
          <CartItem
            key={item.id}
            item={item}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeFromCart={removeFromCart}
          />
        ))}
      </ul>
      <h2>Total Amount: {totalAmount.toFixed(2)}kr</h2>
    </div>
  );
};

export default Cart;
