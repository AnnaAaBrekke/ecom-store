import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <PageWrapper>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </PageWrapper>
  );
};

export default Layout;

// ✅ Ensures the footer is at the bottom
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;
