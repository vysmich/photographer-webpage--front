import * as Yup from "yup";

const phoneRegExp =
  /^[\+]?[0-9]{0,3}?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/;
//TODO i18n for error message
const contactValidation = Yup.object().shape({
  name: Yup.string()
    .min(3, "Jméno musí mít alespoň 3 znaky")
    .max(35, "Jméno může mít maximálně 35 znaků")
    .required("Povinné pole"),
  phone: Yup.string()
    .matches(phoneRegExp, "Zadejte správné telefonní číslo bez mezer")
    .min(9)
    .max(13)
    .required("Povinné pole"),
  email: Yup.string().email("Chybný email").required("Povinné pole"),
  message: Yup.string()
    .min(10, "Zpráva  musí mít alespoň 10 znaků")
    .required("Povinné pole"),
});

export default contactValidation;
