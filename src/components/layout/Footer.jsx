import React from "react";
import styled from "styled-components";
import { LogoImage, LogoLink } from "../../styles/Navbar.style";
import { Paragraph } from "../../styles/Typography.style";

function Footer() {
  return (
    <StyledFooter>
      <Paragraph>&copy; 2025 Shopsy Ecom Store. All rights reserved.</Paragraph>
      <LogoLink to="/">
        <LogoImage src="/images/shopsy_logo.jpg"></LogoImage>
      </LogoLink>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.layout};
  flex-grow: 1;
  width: 100%;
  padding: 12px;
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadiusSecondary};
`;
