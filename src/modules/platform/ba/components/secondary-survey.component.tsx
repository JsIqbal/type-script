import { Col, Form, FormGroup, Button, Placeholder } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import useDashBoardHook from "../hooks/useDashBoardHook";
import useSecondarySurvey from "../hooks/useSecondarySurvey";
import { surveySecondarySchema } from "../ba.schema";
import useDynamicSelect from "../hooks/useDynamicSelect";

function SecondarySurvey() {
    const { data } = useDashBoardHook();
    const dynamic = useDynamicSelect();

    const { loading, error, formData, handleChange, handleSubmit } =
        useSecondarySurvey();

    if (loading) return <h1 className="text-center mt-5">Loading...</h1>;
    if (error) return <div>{error}</div>;

    return (
        <Col
            style={{ marginBottom: "43px" }}
            className="col-lg-6 ms-auto me-auto mt-5 card chart p-5 mb-5"
        >
            <Formik
                initialValues={formData}
                onSubmit={handleSubmit}
                validationSchema={surveySecondarySchema}
            >
                {({ handleSubmit, errors, touched }) => (
                    <Form onSubmit={handleSubmit}>
                        <FormGroup className="mb-3">
                            <label
                                htmlFor="participant_name"
                                className="form-label"
                            >
                                Participant Name
                            </label>
                            <Field
                                id="participant_name"
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
                        </FormGroup>

                        <FormGroup className="mb-3">
                            <label htmlFor="age" className="form-label">
                                Age
                            </label>
                            <Field
                                as="select"
                                id="age"
                                name="age"
                                className={`form-control ${
                                    touched.age && errors.age
                                        ? "is-invalid"
                                        : ""
                                }`}
                            >
                                <option value="">Select age range</option>
                                {dynamic?.age_choices.map((ageChoice) => (
                                    <option
                                        key={ageChoice.id}
                                        value={ageChoice.age}
                                    >
                                        {ageChoice.age}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage
                                name="age"
                                component="div"
                                className="invalid-feedback"
                            />
                        </FormGroup>

                        <FormGroup className="mb-3">
                            <label htmlFor="profession" className="form-label">
                                Profession
                            </label>
                            <Field
                                as="select"
                                id="profession"
                                name="profession"
                                className={`form-control ${
                                    touched.profession && errors.profession
                                        ? "is-invalid"
                                        : ""
                                }`}
                            >
                                <option value="">Select profession</option>
                                {dynamic?.job_choices.map((jobChoice) => (
                                    <option
                                        key={jobChoice.id}
                                        value={jobChoice.professions}
                                    >
                                        {jobChoice.professions}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage
                                name="profession"
                                component="div"
                                className="invalid-feedback"
                            />
                        </FormGroup>

                        <Button type="submit">Submit</Button>
                    </Form>
                )}
            </Formik>
        </Col>
    );
}

export default SecondarySurvey;
