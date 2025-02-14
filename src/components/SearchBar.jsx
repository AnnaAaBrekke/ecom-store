import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { List, ListItem, ListItemButton } from "@mui/material";

// Source: https://salehmubashar.com/blog/create-a-search-bar-in-react-js (TextField)

const SearchBar = ({ searchInput, setSearchInput, suggestions }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value.length > 0) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion);
    setShowSuggestions(false);
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
      {showSuggestions && suggestions.length > 0 && (
        <List
          style={{
            color: "#ccc",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "white",
            zIndex: 1,
            border: "1px solid #ccc",
          }}
        >
          {suggestions.map((suggestion, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default SearchBar;
