import styled from "styled-components";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.layout};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.borderRadiusSecondary};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.other};
  }
`;

export const LogoImage = styled.img`
  width: 80px;
  height: auto;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  font-size: 16px;
  display: flex;
  align-items: center;
`;

export const NavLinkStyled = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.other};

    color: #4a4a4a;
  }
`;

export const BackToShopLink = styled(Link)`
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

// CartIcon

export const StyledCartItemContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const CartIconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
`;

export const CartIconCounter = styled.span`
  position: absolute;
  background: rgb(242, 198, 20);
  color: white;
  bottom: 20px;
  right: -5px;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: bold;
`;

export const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
  font-size: 30px !important;
  color: ${({ theme }) => theme.colors.primary};
`;
