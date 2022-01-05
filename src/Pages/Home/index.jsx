import react from "react";
import "./index.css";

// Components
import Navbar from "../../Components/Navbar";
import ContactForm from "../../Components/Contact-Form";
import Product from "../../Components/Product";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cum velit
          eaque! Sequi veritatis praesentium quod sed corporis itaque
          voluptatum, velit, accusantium obcaecati iure eum! Tempore libero fuga
          aliquid odit.
        </p>
        <h3>Our Products</h3>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <Product />
          </div>
          <div className="col-md-6 col-lg-4">
            <Product />
          </div>
          <div className="col-md-6 col-lg-4">
            <Product />
          </div>
          <div className="col-md-6 col-lg-4">
            <Product />
          </div>
          <div className="col-md-6 col-lg-4">
            <Product />
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
}

export default Home;
