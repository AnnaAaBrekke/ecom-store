import React, { useState } from "react";
import Products from "../../api/products";
import SearchBar from "../../components/SearchBar";
import styled from "styled-components";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  return (
    <div>
      <HeroSection>
        <HeroContent>
          <h1>
            Welcome to <span>Shopsy</span>
          </h1>
          <p>Your one-stop shop for the latest trends and deals!</p>
        </HeroContent>
      </HeroSection>
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

const HeroSection = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;
  text-align: center;
  background: ${({ theme }) => theme.gradients.primaryGradient};
  color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadiusSecondary};
`;

const HeroContent = styled.div`
  max-width: 600px;

  h1 {
    font-size: 48px;
    font-weight: 700;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    margin-bottom: 15px;

    span {
      color: ${({ theme }) => theme.colors.accent}; /* Highlighted color */
    }
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;
