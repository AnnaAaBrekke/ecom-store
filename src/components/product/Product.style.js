import styled from "styled-components";
import { Link } from "react-router-dom";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: clamp(12px, 3vw, 24px); /* Dynamically adjusts gap size */
  padding: 16px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto; /* Centers the grid in the container */
`;

export const Message = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #555;
  margin-top: 20px;
`;

export const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 12px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.background};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 450px; /* Fixed height for consistency */
  width: 100%; /* Ensures equal width in grid */
  box-shadow: ${({ theme }) => theme.shadows.soft};
  overflow: hidden;

  &:hover {
    transform: translateY(-5px); /* Subtle floating effect */
    box-shadow: ${({ theme }) => theme.shadows.strong};
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1; /* Makes sure all details fit well */
  width: 100%;
  padding: 10px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.headingFont};
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  flex-grow: 1; /* Prevents overflow */
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 50px;
  white-space: nowrap;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
`;

export const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.9rem;
`;

export const DiscountTag = styled.span`
  color: ${({ theme }) => theme.colors.success};
  font-size: 0.9rem;
`;

export const Rating = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 8px 0;
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 8px;
`;

export const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-bottom: 16px;
`;

export const ViewButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 10px;
  background: ${({ theme }) => theme.gradients.primaryGradient};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: ${({ theme }) => theme.shadows.soft};

  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.strong};
  }
`;
