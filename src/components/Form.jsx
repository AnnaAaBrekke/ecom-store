import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitFormButton } from "./Buttons";
import styled from "styled-components";

const schema = yup.object().shape({
  fullName: yup
    .string()
    .min(3, "Full name must be at least 3 characters")
    .max(50, "Full name must be less than 50 characters")
    .required("Full name is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  subject: yup
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(100, "Subject must be less than 100 characters")
    .required("Subject is required"),
  body: yup
    .string()
    .min(3, "Body must be at least 3 characters")
    .max(1000, "Body must be less than 1000 characters")
    .required("Body is required"),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (formData) => {
    setIsLoading(true);
    console.log("Form Data", formData);
    setTimeout(() => {
      setSuccessMessage(
        "Thank you for contacting us! We will get back to you shortly."
      );
      setIsLoading(false);
      reset();

      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    }, 2000);
  };

  return (
    <StyledForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <label htmlFor="fullName">Full Name</label>
          <Input
            type="text"
            {...register("fullName")}
            placeholder="Your full name"
          />
          <p style={{ color: "red" }}>{errors.fullName?.message}</p>
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <Input type="email" {...register("email")} placeholder="Email" />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </FormGroup>
        <FormGroup>
          <label htmlFor="subject">Subject</label>
          <Input type="text" {...register("subject")} placeholder="Subject" />
          <p style={{ color: "red" }}>{errors.subject?.message}</p>
        </FormGroup>
        <FormGroup>
          <label htmlFor="body">Body</label>
          <Input type="text" {...register("body")} placeholder="Your message" />
          <p style={{ color: "red" }}>{errors.body?.message}</p>
        </FormGroup>
        <SubmitFormButton isLoading={isLoading} />
      </form>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </StyledForm>
  );
}

export default ContactForm;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin: 1rem;
  padding: 2.5rem;
  width: 340px;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.3rem;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.backgroundLight};
  transition: all 0.3s ease;
  font-size: 1rem;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.primaryLight};
  }
`;
