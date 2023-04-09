import { object, number, string } from "yup";

export const otpSchema = object().shape({
    otp: number().min(6, "6 Digit Please").required("6 digit otp please"),
});

export const surveyPrimarySchema = object({
    participant_phone: string()
        .required("Participant phone is required")
        .min(10, "minimum 10 digits required")
        .max(10, "please input without 880 before number"),
    code: string().required("Outlet Code is required"),
    id: string().required("Outlet Name is required"),
});

export const surveySecondarySchema = object({
    participant_name: string().required("Participant name is required"),
    age: string().required("Age is required"),
    // .positive("Age must be a positive number"),
    profession: string().required("Profession is required"),
});
