// export const CheckoutButton = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   const handleCheckout = (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setTimeout(() => {
//       document.getElementById("checkout-link").click();
//     }, 2000);
//   };

//   return (
//     <>
//       <StyledMainButton onClick={handleCheckout} disabled={isLoading}>
//         {isLoading ? "Processing..." : "Checkout"}
//       </StyledMainButton>
//       <Link to="/checkoutSuccess" id="checkout-link" />
//     </>
//   );
// };

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




// // Test if the button redirects to CheckoutSuccess page on click after loading and simulated time
// // Mock `useNavigate`
// vi.mock("react-router-dom", async () => {
//   const actual = await vi.importActual("react-router-dom");
//   return {
//     ...actual,
//     useNavigate: vi.fn(),
//   };
// });

// const mockNavigate = useNavigate();

// test("button redirects to CheckoutSucess after timeout", async () => {
//   renderWithTheme(<CheckoutButton />);

//   const button = screen.getByRole("button", { name: /checkout/i });

//   await userEvent.click(button);

//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   expect(mockNavigate).toHaveBeenCalledWith("/checkoutSuccess");
// });
