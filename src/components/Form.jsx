import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (formData.length < 3) {
      newErrors.formData = "Input must be at least 3 characters.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form Submitted successfully");
      setFormData({
        fullName: "",
        subject: "",
        email: "",
        body: "",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        {/* Label added for 'full-name' */}
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          placeholder="Your full name"
          onChange={handleChange}
        />
        {/* Label added for 'subject */}
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          placeholder="Subject"
          onChange={handleChange}
        ></input>
        {/* Label added for 'email' */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
        ></input>
        {/* Label added for 'Body' */}
        <label htmlFor="body">Body</label>
        <input
          name="body"
          value={formData.body}
          placeholder="Body"
          onChange={handleChange}
        ></input>
        {/* Button to submit our form */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
