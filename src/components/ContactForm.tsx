import React, { FC, useRef, useState } from "react";
//Hooks
import { useMutation } from "@apollo/client/react";
import { useFormik, FormikProps } from "formik";
//Validation schema
import contactValidation from "../schema/contactValidation";
//Mutation
import addAnswer from "../mutation/ContactMutationGql";
//ReCAPTCHA
import ReCAPTCHA, { ReCAPTCHAProps } from "react-google-recaptcha";
import { onReCAPTCHAChange } from "../utils/recaptcha";
//Types
import { IForm } from "../query/ContactGql";

interface IContactForm {
  contactData: IForm;
  order?: string;
  closeModal?: () => void;
}

export interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: FC<IContactForm> = ({ contactData, order, closeModal }) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY;
  const [submitted, setSubmitted] = useState(false);
  const [answerToStrapi] = useMutation(addAnswer);

  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },

    validationSchema: contactValidation,

    onSubmit: async (values, { resetForm }) => {
      const token = await recaptchaRef?.current?.executeAsync().then((res) => {
        if (res) {
          const data = {
            name: values.name,
            mail: values.email,
            message: values.message,
            phone: values.phone,
            order: order,
          };

          answerToStrapi({
            variables: {
              ...data,
            },
          });

          fetch("/api/contact", {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }).then((res) => {
            // console.log("Response received");
            if (res.ok) {
              // console.log("Response succeeded!");
              setSubmitted(true);
              resetForm();
              closeModal && closeModal();
              alert("Děkuji za odeslání formuláře, odpovím co nedříve :-) ");
            } else {
              throw new Error(`HTTP error: ${res.status}`);
            }
          });
        }
      });
    },
  });

  const handleReCAPTCHAChange = async (captchaCode: string | null) => {
    await onReCAPTCHAChange(captchaCode, formik, recaptchaRef);
  };

  return (
    <form
      className="flex flex-col space-y-6 py-6 md:py-0 md:px-6"
      onSubmit={formik.handleSubmit}
    >
      {contactData.FormField.map((field) =>
        field.Name === "message" ? (
          <div key={field.id}>
            <label className="block">
              <span className="mb-1">{field.Label}</span>
              <textarea
                id={field.Name}
                name={field.Name}
                placeholder={field.PlaceHolder}
                value={formik.values[field.Name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                rows={5}
                className="block w-full bg-bgsecondary shadow-sm focus:border-b-2 focus-visible:outline-0"
              />
              {formik.touched[field.Name] && formik.errors[field.Name] ? (
                <div className=" text-red-600 text-xs">
                  {formik.errors[field.Name]}
                </div>
              ) : null}
            </label>
          </div>
        ) : (
          <label className="block" key={field.id}>
            <span className="mb-1">{field.Label}</span>
            <input
              type="text"
              id={field.Name}
              name={field.Name}
              placeholder={field.PlaceHolder}
              value={formik.values[field.Name as keyof FormValues]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block w-full bg-bgsecondary shadow-sm focus:border-b-2 focus-visible:outline-0"
            />
            {formik.touched[field.Name as keyof FormValues] &&
            formik.errors[field.Name as keyof FormValues] ? (
              <div className=" text-red-600 text-xs">
                {formik.errors[field.Name as keyof FormValues]}
              </div>
            ) : null}
          </label>
        )
      )}
      <div className="flex justify-center">
        <button type="submit" className="btn-primary max-w-[200px]">
          {contactData.SubmitButton}
        </button>
      </div>
      {recaptchaKey && (
        <ReCAPTCHA
          size="invisible"
          sitekey={recaptchaKey}
          onChange={handleReCAPTCHAChange}
          ref={recaptchaRef}
        />
      )}
    </form>
  );
};

export default ContactForm;
