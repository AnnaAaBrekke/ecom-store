import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { List, ListItem, ListItemButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

// Source: https://salehmubashar.com/blog/create-a-search-bar-in-react-js (TextField)
// Source: https://www.youtube.com/watch?v=o1XcuaCcsDA (AutoComplete, Filter, Keydown)

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

  const handleSearchClose = () => {
    setSearchInput("");
    setShowSuggestions("");
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion);
    setShowSuggestions(false);
  };

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchInput.toLowerCase())
  );

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
      {searchInput === "" ? (
        <SearchIcon />
      ) : (
        <CloseIcon onClick={handleSearchClose} />
      )}
      {showSuggestions && filteredSuggestions.length > 0 && (
        <List style={suggestionListStyle}>
          {filteredSuggestions.slice(0, 5).map((suggestion, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                style={suggestionItemStyle}
                onClick={() => handleSuggestionClick(suggestion)}
              >
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

const suggestionListStyle = {
  top: "100%",
  left: 0,
  right: 0,
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderTop: "none",
  borderRadius: "0 0 4px 4px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  zIndex: 10,
  maxHeight: "200px",
  overflowY: "auto",
};

const suggestionItemStyle = {
  padding: "8px 16px",
  fontSize: "14px",
  cursor: "pointer",
  color: "#333",
};
