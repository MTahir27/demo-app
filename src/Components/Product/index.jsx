import react from "react";
import "./index.css";

function Product(props) {
  return (
    <>
      {props.servicesParent.map((service, ind) => {
        return (
          <div className="col-md-6 col-lg-4" key={`${service.name}${ind}`}>
            <div className="productCard">
              <div className="product-img">
                {props.name}
                <img
                  src="../../assets/images/product/img-1.jpg"
                  alt="Product Image"
                />
              </div>
              <div className="product-detail">
                <h4 className="name">{service.name}</h4>
                <p>{service.desc}</p>
                <h4>
                  Price: <span className="price">{service.price}</span>
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
