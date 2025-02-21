import React, { useState } from "react";
import Products from "../../api/products";
import SearchBar from "../../components/SearchBar";
import styled from "styled-components";
import { Heading, Paragraph } from "../../styles/Typography.style";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  return (
    <div>
      <HeroSection>
        <Overlay />
        <HeroContent>
          <Heading style={{ color: "white" }}>
            Welcome to <span>Shopsy</span>
          </Heading>
          <Paragraph style={{ color: "white" }}>
            Your one-stop shop for the latest trends and deals!
          </Paragraph>
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
  height: 45vh;
  text-align: center;
  background-image: url("/images/andrew-ridley-jR4Zf-riEjI-unsplash.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadiusSecondary};
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(40, 64, 71, 0.7);
  z-index: 1;
`;

const HeroContent = styled.div`
  max-width: 600px;
  z-index: 2;

  h1 {
    font-size: 58px;
    font-weight: 800;
    font-family: ${({ theme }) => theme.typography.fontFamily};

    span {
      color:rgb(244, 218, 114);
    }
  }

  p {
    font-size: 22px;
    margin-bottom: 20px;
    font-weight: 500;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
  }
`;
