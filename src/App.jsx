import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Checkout from "./pages/checkout";
import Contact from "./pages/contact";
import Home from "./pages/home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/contact" element={<Contact />} /> {/* Contact Page */}
        <Route path="/checkout" element={<Checkout />} /> {/* Contact Page */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />{" "}
        {/* 404 Page */}
      </Routes>
    </Layout>
  );
}

export default App;
