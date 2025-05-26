/**
 * Navbar Component
 *
 * Renders the main site navigation bar, including:
 * - Site logo linking to the home page.
 * - Navigation links (Home, Contact).
 * - Cart icon with item count and a collapsible cart sidebar.
 *
 * Components:
 * @component CartIcon - Displays the shopping cart icon and item count.
 * @component CartSidebar - Shows the sidebar with cart item details.
 *
 * Styling:
 * Uses styled components from Navbar.style for layout and design.
 *
 * @returns {JSX.Element} The styled navigation bar component.
 */

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
      <LogoLink to="/">
        <LogoImage src="/images/shopsy_logo.jpg"></LogoImage>
      </LogoLink>
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
