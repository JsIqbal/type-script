import { Form, Field, ErrorMessage } from "formik";

const OtpForm = ({ isSubmitting }: any) => {
    return (
        <Form>
            <div className="form-group">
                <label htmlFor="otp" className="mb-1">
                    OTP
                </label>
                <Field
                    type="number"
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
            <button
                disabled={isSubmitting}
                className="mt-3 btn btn-primary btn-block"
                type="submit"
            >
                {isSubmitting ? "Loading..." : "Submit"}
            </button>
        </Form>
    );
};

export default OtpForm;
