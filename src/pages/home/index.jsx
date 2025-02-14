import React, { useState } from "react";
import Products from "../../api/products";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  return (
    <div>
      <h1>Home</h1>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        suggestions={suggestions}
      />
      <Products searchInput={searchInput} setSuggestions={setSuggestions} />
    </div>
  );
};

export default Home;
