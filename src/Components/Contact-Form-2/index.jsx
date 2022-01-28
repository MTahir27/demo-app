import React from 'react';
import "./index.css";

function ContactForm2() {
  return (
    <div className="container">
    <div className="contactForm">
      <div className="row g-4">
        <div className="col-sm-6 col-md-4">
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            name="fullName"
            onChange={handleChange}
          />
        </div>
        <div className="col-sm-6 col-md-4">
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="demo@example.com"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="">Subject</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Subject"
            name="subject"
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="">Message</label>
          <textarea
            name="message"
            className="form-control"
            rows="5"
            placeholder="Write Message Here"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 text-start">
          <input
            type="submit"
            value={"Submit"}
            className="btn btn-primary"
            name="submit"
            onClick={submitForm}
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactForm2;
