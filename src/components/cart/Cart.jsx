import React from "react";
import useCart from "../../stores/cartStore";
import { Link } from "react-router-dom";
import { calculateTotal } from "../../utils/calculateTotal";
import CartItem from "./CartItem";
import styled from "styled-components";
import { CheckoutButton } from "../Buttons";

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
      <TotalContainer>
        <StyledTotal>Total Amount: {totalAmount.toFixed(2)}kr</StyledTotal>
        {cart.length > 0 && <CheckoutButton />}
      </TotalContainer>
    </div>
  );
};

export default Cart;

// Styled Components
export const StyledTotal = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary}; /* Use theme's primary color */
  margin-top: 20px;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 15px;
  border-top: 2px solid ${({ theme }) => theme.colors.accent}; /* Subtle separator */
  border-bottom: 2px solid ${({ theme }) => theme.colors.accent}; /* Subtle separator */
`;
