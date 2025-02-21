import React from "react";
import ContactForm from "../../components/Form";
import { Heading, SubHeader } from "../../styles/Typography.style";
import styled from "styled-components";

const ContactPage = () => {
  return (
    <div>
      <Heading>Contact Us</Heading>
      <SubHeader>
        If you have any questions or need help, please fill out the form below.
      </SubHeader>
      <StyledContactPage>
        <ContactForm />
      </StyledContactPage>
    </div>
  );
};

export default ContactPage;

const StyledContactPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
