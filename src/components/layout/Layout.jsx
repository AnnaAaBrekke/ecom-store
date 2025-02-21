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

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  margin: 2px;
  padding: 6px;
`;
