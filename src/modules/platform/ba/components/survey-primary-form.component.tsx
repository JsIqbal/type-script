import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import { Typography } from "../../../core";

const SurveyForm = ({ handleSubmit, data, formData, handleChange }: any) => {
    const validationSchema = Yup.object({
        participant_name: Yup.string().required("Participant name is required"),
        participant_phone: Yup.string().required(
            "Participant phone is required"
        ),
        age: Yup.number()
            .required("Age is required")
            .positive("Age must be a positive number"),
        profession: Yup.string().required("Profession is required"),
        code: Yup.string().required("Outlet Code is required"),
        id: Yup.string().required("Outlet Id is required"),
    });

    return (
        <Formik
            initialValues={formData}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
                <Form>
                    <Typography
                        className="ba-form-heading"
                        element={`${data?.campaigns}`}
                    />
                    <div className="mb-3">
                        <label
                            htmlFor="participant_name"
                            className="form-label"
                        >
                            Participant Name
                        </label>
                        <Field
                            type="text"
                            name="participant_name"
                            className={`form-control ${
                                touched.participant_name &&
                                errors.participant_name
                                    ? "is-invalid"
                                    : ""
                            }`}
                            placeholder="Enter participant name"
                        />
                        <ErrorMessage
                            name="participant_name"
                            component="div"
                            className="invalid-feedback"
                        />
                    </div>

                    <div className="mb-3">
                        <label
                            htmlFor="participant_phone"
                            className="form-label"
                        >
                            Participant Phone
                        </label>
                        <Field
                            type="text"
                            name="participant_phone"
                            className={`form-control ${
                                touched.participant_phone &&
                                errors.participant_phone
                                    ? "is-invalid"
                                    : ""
                            }`}
                            placeholder="Enter participant phone"
                        />
                        <ErrorMessage
                            name="participant_phone"
                            component="div"
                            className="invalid-feedback"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">
                            Age
                        </label>
                        <Field
                            type="number"
                            name="age"
                            className={`form-control ${
                                touched.age && errors.age ? "is-invalid" : ""
                            }`}
                            placeholder="Enter age"
                        />
                        <ErrorMessage
                            name="age"
                            component="div"
                            className="invalid-feedback"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="profession" className="form-label">
                            Profession
                        </label>
                        <Field
                            type="text"
                            name="profession"
                            className={`form-control ${
                                touched.profession && errors.profession
                                    ? "is-invalid"
                                    : ""
                            }`}
                            placeholder="Enter profession"
                        />
                        <ErrorMessage
                            name="profession"
                            component="div"
                            className="invalid-feedback"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="code" className="form-label">
                            Outlet Code
                        </label>
                        <Field
                            type="text"
                            name="code"
                            className={`form-control ${
                                touched.code && errors.code ? "is-invalid" : ""
                            }`}
                            placeholder="Enter Outlet Code"
                        />
                        <ErrorMessage
                            name="code"
                            component="div"
                            className="invalid-feedback"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="id" className="form-label">
                            Outlet Id
                        </label>
                        <Field
                            type="text"
                            name="id"
                            className={`form-control ${
                                touched.id && errors.id ? "is-invalid" : ""
                            }`}
                            placeholder="Enter id"
                        />
                        <ErrorMessage
                            name="id"
                            component="div"
                            className="invalid-feedback"
                        />
                    </div>

                    <Button
                        className="mt-2 btn btn-primary"
                        variant=" primary"
                        type="submit"
                    >
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default SurveyForm;
