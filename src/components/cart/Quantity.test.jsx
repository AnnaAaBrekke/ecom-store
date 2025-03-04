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

import React from "react";
import "@testing-library/jest-dom";
import QuantityCounter from "./Quantity";

const mockTheme = {
  colors: {
    primary: "#1B3A4B",
  },
  borderRadiusSecondary: "5px",
};

const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={mockTheme}>{component}</ThemeProvider>);
};

// Test if the Component Renders Correctly
// Check if the "-" button is in the document.
// Check if the "+" button is in the document.
// Check if the quantity number is displayed.

// Test Initial Quantity Value: Pass a quantity value (e.g., 3) and check if the correct number appears.

// Test Clicking the "+" Button (Increase Quantity)
// Click the "+" button.
// Check if the quantity increases by 1 after clicking.

// Test Clicking the "-" Button (Decrease Quantity)
// Click the "-" button.
// Check if the quantity decreases by 1 after clicking.

//Test if the "-" Button is Disabled at quantity = 1
// If quantity = 1, the "-" button should be disabled.
// Try clicking the "-" button and check if the quantity stays at 1.

// Test if onIncrease and onDecrease Functions Are Called
// Check if onIncrease is called when clicking "+".
// Check if onDecrease is called when clicking "-".
