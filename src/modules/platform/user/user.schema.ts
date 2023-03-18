import { string, object } from "yup";

export const loginSchema = object().shape({
    username: string().required("Invalid username"),
    password: string().required("Required"),
});
