import { Formik } from "formik";
import { Typography } from "../../../core";
import { loginSchema } from "..";
import LoginForm from "./login-form.component";
import useLogin from "../hooks/useLogin";

const Login: React.FC = () => {
    const { initialValues, handleSubmit } = useLogin();

    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center login-background">
            <div
                className="col-lg-4 login-form p-3"
                style={{ borderRadius: "10px" }}
            >
                <div className="row">
                    <Typography
                        className="text-center  fs-1 fw-bold"
                        element="Qik-Check"
                    />
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={loginSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <LoginForm isSubmitting={isSubmitting} />
                    )}
                </Formik>
                <div className="row">
                    <Typography
                        className="text-center  fs-6"
                        element="Powered by ADA"
                    />
                </div>
            </div>
        </div>
    );
};

export { Login };
