import React from "react";
import QuantityCounter from "./Quantity";
import styled from "styled-components";
import {
  Card,
  CardBody,
  ProductImage,
  PriceContainer,
  Price,
  OriginalPrice,
  DiscountTag,
  Title,
} from "../../styles/Product.style";

const CartItem = ({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  isSidebar,
}) => {
  return (
    <StyledCartItem isSidebar={isSidebar}>
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

export const StyledCartItem = styled(Card)`
  display: flex;
  flex-direction: ${({ isSidebar }) => (isSidebar ? "column" : "row")};
  text-align: left;
  align-items: ${({ isSidebar }) => (isSidebar ? "center" : "left")};
  justify-content: ${({ isSidebar }) =>
    isSidebar ? "center" : "space-between"};
  padding: 12px;
  width: ${({ isSidebar }) => (isSidebar ? "80%" : "65vh")};
  height: auto;
  margin-bottom: 1rem;
`;

const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: ${({ theme }) => theme.colors.grayLight};
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 0.8rem;
  font-weight: 500;
  padding: 4px 10px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadiusSecondary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: ${({ theme }) => theme.shadows.soft};

  &:hover {
    background: ${({ theme }) => theme.colors.error};
    color: white;
  }

  &:active {
    transform: none; /* No scale effect */
  }
`;
