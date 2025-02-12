import React from "react";
import Products from "../../api/products";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <SearchBar />
      <Products />
    </div>
  );
};

export default Home;
