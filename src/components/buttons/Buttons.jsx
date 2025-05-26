/**
 * Button Components
 *
 * Contains reusable button components for checkout and form submission.
 *
 * Components:
 * - CheckoutButton:
 *   Triggers a checkout action with a loading state and redirects to the checkout success page.
 *
 * - SubmitFormButton:
 *   Displays a submit button for forms, showing a loading state while submission is in progress.
 *
 * @returns {JSX.Element} The respective button elements with loading states.
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "../../styles/Product.style";

export const CheckoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      document.getElementById("checkout-link").click();
    }, 2000);
  };

  return (
    <>
      <StyledMainButton onClick={handleCheckout} disabled={isLoading}>
        {isLoading ? "Processing..." : "Checkout"}
      </StyledMainButton>
      <Link to="/checkoutSuccess" id="checkout-link" />
    </>
  );
};

export const SubmitFormButton = ({ isLoading }) => {
  return (
    <ButtonContainer>
      <StyledMainButton type="submit" disabled={isLoading}>
        {isLoading ? "Sending..." : "Submit Message"}
      </StyledMainButton>
    </ButtonContainer>
  );
};

export const StyledMainButton = styled.button`
  display: flex;
  align-items: right;
  gap: 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 12px 18px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadiusSecondary};
  cursor: pointer;
  transition: 0.3s;
  justify-content: flex-end;
  margin-bottom: 6px;
`;
