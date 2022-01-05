import react from "react";
import "./index.css";
// Conponents
import Navbar from "../../Components/Navbar";
import { ContactForm } from "../../Components/Contact-form";
import Product from "../../Components/Product";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Home Page</h1>
        <h3>Products</h3>
        <div className="row g-4">
          <Product />
        </div>
      </div>
      <ContactForm />
    </>
  );
}

export default Home;
