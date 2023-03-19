import { Formik, FormikHelpers } from "formik";
import { login } from "../user.actions";
import { loginSchema } from "../user.schema";
import LoginForm from "./login-form.component";

interface FormValues {
    username: string;
    password: string;
}

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
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
            <div className="card p-3" style={{ borderRadius: "10px" }}>
                <h2 className="text-center mb-4">QikCheck</h2>
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
