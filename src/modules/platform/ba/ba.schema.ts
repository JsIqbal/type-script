import { object, number } from "yup";

export const otpSchema = object().shape({
    otp: number().required("6 digit otp please"),
});
