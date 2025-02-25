import React, { useEffect } from "react";
import useCart from "../../stores/cartStore";
import { Heading, Paragraph, SubHeader } from "../../styles/Typography.style";
import { CheckCircleOutline } from "@mui/icons-material";
import styled from "styled-components";
import { BackToShopLink } from "../../styles/Navbar.style";

const CheckoutSuccessPage = () => {
  const clearCart = useCart((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <StyledSuccessPage>
      <CheckCircleOutline style={{ color: "green", fontSize: "60px" }} />
      <Heading>Checkout Success!</Heading>
      <SubHeader>Your order has been placed successfully.</SubHeader>
      <Paragraph>Your cart is now empty.</Paragraph>
      <br></br>
      <BackToShopLink to="/">Go Back To Shopping</BackToShopLink>
    </StyledSuccessPage>
  );
};

export default CheckoutSuccessPage;

const StyledSuccessPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;
