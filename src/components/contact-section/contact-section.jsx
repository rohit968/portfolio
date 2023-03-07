import React from "react";
import Form from "../form/form";
import "./contact-section.css";

const ContactSection = () => {
  return (
    <div className="contact-container">
      <Form />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15555.36318259878!2d77.66980334183349!3d12.917951996654786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1677503746045!5m2!1sen!2sin"
        style={{ border: 0 }}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="address"
        className="contact-maps"
      ></iframe>
    </div>
  );
};

export default ContactSection;
