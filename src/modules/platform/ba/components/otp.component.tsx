import { Formik } from "formik";
import { Col } from "react-bootstrap";
import { useSurveyOtp } from "../hooks/useSurveyOtp";
import OtpForm from "./otp-form.component";

const SubmitOtpForm = () => {
    const { initialValues, onSubmit, validate } = useSurveyOtp();

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={validate}
        >
            {({ isSubmitting }) => (
                <Col className="col-lg-3 ms-auto me-auto mt-5 card chart p-5">
                    <OtpForm isSubmitting={isSubmitting} />
                </Col>
            )}
        </Formik>
    );
};

export default SubmitOtpForm;
