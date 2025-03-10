import styled from "styled-components";
import { Link } from "react-router-dom";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 1rem;
  box-sizing: border-box;
  overflow: hidden;
`;

export const Message = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 20px;
`;

export const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.accent};
  padding: 12px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.background};
  transition: transform 0.3s ease;
  height: auto;
  width: 90%;
  min-width: 250px;

  box-shadow: ${({ theme }) => theme.shadows.soft};
  overflow: hidden;
  margin: 0 auto;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.strong};
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  width: 100%;
  padding: 10px;
  text-align: left;
`;

export const Title = styled.h2`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.headingFont};
  margin-bottom: 10px;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  margin-bottom: 10px;
  flex-wrap: wrp;
  justify-content: left;
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
  font-weight: bold;
`;

export const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;
  opacity: 0.7;
`;

export const DiscountTag = styled.span`
  background-color: ${({ theme }) => theme.colors.success};
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 3px 8px;
  border-radius: ${({ theme }) => theme.borderRadiusSecondary};
  display: inline-block;
  text-transform: uppercase;
`;

export const Rating = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.accent};
`;

export const Tags = styled.div`
  display: flex;
  justify-content: left;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 8px;
`;

export const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.borderRadiusSecondary};
  font-size: 0.8rem;
  margin-bottom: 16px;a
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ViewButton = styled(Link)`
  width: auto;
  padding: 12px 18px;
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
    background: ${({ theme }) => theme.colors.other};
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.strong};
  }
`;
