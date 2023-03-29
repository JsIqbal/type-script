import { Form, Field, ErrorMessage } from "formik";
import { Label } from "../../../core";

const LoginForm = ({ isSubmitting }: any) => {
    return (
        <Form>
            <div className="form-group">
                <Label htmlFor="email" title="Username" />
                <Field
                    type="username"
                    name="username"
                    className="form-control"
                    placeholder="Enter Username"
                />
                <ErrorMessage
                    name="username"
                    component="div"
                    className="text-danger"
                />
            </div>
            <div className="form-group mb-2">
                <Label htmlFor="password" title="Password" />
                <Field
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter Password"
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
