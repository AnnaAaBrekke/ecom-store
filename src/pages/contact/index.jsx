import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={onFormSubmit}>
        {/* Label added for 'full-name' */}
        <label htmlFor="full-name">Full Name</label>
        <input name="full-name" value={fullName} placeholder="Your full name" />
        {/* Label added for 'subject */}
        <label htmlFor="subject">Subject</label>
        <input name="subject" value={subject} placeholder="Subject"></input>
        {/* Label added for 'email' */}
        <label htmlFor="email">Email</label>
        <input name="email" value={email} placeholder="Email"></input>
        {/* Label added for 'Body' */}
        <label htmlFor="body">Body</label>
        <input name="body" value={body} placeholder="Body"></input>
        {/* Button to submit our form */}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
