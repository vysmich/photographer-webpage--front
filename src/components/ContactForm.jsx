import React from "react";

import { useFormik } from "formik";
import contactValidation from "../schema/contactValidation";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = ({ contactData }) => {
  const recaptchaRef = React.useRef(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },

    validationSchema: contactValidation,

    onSubmit: async (values) => {
      const token = await recaptchaRef.current.executeAsync();
      if (token) {
        console.log(values);
      }
    },
  });
  console.log(formik.errors.name);
  const onReCAPTCHAChange = async (captchaCode) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return;
    }
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          email: formik.values.email,
          captcha: captchaCode,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        // If the response is ok than show the success alert
        alert("Email registered successfully");
      } else {
        // Else throw an error with the message returned
        // from the API
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error?.message || "Something went wrong");
    } finally {
      // Reset the reCAPTCHA when the request has failed or succeeeded
      // so that it can be executed again if user submits another email.
      recaptchaRef.current.reset();
    }
  };

  return (
    <form
      className="flex flex-col space-y-6 py-6 md:py-0 md:px-6"
      onSubmit={formik.handleSubmit}
    >
      {contactData.FormField.map((field) =>
        field.Name == "message" ? (
          <label className="block" key={field.id}>
            <span className="mb-1">{field.Label}</span>
            <textarea
              id={field.Name}
              name={field.Name}
              placeholder={field.PlaceHolder}
              value={formik.values[field.Name]}
              onChange={formik.handleChange}
              rows="5"
              className="dark:bg-gray-800 block w-full shadow-sm focus:border-b-2 focus-visible:outline-0"
            />
          </label>
        ) : (
          <label className="block" key={field.id}>
            <span className="mb-1">{field.Label}</span>
            <input
              type="text"
              id={field.Name}
              name={field.Name}
              placeholder={field.PlaceHolder}
              value={formik.values[field.Name]}
              onChange={formik.handleChange}
              className="dark:bg-gray-800 block w-full shadow-sm focus:border-b-2 focus-visible:outline-0"
            />
          </label>
        )
      )}

      <button
        type="submit"
        className="dark:bg-orange-400 dark:text-gray-900 focus:ring-orange-400 hover:ring-orange-400 self-center rounded px-8 py-3 text-lg hover:ring focus:ring focus:ring-opacity-75"
      >
        {contactData.SubmitButton}
      </button>
      <ReCAPTCHA
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY}
        onChange={onReCAPTCHAChange}
        ref={recaptchaRef}
      />
    </form>
  );
};

export default ContactForm;
