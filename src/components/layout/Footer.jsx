import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <p>&copy; 2025 Shopsy Ecom Store. All rights reserved.</p>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.layout};
  flex-grow: 1; /* Makes sure all details fit well */
  width: 100%;
  padding: 12px;
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius};
`;
