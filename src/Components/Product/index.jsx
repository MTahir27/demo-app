import react from "react";
import "./index.css";

function Product() {
  return (
    <>
      <div className="col-md-6 col-lg-4">
        <div className="productCard">
          <div className="product-img">
            <img
              src="../../assets/images/product/img-1.jpg"
              alt="Product Image"
            />
          </div>
          <div className="product-detail">
            <h4 className="name">Product No 1</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              pariatur! Quam eum nisi assumenda, est totam corrupti, in nostrum
              sequi deleniti modi, eligendi necessitatibus! Soluta sapiente
              veniam adipisci ea architecto.
            </p>
            <h4>
              Price: <span className="price">1200</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
