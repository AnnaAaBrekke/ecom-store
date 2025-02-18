import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { List, ListItem, ListItemButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/Searchbar.css";
import { useNavigate } from "react-router-dom";

// Source: https://salehmubashar.com/blog/create-a-search-bar-in-react-js (TextField)
// Source: https://www.youtube.com/watch?v=o1XcuaCcsDA (AutoComplete, Filter, Keydown)

const SearchBar = ({ searchInput, setSearchInput, suggestions }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const navigate = useNavigate();

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
    setShowSuggestions(false);
    setSelectedSuggestion(-1);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion.title); // Set the title in the input
    navigate(`/product/${suggestion.id}`); // Navigate to the product page using its ID
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (selectedSuggestion < filteredSuggestions.length) {
      if (e.key === "ArrowUp" && selectedSuggestion > 0) {
        setSelectedSuggestion((prev) => prev - 1);
      } else if (
        e.key === "ArrowDown" &&
        selectedSuggestion < filteredSuggestions.length - 1
      ) {
        setSelectedSuggestion((prev) => prev + 1);
      } else if (e.key === "Enter" && selectedSuggestion >= 0) {
        const selectedProduct = filteredSuggestions[selectedSuggestion];
        navigate(`/product/${selectedProduct.id}`); // Navigate to the product page
        setShowSuggestions(false);
      }
    }
  };

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.title.toLowerCase().includes(searchInput.toLowerCase())
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
        onKeyDown={handleKeyDown}
      />
      {searchInput === "" ? (
        <SearchIcon />
      ) : (
        <CloseIcon onClick={handleSearchClose} />
      )}
      {showSuggestions && filteredSuggestions.length > 0 && (
        <List style={suggestionListStyle}>
          {filteredSuggestions.slice(0, 5).map((suggestion, index) => (
            <ListItem
              key={suggestion.id}
              className={`search-suggestion-line ${
                selectedSuggestion === index ? "active" : ""
              }`}
              disablePadding
            >
              <ListItemButton
                style={suggestionItemStyle}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.title}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default SearchBar;

// Fix styling later - just for structure purpose

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
