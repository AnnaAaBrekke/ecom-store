import React from "react";
import QuantityCounter from "./Quantity";
import styled from "styled-components";
import {
  Card, // 🟢 Used Product Card
  CardBody,
  ProductImage,
  PriceContainer,
  Price,
  OriginalPrice,
  DiscountTag,
  Title,
} from "../../styles/Product.style"; // Reusing Product styles

const CartItem = ({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) => {
  return (
    <StyledCartItem>
      <ProductImage
        src={item.image?.url || "/placeholder.jpg"}
        alt={item.image?.alt || item.title}
      />
      <CardBody>
        <Title>{item.title}</Title>
        <QuantityCounter
          quantity={item.quantity}
          onIncrease={() => increaseQuantity(item.id)}
          onDecrease={() => decreaseQuantity(item.id)}
        />
        <PriceContainer>
          <Price>
            {(
              Math.round(item.discountedPrice * item.quantity * 100) / 100
            ).toFixed(2)}
            kr
          </Price>
          {item.price > item.discountedPrice && (
            <>
              <OriginalPrice>
                {(Math.round(item.price * item.quantity * 100) / 100).toFixed(
                  2
                )}
                kr
              </OriginalPrice>
              <DiscountTag>
                {Math.round(
                  ((item.price - item.discountedPrice) / item.price) * 100
                )}
                % off
              </DiscountTag>
            </>
          )}
        </PriceContainer>
        <RemoveButton onClick={() => removeFromCart(item.id)}>
          Remove
        </RemoveButton>
      </CardBody>
    </StyledCartItem>
  );
};

export default CartItem;

// 🟢 Styled Components for CartItem, reusing styles where possible

export const StyledCartItem = styled(Card)`
  display: flex;
  flex-direction: row;
  text-align: left;
  align-items: left;
  justify-content: space-between;
  padding: 12px;
  gap: 1rem;
  width: 65vh;
  height: auto;
`;

const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: ${({ theme }) => theme.colors.grayLight}; /* Subtle gray */
  color: ${({ theme }) => theme.colors.darkGray}; /* Less contrast */
  font-size: 0.8rem; /* Slightly smaller */
  font-weight: 500; /* No bold */
  padding: 4px 10px; /* Less padding */
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: ${({ theme }) => theme.shadows.soft};

  &:hover {
    background: ${({ theme }) => theme.colors.error}; /* Slight hover effect */
    color: white;
  }

  &:active {
    transform: none; /* No scale effect */
  }
`;
