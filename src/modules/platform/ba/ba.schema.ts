import { object, number, string } from "yup";

export const otpSchema = object().shape({
    otp: number().min(6, "6 Digit Please").required("6 digit otp please"),
});

export const surveyPrimarySchema = object({
    participant_phone: string()
        .required("Participant phone is required")
        .min(13, "please input 880 before number"),
    code: string().required("Outlet Code is required"),
    id: string().required("Outlet Name is required"),
});

export const surveySecondarySchema = object({
    participant_name: string().required("Participant name is required"),
    age: number()
        .required("Age is required")
        .positive("Age must be a positive number"),
    profession: string().required("Profession is required"),
});
