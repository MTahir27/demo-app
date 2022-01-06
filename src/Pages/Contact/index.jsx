import react from "react";
import "./index.css";
// Components
import Navbar from "../../Components/Navbar";
import { ContactForm } from "../../Components/Contact-form";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Contact Page</h1>
      </div>
      <ContactForm />
    </>
  );
}

export default Contact;
