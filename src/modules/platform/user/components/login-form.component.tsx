import { Form, Field, ErrorMessage } from "formik";

const LoginForm = ({ isSubmitting }: any) => {
    return (
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
    );
};

export default LoginForm;
