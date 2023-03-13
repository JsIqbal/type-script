import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginSchema } from "../user.schema";
import { login } from "../user.actions";
import { useNavigate } from "react-router-dom";

function Login() {
    let navigate = useNavigate();
    return (
        <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={loginSchema}
                onSubmit={(values, actions) => {
                    actions.setSubmitting(false);
                }}
            >
                {(formikprops) => {
                    return (
                        <form className="p-4 bg-white rounded-lg shadow-lg  col-lg-3">
                            <h2 className="mb-4 h4 text-center text-primary font-weight-bold">
                                QikCheck
                            </h2>
                            <div className="mb-4">
                                <label htmlFor="email" className="form-label">
                                    Email Address
                                </label>
                                <Field
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="example@example.com"
                                />
                                <div className="text-danger mt-1">
                                    <ErrorMessage name="email" />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="password"
                                    className="form-label"
                                >
                                    Password
                                </label>
                                <Field
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="********"
                                />
                                <div className="text-danger mt-1">
                                    <ErrorMessage name="password" />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-block mt-4"
                                disabled={formikprops.isSubmitting}
                            >
                                {formikprops.isSubmitting
                                    ? "Loading..."
                                    : "Login"}
                            </button>
                        </form>
                    );
                }}
            </Formik>
        </div>
    );
}

export default Login;
