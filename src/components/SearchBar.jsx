import { List, TextField } from "@mui/material";
import React, { useState } from "react";

// https://salehmubashar.com/blog/create-a-search-bar-in-react-js

function SearchBar() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div>
      <h1>Search Bar</h1>
      <div>
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputText} />
    </div>
  );
}

export default SearchBar;
