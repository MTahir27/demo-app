import react, { useState } from "react";
import "./index.css";

// Components
import Navbar from "../../Components/Navbar";
import Product from "../../Components/Product";

function Services() {
  let initialState = [
    {
      name: "Product No 1",
      Price: 1200,
      Image: "assets/images/product/img-1.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
  pariatur! Quam eum nisi assumenda, est totam corrupti, in nostrum
  sequi deleniti modi, eligendi necessitatibus! Soluta sapiente
  veniam adipisci ea architecto.`,
    },
    {
      name: "Product No 2",
      Price: 1000,
      Image: "assets/images/product/img-2.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
  pariatur! Quam eum nisi assumenda, est totam Soluta sapiente
  veniam adipisci ea architecto.`,
    },
    {
      name: "Product No 3",
      Price: 2200,
      Image: "assets/images/product/img-3.jpg",
      description: `modi, eligendi necessitatibus! Soluta sapiente
    veniam adipisci ea architecto Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
  pariatur! Quam eum nisi assumenda, est totam corrupti, in nostrum
  sequi deleniti.`,
    },
    {
      name: "Product No 4",
      Price: 1600,
      Image: "assets/images/product/img-4.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
  pariatur! Quam eum eligendi necessitatibus! Soluta sapiente
  veniam adipisci ea architecto. nisi assumenda, est totam corrupti, in nostrum
  sequi deleniti modi,`,
    },
    {
      name: "Product No 5",
      Price: 1400,
      Image: "assets/images/product/img-5.jpg",
      description: `Soluta sapiente veniam adipisci ea architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, pariatur! Quam eum nisi assumenda, est totam corrupti, in nostrum sequi deleniti modi, eligendi necessitatibus! `,
    },
    {
      name: "Product No 6",
      Price: 1150,
      Image: "assets/images/product/img-6.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
  pariatur! Quam eum nisi assumenda, est totam corrupti, in nostrum
  sequi deleniti modi, eligendi necessitatibus! Soluta sapiente
  veniam adipisci ea architecto.`,
    },
  ];

  const [Products, setProducts] = useState(initialState);
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Services Pages</h1>
        <div className="row g-4">
          {/* <Product /> */}
          {Products.map((Product, Index) => {
            return (
              <div className="col-md-6 col-lg-4" key={Index}>
                <div className="productCard">
                  <div className="product-img">
                    <img src={`../../${Product.Image}`} alt="Product Image" />
                  </div>
                  <div className="product-detail">
                    <h4 className="name">{Product.name}</h4>
                    <p className="description">{Product.description}</p>
                    <h4>
                      Price: <span className="price">{Product.Price}</span>
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Services;
