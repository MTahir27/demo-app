import react, { useState } from "react";
import "./index.css";

function ContactForm() {
  const [user, setUser] = useState({});
  const [hide, setHide] = useState(false);

  const handleChange = (e) => {
    setUser({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(user);
  };

  const hideShow = () => {
    if (hide == false) {
      setHide(true);
    } else {
      setHide(false);
    }
  };

  return (
    <div className="container">
      <section className="my-5">
        {hide && (
          <div className="border p-3 mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo soluta
            quasi quod ratione fugit hic voluptas aspernatur deleniti esse harum
            nulla odit eos fugiat, et modi! Voluptatem inventore excepturi
            ipsam!
          </div>
        )}
        <button className="btn" onClick={hideShow}>
          Hide Show
        </button>
      </section>
      <div className="contactForm">
        <div className="row g-4">
          <div className="col-sm-6 col-md-4">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              name="fullName"
            />
          </div>
          <div className="col-sm-6 col-md-4">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="demo@example.com"
              name="email"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="">Subject</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Subject"
              name="subject"
            />
          </div>
          <div className="col-12">
            <label htmlFor="">Message</label>
            <textarea
              name="message"
              className="form-control"
              rows="5"
              placeholder="Write Message Here"
            ></textarea>
          </div>
          <div className="col-12 text-start">
            <input
              type="submit"
              value={"Submit"}
              className="btn btn-primary"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { ContactForm };
