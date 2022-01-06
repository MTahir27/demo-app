import react from "react";
import "./index.css";

// Products Array
function Product(props) {
  return (
    <>
      {props.productsParent.map((Product, Index) => {
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
    </>
  );
}

export default Product;
