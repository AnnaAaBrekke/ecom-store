import React, { useEffect } from "react";
import useCart from "../../stores/cartStore";
import { Link } from "react-router-dom";
import { Heading, Paragraph, SubHeader } from "../../styles/Typography.style";
import { CheckCircleOutline } from "@mui/icons-material";
import styled from "styled-components";

const CheckoutSuccessPage = () => {
  const clearCart = useCart((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <SuccessContainer>
      <CheckCircleOutline style={{ color: "green", fontSize: "60px" }} />
      <Heading>Checkout Success!</Heading>
      <SubHeader>Your order has been placed successfully.</SubHeader>
      <Paragraph>Your cart is now empty.</Paragraph>
      <br></br>
      <BackToShopLink to="/">Go Back To Shopping</BackToShopLink>
    </SuccessContainer>
  );
};

export default CheckoutSuccessPage;

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

const BackToShopLink = styled(Link)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadiusSecondary};
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: scale(1.05);
  }
`;
