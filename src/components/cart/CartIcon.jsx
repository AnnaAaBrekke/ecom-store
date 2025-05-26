/**
 * CartIcon Component
 *
 * Displays the shopping cart icon in the navigation bar,
 * showing the total number of items currently in the cart.
 *
 * Features:
 * - Shows a shopping cart icon using Material UI.
 * - Displays a loading spinner when navigating to the checkout.
 * - Shows a counter badge with the total item count if there are items in the cart.
 * - On click, triggers navigation to the checkout page.
 *
 * Hooks:
 * @uses useCart - Retrieves the cart state from the global store.
 * @uses useNavigate - Navigates to the checkout page.
 *
 * @returns {JSX.Element} The styled cart icon component.
 */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../stores/cartStore";
import { CircularProgress } from "@mui/material";
import { navigateToCheckout } from "../../utils/navigateToCheckout";
import {
  CartIconButton,
  CartIconCounter,
  StyledCartItemContainer,
  StyledShoppingCartIcon,
} from "../../styles/Navbar.style";

const CartIcon = () => {
  const { cart } = useCart();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <StyledCartItemContainer>
      <CartIconButton
        onClick={() => navigateToCheckout(setLoading, navigate)}
        disabled={loading}
      >
        {loading ? (
          <CircularProgress size={30} color="inherit" />
        ) : (
          <StyledShoppingCartIcon />
        )}

        {totalItems > 0 && !loading && (
          <CartIconCounter>{totalItems}</CartIconCounter>
        )}
      </CartIconButton>
    </StyledCartItemContainer>
  );
};

export default CartIcon;
