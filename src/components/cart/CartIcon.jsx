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
