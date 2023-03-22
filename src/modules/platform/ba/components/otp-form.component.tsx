import { Form, Field, ErrorMessage } from "formik";
import { Button } from "react-bootstrap";

const OtpForm = ({ isSubmitting }: any) => {
    return (
        <Form>
            <div className="form-group">
                <label htmlFor="otp" className="mb-1">
                    OTP
                </label>
                <Field
                    type="text"
                    id="otp"
                    name="otp"
                    className="form-control"
                />
                <ErrorMessage
                    name="otp"
                    component="div"
                    className="text-danger"
                />
            </div>
            <div className="form-group">
                <label htmlFor="participant_id" className="mb-1">
                    Participant ID
                </label>
                <Field
                    type="number"
                    id="participant_id"
                    name="participant_id"
                    className="form-control"
                />
                <ErrorMessage
                    name="participant_id"
                    component="div"
                    className="text-danger"
                />
            </div>
            <Button
                disabled={isSubmitting}
                className="mt-3 btn btn-primary btn-block"
                type="submit"
            >
                Submit
            </Button>
        </Form>
    );
};

export default OtpForm;
