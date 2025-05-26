import React from "react";
import useCart from "../../stores/cartStore";
import { calculateTotal } from "../../utils/calculateTotal";
import CartItem from "./CartItem";
import styled from "styled-components";
import { CheckoutButton } from "../buttons/Buttons";
import { Paragraph } from "../../styles/Typography.style";
import { BackToShopLink } from "../../styles/Navbar.style";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  const totalAmount = calculateTotal(cart);

  if (cart.length === 0) {
    return (
      <StyledEmptyContainer>
        <Paragraph> Your cart is empty.</Paragraph>
        <br />
        <BackToShopLink to="/">Go Back To Shopping</BackToShopLink>
      </StyledEmptyContainer>
    );
  }

  return (
    <>
      <StyledCartList>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeFromCart={removeFromCart}
          />
        ))}
      </StyledCartList>
      <TotalContainer>
        <StyledTotal>Total Amount: {totalAmount.toFixed(2)}kr</StyledTotal>
        {cart.length > 0 && <CheckoutButton />}
      </TotalContainer>
    </>
  );
};

export default Cart;

// Styled Components
const StyledCartList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  gap: 1rem;
  background: ${({ theme }) => theme.colors.background};
  padding: 20px;
  margin: 2rem auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

export const StyledTotal = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 15px;
  border-top: 2px solid ${({ theme }) => theme.colors.accent};
  border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
`;

export const StyledEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
