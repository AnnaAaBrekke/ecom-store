import React from "react";
import { CartSidebar, CartIcon } from "../cart";
import {
  LogoImage,
  LogoLink,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLinkStyled,
} from "../../styles/Navbar.style";

function Navbar() {
  return (
    <NavbarContainer>
      <>
        <LogoLink to="/">
          <LogoImage src="/public/images/shopsy_logo.jpg"></LogoImage>
        </LogoLink>
      </>
      <NavLinks>
        <NavItem>
          <NavLinkStyled to="/">Home</NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/contact">Contact</NavLinkStyled>
        </NavItem>
        <NavItem>
          <CartIcon />
          <CartSidebar />
        </NavItem>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
