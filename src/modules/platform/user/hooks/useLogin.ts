import { FormikHelpers } from "formik";
import { userActions } from "..";
import { FormValues } from "../interface";

const useLogin = () => {
    const initialValues = { username: "", password: "" };

    const handleSubmit = async (
        values: FormValues,
        actions: FormikHelpers<FormValues>
    ) => {
        await userActions.login(values).then((response: any) => {
            localStorage.setItem("userType", response.data.userType);
            localStorage.setItem("access", response.data.access);
            window.location.href = "/";
        });
        actions.setSubmitting(false);
    };
    return { initialValues, handleSubmit };
};

export default useLogin;
