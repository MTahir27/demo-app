import react from "react";
import "./contact.css";

import Navbar from "../navbar/navbar";
import { ContactForm } from "../contact-form/contact-form";

function Contact() {
  return (
    <>
      <Navbar />
      <h1>Contact Page</h1>
      <ContactForm />
    </>
  );
}

export { Contact };
