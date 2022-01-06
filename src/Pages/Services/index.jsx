import react from "react";
import "./index.css";

// Components
import Navbar from "../../Components/Navbar";
import Product from "../../Components/Product";

function Services() {
  // let initialState = [
  //   {
  //     name: "Product Name 1",
  //     desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut a ab
  //           ut perspiciatis laborum, optio debitis dolorum eos quos illum facere
  //           odit nostrum quisquam! Saepe odit inventore deserunt excepturi
  //           officia.`,
  //     price: 1200,
  //   },
  //   {
  //     name: "Product Name 2",
  //     desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut a ab
  //           ut perspiciatis laborum, optio debitis dolorum eos quos illum facere
  //           odit nostrum quisquam! Saepe odit inventore deserunt excepturi
  //           officia.`,
  //     price: 1100,
  //   },
  //   {
  //     name: "Product Name 3",
  //     desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut a ab
  //           ut perspiciatis laborum, optio debitis dolorum eos quos illum facere
  //           odit nostrum quisquam! Saepe odit inventore deserunt excepturi
  //           officia.`,
  //     price: 1000,
  //   },
  // ];

  // const [services, setServices] = useState(initialState);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Services Pages</h1>
        <div className="row g-4">
          <Product />
        </div>
      </div>
    </>
  );
}

export default Services;
