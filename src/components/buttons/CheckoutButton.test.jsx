import React, { act } from "react";
import "@testing-library/jest-dom";
import { expect } from "vitest";
import { ThemeProvider } from "styled-components";
import { render, screen } from "@testing-library/react";
import { CheckoutButton } from "./Buttons";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, useNavigate } from "react-router-dom";

const mockTheme = {
  colors: {
    primary: "#1B3A4B",
  },
  borderRadiusSecondary: "5px",
};

const renderWithTheme = (component) => {
  return render(
    <MemoryRouter>
      <ThemeProvider theme={mockTheme}>{component}</ThemeProvider>;
    </MemoryRouter>
  );
};

// Test if the button display correct text when not loading
test("button displays `Checkout` text", () => {
  renderWithTheme(<CheckoutButton />);

  expect(screen.getByRole("button", { name: /checkout/i })).toBeInTheDocument();
});

// Test if the button displays correct text and is disabled when loading and clicked
test("button displays `Processing..´ text and is disabled when loading and clicked", async () => {
  renderWithTheme(<CheckoutButton />);

  const button = screen.getByRole("button", { name: /checkout/i });

  await userEvent.click(button);

  expect(screen.getByRole("button", { name: /processing/i })).toBeDisabled();
});


