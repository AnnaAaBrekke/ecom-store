import React from "react";
import TextField from "@mui/material/TextField";

const SearchBar = ({ searchInput, setSearchInput }) => {
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        variant="outlined"
        fullWidth
        label="Search"
        type="text"
        placeholder="Search for a product.."
        value={searchInput}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
