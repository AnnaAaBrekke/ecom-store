import React, { useState } from "react";
import { Link } from "react-router-dom";

export const CheckoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      document.getElementById("checkout-link").click();
    }, 1000);
  };

  return (
    <>
      <button onClick={handleCheckout} disabled={isLoading}>
        {isLoading ? "Proccessing..." : "Checkout"}
      </button>
      <Link to="/checkoutSuccess" id="checkout-link" />
    </>
  );
};

export const SubmitFormButton = ({ isLoading }) => {
  return (
    <>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Sending..." : "Submit Message"}
      </button>
    </>
  );
};
