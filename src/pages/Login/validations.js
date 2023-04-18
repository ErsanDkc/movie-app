import { object, string } from "yup";

const schema = object({
  email: string().email("Email is Invalid!").required("Email is Required"),
  password: string()
    .required("Password is Required")
    .min(6, "Password must be at least 6"),
});
export default schema;
