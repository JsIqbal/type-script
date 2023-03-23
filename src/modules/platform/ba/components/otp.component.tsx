import { Formik } from "formik";
import { Col } from "react-bootstrap";
import { useSurveyOtp } from "../hooks/useSurveyOtp";
import OtpForm from "./otp-form.component";
import { otpSchema } from "../ba.schema";

const SubmitOtpForm: React.FC = () => {
    const { initialValues, handleSubmit } = useSurveyOtp();
    return (
        <Formik
            validationSchema={otpSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Col
                    style={{ marginBottom: "227px" }}
                    className="col-lg-3 ms-auto me-auto mt-5 card chart p-5"
                >
                    <OtpForm isSubmitting={isSubmitting} />
                </Col>
            )}
        </Formik>
    );
};

export default SubmitOtpForm;
