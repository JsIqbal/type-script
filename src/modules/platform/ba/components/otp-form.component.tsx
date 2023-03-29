// import { Form, Field, ErrorMessage } from "formik";

// const OtpForm = ({ isSubmitting }: any) => {
//     return (
//         <Form>
//             <div className="form-group">
//                 <label htmlFor="otp" className="mb-1">
//                     OTP
//                 </label>
//                 <Field
//                     type="number"
//                     id="otp"
//                     name="otp"
//                     className="form-control"
//                 />
//                 <ErrorMessage
//                     name="otp"
//                     component="div"
//                     className="text-danger"
//                 />
//             </div>
//             <button
//                 disabled={isSubmitting}
//                 className="mt-3 btn btn-primary btn-block"
//                 type="submit"
//             >
//                 {isSubmitting ? "Loading..." : "Submit"}
//             </button>
//         </Form>
//     );
// };

// export default OtpForm;
import { Form, Field, ErrorMessage } from "formik";
import { useState, useEffect } from "react";

const OtpForm = ({ isSubmitting }: any) => {
    const [timer, setTimer] = useState(300); // 5 minutes in seconds
    const [resendDisabled, setResendDisabled] = useState(true);

    useEffect(() => {
        let interval: any = null;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else {
            clearInterval(interval);
            setResendDisabled(false);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handleResendClick = () => {
        setTimer(300);
        setResendDisabled(true);
        // Call a function to resend the OTP
    };

    return (
        <Form>
            <div className="form-group">
                <label htmlFor="otp" className="mb-1">
                    OTP
                </label>
                <div className="input-group">
                    <Field
                        type="number"
                        id="otp"
                        name="otp"
                        className="form-control"
                        placeholder="Enter OTP"
                    />
                    <button className="btn btn-outline-secondary" type="button">
                        Resend OTP {resendDisabled ? `(${timer}s)` : ""}
                    </button>
                </div>
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
