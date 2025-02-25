import React from "react";
import styled from "styled-components";

const QuantityCounter = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <CounterContainer>
      <CounterButton onClick={onDecrease} disabled={quantity === 1}>
        -
      </CounterButton>
      <Quantity>{quantity}</Quantity>
      <CounterButton onClick={onIncrease}>+</CounterButton>
    </CounterContainer>
  );
};

export default QuantityCounter;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: ${({ theme }) => theme.colors.text};
`;

const CounterButton = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.accent};
  padding: 4px 10px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadiusSecondary};
  font-size: 16px;

  &:hover {
    background: ${({ theme }) => theme.colors.other};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const Quantity = styled.span`
  font-size: 16px;
  font-weight: bold;
  min-width: 24px;
  text-align: center;
`;
