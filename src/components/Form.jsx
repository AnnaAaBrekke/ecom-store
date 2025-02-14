import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitFormButton } from "./Buttons";

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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          {...register("fullName")}
          placeholder="Your full name"
        />
        <p style={{ color: "red" }}>{errors.fullName?.message}</p>

        <label htmlFor="email">Email</label>
        <input type="email" {...register("email")} placeholder="Email" />
        <p style={{ color: "red" }}>{errors.email?.message}</p>

        <label htmlFor="subject">Subject</label>
        <input type="text" {...register("subject")} placeholder="Subject" />
        <p style={{ color: "red" }}>{errors.subject?.message}</p>

        <label htmlFor="body">Body</label>
        <input type="text" {...register("body")} placeholder="Your message" />
        <p style={{ color: "red" }}>{errors.body?.message}</p>
        <SubmitFormButton isLoading={isLoading} />
      </form>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
}

export default ContactForm;
