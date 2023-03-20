import { Formik, FormikHelpers } from "formik";
import { login } from "../user.actions";
import { loginSchema } from "../user.schema";
import LoginForm from "./login-form.component";
import { FormValues } from "../interface";
import Typography from "../../../core/common/typography.component";

const Login: React.FC = () => {
    const initialValues = { username: "", password: "" };

    const handleSubmit = async (
        values: FormValues,
        actions: FormikHelpers<FormValues>
    ) => {
        await login(values).then((response: any) => {
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

export default Login;
