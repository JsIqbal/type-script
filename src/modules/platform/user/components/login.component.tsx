import { Formik, FormikHelpers } from "formik";
import { Typography } from "../../../core";
import { userActions, loginSchema } from "..";
import LoginForm from "./login-form.component";
import { FormValues } from "../interface";

const Login: React.FC = () => {
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

    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center login-background">
            <div className="card p-3" style={{ borderRadius: "10px" }}>
                <Typography
                    className="text-center mb-4 fs-2"
                    element="QikCheck"
                />
                <Formik
                    initialValues={initialValues}
                    validationSchema={loginSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <LoginForm isSubmitting={isSubmitting} />
                    )}
                </Formik>
            </div>
        </div>
    );
};

export { Login };
