import React, { useState } from "react";
import { Link } from "react-router-dom";

const CheckoutButton = () => {
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

export default CheckoutButton;

// const SubmitFormButton = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmitForm = (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     const formData = {
//       fullName,
//       subject,
//       email,
//       body,
//     };

//     fetch('http://www.example.com', {
//       method: 'POST',
//       body: JSON.stringify(formData),
//     });

//     return (
//       <>
//         <button onClick={handleSubmitForm} disabled={isLoading}>
//           {isLoading ? "Sending..." : "Submit"}
//         </button>
//         <h2>Thank you for contacting us. We will reply shortly.</h2>
//       </>
//     );
//   };

//   export default SubmitFormButton;
