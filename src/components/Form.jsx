/**
 * ContactForm Component
 *
 * A contact form that collects user input and validates it using React Hook Form and Yup.
 *
 * Features:
 * - Validates inputs: full name, email, subject, and message body.
 * - Displays real-time error messages for validation issues.
 * - Shows a success message after form submission.
 * - Simulates form submission with a loading state and a fake delay.
 *
 * Dependencies:
 * - React Hook Form for form management.
 * - Yup for schema validation.
 * - MUI components for layout.
 *
 * @returns {JSX.Element} A styled contact form with validation and success feedback.
 */

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitFormButton } from "./buttons/Buttons";
import {
  FormMessage,
  FormMessageSuccess,
  Input,
  Label,
  StyledForm,
  TextArea,
} from "../styles/Form.style";
import { FormGroup } from "@mui/material";

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
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            type="text"
            {...register("fullName")}
            placeholder="Your full name"
          />
          <FormMessage>{errors.fullName?.message}</FormMessage>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" {...register("email")} placeholder="Email" />
          <FormMessage>{errors.email?.message}</FormMessage>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="subject">Subject</Label>
          <Input type="text" {...register("subject")} placeholder="Subject" />
          <FormMessage>{errors.subject?.message}</FormMessage>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="body">Message</Label>
          <TextArea {...register("body")} placeholder="Your message..." />
          <FormMessage>{errors.body?.message}</FormMessage>
        </FormGroup>
        <SubmitFormButton isLoading={isLoading} />
      </form>
      {successMessage && (
        <FormMessageSuccess>{successMessage}</FormMessageSuccess>
      )}
    </StyledForm>
  );
}

export default ContactForm;
