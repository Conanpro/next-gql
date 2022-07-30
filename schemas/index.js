import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("hello"),
  password: yup.string().min(5, "hi").required("hi")
});
