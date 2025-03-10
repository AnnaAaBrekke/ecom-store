import { Routes, Route } from "react-router-dom";
import Checkout from "./pages/checkout";
import Contact from "./pages/contact";
import Home from "./pages/home";
import ProductPage from "./pages/product";
import CheckoutSuccessPage from "./pages/checkoutSuccess";
import { Layout } from "./components/layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkoutSuccess" element={<CheckoutSuccessPage />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
