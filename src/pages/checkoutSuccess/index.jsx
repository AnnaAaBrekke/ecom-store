import React, { useEffect } from "react";
import useCart from "../../stores/cartStore";
import { Link } from "react-router-dom";
import { Heading, SubHeader } from "../../styles/Typography.style";

const CheckoutSuccessPage = () => {
  const clearCart = useCart((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div>
      <Heading>Checkout Success!</Heading>
      <SubHeader>Your order has been placed successfully.</SubHeader>
      <p>Your cart is now empty.</p>
      <br></br>
      <Link to="/">Go Back To Shopping</Link>
    </div>
  );
};

export default CheckoutSuccessPage;
