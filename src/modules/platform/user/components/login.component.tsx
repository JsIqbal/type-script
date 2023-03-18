import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import { login } from "../user.actions";
import { loginSchema } from "../user.schema";

interface FormValues {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    const navigate = useNavigate();
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
                        <Form>
                            <div className="form-group">
                                <label htmlFor="email">Username</label>
                                <Field
                                    type="username"
                                    name="username"
                                    className="form-control"
                                    placeholder="user name"
                                />
                                <ErrorMessage
                                    name="username"
                                    component="div"
                                    className="text-danger"
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="password">Password</label>
                                <Field
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-danger"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary"
                            >
                                {isSubmitting ? "Loading..." : "Login"}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Login;
