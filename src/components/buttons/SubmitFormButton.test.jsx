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


