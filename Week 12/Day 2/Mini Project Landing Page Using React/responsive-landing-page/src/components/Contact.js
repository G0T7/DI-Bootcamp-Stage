import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section py-5">
      <div className="container text-center">
        <h2>Contact us</h2>
        <p>Contact us and we will get back to you within 24 hours.</p>
        <p><i className="fa fa-map-marker"></i> Company Name</p>
        <p><i className="fa fa-phone"></i> +256 778 800 900</p>
        <p><i className="fa fa-envelope"></i> company.gmail.com</p>
        <form className="contact-form mt-4">
          <input type="email" className="form-control mb-3" placeholder="email address" required />
          <textarea className="form-control mb-3" placeholder="comment" required></textarea>
          <button type="submit" className="btn btn-danger">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
