import react, { useState } from "react";
import "./index.css";
// Conponents
import Navbar from "../../Components/Navbar";
import { ContactForm } from "../../Components/Contact-form";
import Product from "../../Components/Product";

function Home() {
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
        <h1>Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eum
          perspiciatis laboriosam porro quas delectus omnis amet libero vitae
          reiciendis architecto dolorum voluptate, illo, ipsam dolorem optio?
          Temporibus, ratione sint? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Vero quos vel dolores quasi voluptatum distinctio
          nostrum eveniet. Iure veritatis facere quia similique? Minima at aut,
          sed ad dolorum accusantium doloremque reiciendis similique quibusdam
          aliquam, quam perferendis magnam optio dolores sequi.
        </p>
        <h3>Products</h3>
        <div className="row g-4">
          <Product productsParent={Products} />
        </div>
      </div>
      <ContactForm />
    </>
  );
}

export default Home;
