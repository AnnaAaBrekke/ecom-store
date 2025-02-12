import React, { useEffect } from "react";
import useCart from "../../stores/cartStore";
import { Link } from "react-router-dom";

const CheckoutSuccessPage = () => {
  const clearCart = useCart((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  
  return (
    <div>
      <h1>Checkout Success!</h1>
      <h2>Your order has been placed successfully.</h2>
      <p>Your cart is now empty.</p>
      <Link to="/">Go Back To Shopping</Link>
    </div>
  );
};

export default CheckoutSuccessPage;
