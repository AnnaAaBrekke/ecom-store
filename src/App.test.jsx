// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <ThemeProvider theme={theme}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </ThemeProvider>
//   </StrictMode>
// );

import React from "react";
import "@testing-library/react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { theme } from "./styles/theme";
import { expect, it } from "vitest";

it("App component should match snapshot", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
