/**
 * CartItem Component
 *
 * Displays a single item inside the shopping cart or sidebar.
 *
 * Features:
 * - Shows product image, title, price, and discount.
 * - Provides quantity controls using the QuantityCounter component.
 * - Includes a remove button to delete the item from the cart.
 * - Adapts layout depending on whether it’s shown inside the sidebar or main cart.
 *
 * Props:
 * @param {object} item - The product item object containing details like title, price, image, quantity.
 * @param {function} increaseQuantity - Function to increase item quantity in the cart.
 * @param {function} decreaseQuantity - Function to decrease item quantity in the cart.
 * @param {function} removeFromCart - Function to remove the item from the cart.
 * @param {boolean} isSidebar - Flag to adjust styling when used in the sidebar view.
 *
 * @returns {JSX.Element} A styled cart item display.
 */

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
    <StyledCartItem $isSidebar={isSidebar}>
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
  flex-direction: ${({ $isSidebar }) => ($isSidebar ? "column" : "row")};
  text-align: left;
  align-items: ${({ $isSidebar }) => ($isSidebar ? "center" : "left")};
  justify-content: ${({ $isSidebar }) =>
    $isSidebar ? "center" : "space-between"};
  padding: 12px;
  width: ${({ $isSidebar }) => ($isSidebar ? "80%" : "90%")};
  height: auto;
  margin: 1rem;
  margin-bottom: 1rem;
  min-width: auto;
  overflow: hidden;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: ${({ $isSidebar }) => ($isSidebar ? "80%" : "100%")};
  }
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
  border: 1px solid #ccc;
  border-radius: ${({ theme }) => theme.borderRadiusSecondary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: ${({ theme }) => theme.shadows.soft};

  &:hover {
    background: ${({ theme }) => theme.colors.error};
    color: white;
  }

  &:active {
    transform: none;
  }
`;
