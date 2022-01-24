import react, { useState } from "react";
import "./index.css";

function ContactForm() {
  return (
    <div className="container">
      <form action="" className="contactForm">
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
              name="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export { ContactForm };
