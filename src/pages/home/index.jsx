import React, { useState } from "react";
import Products from "../../api/products";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div>
      <h1>Home</h1>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <Products searchInput={searchInput} />
    </div>
  );
};

export default Home;
