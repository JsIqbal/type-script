// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { Button } from "react-bootstrap";
// import { Typography } from "../../../core";
// import { surveyPrimarySchema } from "../ba.schema";

// const SurveyForm = ({ handleSubmit, data, formData }: any) => {
//     console.log(formData);
//     return (
//         <Formik
//             initialValues={formData}
//             validationSchema={surveyPrimarySchema}
//             onSubmit={handleSubmit}
//         >
//             {({ errors, touched }) => (
//                 <Form>
//                     <Typography
//                         className="ba-form-heading"
//                         element={`${data?.campaigns}`}
//                     />
//                     <div className="mb-3">
//                         <label
//                             htmlFor="participant_phone"
//                             className="form-label fw-bold"
//                         >
//                             Participant Phone
//                         </label>
//                         <div className="input-group">
//                             <span className="input-group-text">+880</span>
//                             <Field
//                                 id="participant_phone"
//                                 type="text"
//                                 name="participant_phone"
//                                 className={`form-control ${
//                                     touched.participant_phone &&
//                                     errors.participant_phone
//                                         ? "is-invalid"
//                                         : ""
//                                 }`}
//                                 placeholder="Enter participant phone"
//                             />
//                             <ErrorMessage
//                                 name="participant_phone"
//                                 component="div"
//                                 className="invalid-feedback"
//                             />
//                         </div>
//                     </div>

//                     <div className="mb-3">
//                         <label htmlFor="code" className="form-label fw-bold">
//                             Outlet Code
//                         </label>
//                         <Field
//                             type="text"
//                             name="code"
//                             className={`form-control ${
//                                 touched.code && errors.code ? "is-invalid" : ""
//                             }`}
//                             placeholder="Enter Outlet Code"
//                         />
//                         <ErrorMessage
//                             name="code"
//                             component="div"
//                             className="invalid-feedback"
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <label htmlFor="id" className="form-label fw-bold">
//                             Outlet Id
//                         </label>
//                         <Field
//                             type="text"
//                             name="id"
//                             className={`form-control ${
//                                 touched.id && errors.id ? "is-invalid" : ""
//                             }`}
//                             placeholder="Enter id"
//                         />
//                         <ErrorMessage
//                             name="id"
//                             component="div"
//                             className="invalid-feedback"
//                         />
//                     </div>

//                     <Button
//                         className="mt-2 btn btn-primary"
//                         variant=" primary"
//                         type="submit"
//                     >
//                         Submit
//                     </Button>
//                 </Form>
//             )}
//         </Formik>
//     );
// };

// export default SurveyForm;
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, FormCheck } from "react-bootstrap";
import { Typography } from "../../../core";
import { surveyPrimarySchema } from "../ba.schema";

const SurveyForm = ({ handleSubmit, data, formData }: any) => {
    console.log(formData);

    const [agreed, setAgreed] = useState(false);

    const handleAgreementCheck = (e: any) => {
        setAgreed(e.target.checked);
    };

    return (
        <Formik
            initialValues={formData}
            validationSchema={surveyPrimarySchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched, dirty, isValid, handleReset }) => (
                <Form>
                    <Typography
                        className="ba-form-heading"
                        element={`${data?.campaigns}`}
                    />
                    <div className="mb-3">
                        <label
                            htmlFor="participant_phone"
                            className="form-label fw-bold"
                        >
                            Participant Phone
                        </label>
                        <div className="input-group">
                            <span className="input-group-text">+880</span>
                            <Field
                                id="participant_phone"
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
                    </div>

                    <div className="mb-3">
                        <label htmlFor="code" className="form-label fw-bold">
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
                        <label htmlFor="id" className="form-label fw-bold">
                            Outlet Name
                        </label>
                        <Field
                            type="text"
                            name="id"
                            className={`form-control ${
                                touched.id && errors.id ? "is-invalid" : ""
                            }`}
                            placeholder="Enter Outlet Name"
                        />
                        <ErrorMessage
                            name="id"
                            component="div"
                            className="invalid-feedback"
                        />
                    </div>

                    <FormCheck
                        className="mb-3"
                        type="checkbox"
                        label="I agree to the terms and conditions"
                        checked={agreed}
                        onChange={handleAgreementCheck}
                    />

                    <Button
                        className="mt-2 btn btn-primary"
                        variant="primary"
                        type="submit"
                        disabled={!agreed || !dirty || !isValid}
                    >
                        Submit
                    </Button>
                    <Button
                        className="mt-2 btn btn-secondary ms-2"
                        variant="secondary"
                        type="button"
                        onClick={handleReset}
                    >
                        Clear Form
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default SurveyForm;
