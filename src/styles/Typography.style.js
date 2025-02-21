import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 15px;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.8);
`;

export const SubHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 20px;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondaryText || theme.colors.text};
  line-height: 1.6;
  margin-bottom: 15px;
  text-align: center;
  max-width: 800px;
`;
