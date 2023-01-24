import { useFormik, FormikProps } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import { FormValues } from "src/components/ContactForm";

export const onReCAPTCHAChange = async (
  captchaCode: string | null,
  formik: FormikProps<FormValues>,
  recaptchaRef: React.RefObject<ReCAPTCHA>
) => {
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
      //TODO add i18n
      // alert("Email byl odeslán");
    } else {
      // Else throw an error with the message returned
      // from the API
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    console.log(error);
  } finally {
    // Reset the reCAPTCHA when the request has failed or succeeeded
    // so that it can be executed again if user submits another email.
    recaptchaRef?.current?.reset();
  }
};
