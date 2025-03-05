// const QuantityCounter = ({ quantity, onIncrease, onDecrease }) => {
//   return (
//     <CounterContainer>
//       <CounterButton onClick={onDecrease} disabled={quantity === 1}>
//         -
//       </CounterButton>
//       <Quantity>{quantity}</Quantity>
//       <CounterButton onClick={onIncrease}>+</CounterButton>
//     </CounterContainer>
//   );
// };

import React, { useState } from "react";
import "@testing-library/jest-dom";
import QuantityCounter from "./Quantity";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { expect, it, vitest } from "vitest";

// Test if the Component Renders Correctly

const mockTheme = {
  colors: {
    primary: "#1B3A4B",
  },
  borderRadiusSecondary: "5px",
};

const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={mockTheme}>{component}</ThemeProvider>);
};

describe("QuantityCounter", () => {
  // Check if the "-" button is in the document.
  // Check if the "+" button is in the document.
  // Check if the quantity number is displayed.

  it("Counter displays correct initial number and signs for increase and decrease", () => {
    renderWithTheme(
      <QuantityCounter
        quantity={1}
        onIncrease={() => {}}
        onDecrease={() => {}}
      />
    );

    const quantityDisplay = screen.getByText("1");
    const increaseSign = screen.getByText("+");
    const decreaseSign = screen.getByText("-");

    expect(quantityDisplay).toBeInTheDocument();
    expect(increaseSign).toBeInTheDocument();
    expect(decreaseSign).toBeInTheDocument();
  });

  // Test Clicking the "+" Button (Increase Quantity)
  // Click the "+" button.
  // Check if the quantity increases by 1 after clicking.
  // Test Clicking the "-" Button (Decrease Quantity)
  // Click the "-" button.
  // Check if the quantity decreases by 1 after clicking.

  // Test if the "-" Button is Disabled at quantity = 1
  // If quantity = 1, the "-" button should be disabled.
  // Try clicking the "-" button and check if the quantity stays at 1.

  it("Clicking the plus or minus button change the quantity with 1", () => {
    const MockQuantityCounter = () => {
      const [quantity, setQuantity] = useState(1);
      return (
        <QuantityCounter
          quantity={quantity}
          onIncrease={() => setQuantity(quantity + 1)}
          onDecrease={() => setQuantity(quantity - 1)}
        />
      );
    };
    renderWithTheme(<MockQuantityCounter />);

    // Check if the "-" button is disabled at quantity = 1
    const decreaseButton = screen.getByText("-");
    expect(decreaseButton).toBeDisabled();

    // Click "+" button and check if quantity increases to 2
    const increaseButton = screen.getByText("+");
    fireEvent.click(increaseButton);
    expect(screen.getByText("2")).toBeInTheDocument();

    // Now that quantity is 2, "-" should be enabled
    expect(decreaseButton).not.toBeDisabled();

    // Click "-" button and check if quantity decreases back to 1
    fireEvent.click(decreaseButton);
    expect(screen.getByText("1")).toBeInTheDocument();

    // Verify "-" button is disabled again at quantity = 1
    expect(decreaseButton).toBeDisabled();
  });

  // Test if onIncrease and onDecrease Functions Are Called
  // Check if onIncrease is called when clicking "+".
  // Check if onDecrease is called when clicking "-".

  it("Functions for onCrease and onDecrease is called correctly", () => {
    const mockIncrease = vitest.fn();
    const mockDecrease = vitest.fn();

    renderWithTheme(
      <QuantityCounter
        quantity={2}
        onIncrease={mockIncrease}
        onDecrease={mockDecrease}
      />
    );

    // Find the buttons
    const increaseButton = screen.getByText("+");
    const decreaseButton = screen.getByText("-");

    // Click the "+" and check if onIncrease was called
    fireEvent.click(increaseButton);
    expect(mockIncrease).toHaveBeenCalledTimes(1);

    // Click the "+" and check if onIncrease was called
    fireEvent.click(decreaseButton);
    expect(mockDecrease).toHaveBeenCalledTimes(1);
  });

  // Test Initial Quantity Value: Pass a quantity value (e.g., 3) and check if the correct number appears.
  it("Displays the correct initial quantity when a value is passed", () => {
    renderWithTheme(
      <QuantityCounter
        quantity={20}
        onIncrease={() => {}}
        onDecrease={() => {}}
      />
    );

    const quantityDisplay = screen.getByText("20");

    expect(quantityDisplay).toBeInTheDocument();
  });
});

// When is state needed in testing?
// A component is controlled (i.e., receives a prop that changes based on external logic).
// The component does not manage its own state internally.
// You want to simulate user interactions that should trigger re-renders.
