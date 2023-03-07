import React, { useRef } from "react";
import "./form.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import data from "../../pages/data";

const Form = () => {
  console.log(data);
  const form = useRef();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, "Maximum limit is 30")
        .required("Name is required"),
      email: Yup.string().email("Invalid Email").required("Email is required"),
      message: Yup.string(),
    }),

    onSubmit: (values, { setSubmitting, resetForm }) => {
      emailjs
        .sendForm(
          "service_22lxblu",
          "template_fabwt8g",
          form.current,
          "LJEHdsRdkzc7_LKbW"
        )
        .then(
          (result) => {
            console.log(result);
          },
          (error) => {
            console.log(error.text);
          }
        );

      resetForm(formik.initialValues);

      setSubmitting(false);
    },
  });

  return (
    <div className="contact-info">
      <h3 className="section-heading">Contact</h3>
      <p className="contact-description">
        I'm open to various forms of cooperation, if you want o work together or
        just ask a question, then fill out the form below.
      </p>
      <form className="contact-form" ref={form} onSubmit={formik.handleSubmit}>
        <label htmlFor="name">
          What is your name?<span>*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && <p className="errors">{formik.errors.name}</p>}
        <label htmlFor="email">
          Your email:<span>*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && <p className="errors">{formik.errors.email}</p>}

        <label htmlFor="message">Anything to discuss:</label>
        <textarea
          rows="5"
          cols="5"
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
        />
        {formik.errors.message && (
          <p className="errors">{formik.errors.message}</p>
        )}
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;
