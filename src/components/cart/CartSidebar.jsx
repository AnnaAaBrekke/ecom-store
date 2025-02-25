import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../stores/cartStore";
import { Close, KeyboardArrowLeft } from "@mui/icons-material";
import { calculateTotal } from "../../utils/calculateTotal";
import { CircularProgress } from "@mui/material";
import CartItem from "./CartItem";
import { navigateToCheckout } from "../../utils/navigateToCheckout";
import { StyledMainButton } from "../Buttons";
import { TotalContainer } from "./Cart";
import styled from "styled-components";
import { SubHeader } from "../../styles/Typography.style";

const CartSidebar = () => {
  const {
    cart,
    isCartOpen,
    toggleCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const totalAmount = calculateTotal(cart);
  const location = useLocation();
  const isCheckoutPage = location.pathname === "/checkout";

  return (
    <>
      {/* Toggle Button (Only show if cart is not empty and NOT on checkout) */}
      {cart.length > 0 && !isCheckoutPage && (
        <CartToggleButton onClick={toggleCart} isCartOpen={isCartOpen}>
          <KeyboardArrowLeft style={{ fontSize: 24 }} />
        </CartToggleButton>
      )}

      {/* Sidebar (Only show if cart is not empty and NOT on checkout) */}
      {cart.length > 0 && !isCheckoutPage && (
        <SidebarContainer isCartOpen={isCartOpen}>
          {/* Close Button */}
          <CloseButton onClick={toggleCart}>
            <Close />
          </CloseButton>
          <SubHeader>Your Cart</SubHeader>

          <CartSidebarList>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
                isSidebar={true}
              />
            ))}
          </CartSidebarList>

          {/* Total Amount & Checkout Button */}
          <TotalContainer>
            <CartTotal>Total: {totalAmount.toFixed(2)}kr</CartTotal>
            <StyledMainButton
              onClick={() => navigateToCheckout(setLoading, navigate)}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Checkout"}
            </StyledMainButton>
          </TotalContainer>
        </SidebarContainer>
      )}
    </>
  );
};

export default CartSidebar;

const CartToggleButton = styled.button`
  position: fixed;
  top: 80px;
  right: ${({ isCartOpen }) => (isCartOpen ? "280px" : "20px")};
  background: ${({ theme }) => theme.gradients.primaryGradient};
  :50% ;
  border: none;
  padding: 8px;
  cursor: pointer;
  transition: right 0.3s ease-in-out;
  box-shadow: ${({ theme }) => theme.shadows.strong};
  z-index: 1100;
  border-radius: 50%;

  &:hover {
    background: ${({ theme }) => theme.colors.accentLight};
  }

  svg {
    color: ${({ theme }) => theme.colors.white};
    font-size: 24px;
  }
`;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isCartOpen }) => (isCartOpen ? "0" : "-320px")};
  width: 250px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease-in-out;
  padding: 0.5rem;
  overflow-y: auto;
  z-index: 1000;
  border-left: 2px solid ${({ theme }) => theme.colors.grayLight};
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadiusSecondary};
  border: 3px solid ${({ theme }) => theme.colors.accent};
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.error};
  }
`;

const CartSidebarList = styled.ul`
  list-style: none;
  padding: 0;
  flex-grow: 1;
  overflow-y: auto;
`;

const CartTotal = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;
