import React from "react";
import TextField from "@mui/material/TextField";

// Source: https://salehmubashar.com/blog/create-a-search-bar-in-react-js (TextField)


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


// Source: If I also want to use AutoComplete: https://www.geeksforgeeks.org/how-to-add-auto-complete-search-box-in-reactjs/

// AutocompleteSearch.js
// import React, { useState } from 'react';
// import Autosuggest from 'react-autosuggest';
// import './style.css'; // Import CSS file for custom styling

// const AutocompleteSearch = () => {
//   const [value, setValue] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   // Mock data for suggestions


//   const getSuggestions = (inputValue) => {
//     const regex = new RegExp(inputValue.trim(), 'i');
//     return languages.filter((language) => regex.test(language));
//   };

//   const onSuggestionsFetchRequested = ({ value }) => {
//     setSuggestions(getSuggestions(value));
//   };

//   const onSuggestionsClearRequested = () => {
//     setSuggestions([]);
//   };

//   const onChange = (event, { newValue }) => {
//     setValue(newValue);
//   };

//   const getSuggestionValue = (suggestion) => suggestion;

//   const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

//   const inputProps = {
//     placeholder: 'Type to search...',
//     value,
//     onChange
//   };

//   // Custom theme for styling
//   const theme = {
//     container: 'autocomplete-container',
//     suggestionsContainer: 'suggestions-container',
//     suggestion: 'suggestion',
//     suggestionHighlighted: 'suggestion-highlighted',
//     input: 'autocomplete-input'
//   };

//   return (
//     <Autosuggest
//       suggestions={suggestions}
//       onSuggestionsFetchRequested={onSuggestionsFetchRequested}
//       onSuggestionsClearRequested={onSuggestionsClearRequested}
//       getSuggestionValue={getSuggestionValue}
//       renderSuggestion={renderSuggestion}
//       inputProps={inputProps}
//       theme={theme} // Apply custom theme for styling
//     />
//   );
// };

// export default AutocompleteSearch;
