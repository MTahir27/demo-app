import react from "react";
import "./index.css";
// Components
import Navbar from "../../Components/Navbar";
import ContactForm2 from "../../Components/Contact-Form-2";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Contact Page</h1>
        <ContactForm2 />
      </div>
    </>
  );
}

export default Contact;
