import React from "react";
import useCart from "../../stores/cartStore";
import { Cart } from "../../components/cart";

const CheckoutPage = () => {
  const cart = useCart((state) => state.cart);

  return (
    <div>
      <h1>Checkout Page</h1>
      <h2>Your Cart</h2>
      <Cart cart={cart} />
    </div>
  );
};

export default CheckoutPage;
