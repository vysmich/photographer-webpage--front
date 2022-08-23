const onReCAPTCHAChange = async (captchaCode, recaptchaRef) => {
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
    // console.log(recaptchaRef);
    recaptchaRef.current.reset();
  }
};

export default onReCAPTCHAChange;
