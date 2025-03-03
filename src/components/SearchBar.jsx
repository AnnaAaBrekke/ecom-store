import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { List, ListItem, ListItemButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchBar = ({ searchInput, setSearchInput, suggestions }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  const handleSearchClose = () => {
    setSearchInput("");
    setShowSuggestions(false);
    setSelectedSuggestion(-1);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion.title);
    navigate(`/product/${suggestion.id}`);
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
        navigate(`/product/${selectedProduct.id}`);
        setShowSuggestions(false);
      }
    }
  };

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <SearchContainer>
      <StyledTextField
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
        <StyledSearchIcon />
      ) : (
        <StyledCloseIcon onClick={handleSearchClose} />
      )}
      {showSuggestions && filteredSuggestions.length > 0 && (
        <SuggestionList>
          {filteredSuggestions.slice(0, 5).map((suggestion, index) => (
            <SuggestionItem
              key={suggestion.id}
              active={selectedSuggestion === index ? "true" : undefined}
            >
              <StyledListItemButton
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.title}
              </StyledListItemButton>
            </SuggestionItem>
          ))}
        </SuggestionList>
      )}
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 6px;
`;

const StyledTextField = styled(TextField)`
  && {
    background: ${({ theme }) => theme.colors.background};
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
`;

const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: ${({ theme }) => theme.colors.error};
`;

const SuggestionList = styled(List)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
`;

const SuggestionItem = styled(ListItem)`
  padding: 0;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.other : "inherit"};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.other};
  }
`;

const StyledListItemButton = styled(ListItemButton)`
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  color: #333;

  &:hover {
    background-color: ${({ theme }) => theme.colors.layout};
  }
`;
