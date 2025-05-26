// export const SubmitFormButton = ({ isLoading }) => {
//   return (
//     <ButtonContainer>
//       <StyledMainButton type="submit" disabled={isLoading}>
//         {isLoading ? "Sending..." : "Submit Message"}
//       </StyledMainButton>
//     </ButtonContainer>
//   );
// };

// This code is about a button that changes how it looks when it is loading.
// - If the button is not loading, it shows the text: "Submit Message".
// - If the button is loading, it shows the text: "Sending..." and is disabled (you can’t click it).

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { SubmitFormButton } from "./Buttons";
import { expect } from "vitest";

// Mock theme for styled-components
const mockTheme = {
  colors: {
    primary: "#1B3A4B",
  },
  borderRadiusSecondary: "5px",
};

const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={mockTheme}>{component}</ThemeProvider>);
};

// Test if the button renders with correct text
test("renders submit form button with `Submit Message` text", () => {
  renderWithTheme(<SubmitFormButton isLoading={false} />);

  expect(
    screen.getByRole("button", { name: /submit message/i })
  ).toBeInTheDocument();
});

//Test if the button dislays `Sending...` text when loading and also disables it

test("display `Sending...`text and disables button when loading", () => {
  renderWithTheme(<SubmitFormButton isLoading={true} />);

  const button = screen.getByRole("button", { name: /sending/i });

  expect(button).toHaveTextContent("Sending...");
  expect(button).toBeDisabled();
});

// Why const is used here: We store the button in a variable called button.
// Later, we use button in multiple checks - expects:
