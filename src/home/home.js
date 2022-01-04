import react from "react";
import Navbar from "../navbar/navbar";
import "./home.css";
import { ContactForm } from "../contact-form/contact-form";

function Home() {
  return (
    <>
      <Navbar />
      <h1>Home Page</h1>
      <ContactForm />
    </>
  );
}

export default Home;
