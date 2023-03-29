// import { Col, Placeholder } from "react-bootstrap";
// import useDashBoardHook from "../hooks/useDashBoardHook";
// import useSecondarySurvey from "../hooks/useSecondarySurvey";

// function SecondarySurvey() {
//     const { data } = useDashBoardHook();

//     const { loading, error, formData, handleChange, handleSubmit } =
//         useSecondarySurvey();

//     if (loading)
//         return (
//             <div aria-hidden="true">
//                 <Placeholder xs={6} />
//             </div>
//         );
//     if (error) return <div>{error}</div>;
//     return (
//         <Col
//             style={{ marginBottom: "43px" }}
//             className="col-lg-6 ms-auto me-auto mt-5 card chart p-5 mb-5"
//         >
//             {/*  Here will be the form */}
//         </Col>
//     );
// }

// export default SecondarySurvey;

import {
    Col,
    Form,
    FormGroup,
    // label,
    // Input,
    Button,
    Placeholder,
} from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import useDashBoardHook from "../hooks/useDashBoardHook";
import useSecondarySurvey from "../hooks/useSecondarySurvey";
import { surveySecondarySchema } from "../ba.schema";

function SecondarySurvey() {
    const { data } = useDashBoardHook();

    const { loading, error, formData, handleChange, handleSubmit } =
        useSecondarySurvey();

    if (loading)
        return (
            <div aria-hidden="true">
                <Placeholder xs={6} />
            </div>
        );
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
                                id="age"
                                type="number"
                                name="age"
                                className={`form-control ${
                                    touched.age && errors.age
                                        ? "is-invalid"
                                        : ""
                                }`}
                                placeholder="Enter participant age"
                            />
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
                                id="profession"
                                type="text"
                                name="profession"
                                className={`form-control ${
                                    touched.profession && errors.profession
                                        ? "is-invalid"
                                        : ""
                                }`}
                                placeholder="Enter participant profession"
                            />
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
