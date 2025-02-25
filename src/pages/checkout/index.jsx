import React from "react";
import useCart from "../../stores/cartStore";
import { Cart } from "../../components/cart";
import { Heading, SubHeader } from "../../styles/Typography.style";

const CheckoutPage = () => {
  const cart = useCart((state) => state.cart);

  return (
    <div>
      <Heading>Checkout Page</Heading>
      <SubHeader>Your Cart</SubHeader>
      <Cart cart={cart} />
    </div>
  );
};

export default CheckoutPage;
