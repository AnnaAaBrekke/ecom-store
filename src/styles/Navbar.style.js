import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.layout};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Light shadow */
  border-radius: ${({ theme }) => theme.borderRadiusSecondary};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #ffd700;
  }
`;

export const LogoImage = styled.img`
  width: 80px; /* Adjust size */
  height: auto;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8; /* Subtle hover effect */
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
    background-color: #ffd700;
    color: #4a4a4a;
  }
`;
