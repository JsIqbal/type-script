// import OtpInput from "react-otp-input";
// import { useState } from "react";
// import { Col } from "react-bootstrap";
// import { useSurveyOtp } from "../hooks/useSurveyOtp";

// const SubmitOtpForm = ({ isSubmitting }: any) => {
//     const [otp, setOtp] = useState("");
//     const { handleSubmit } = useSurveyOtp();
//     return (
//         <Col
//             style={{ marginBottom: "227px" }}
//             className="col-lg-5 ms-auto me-auto mt-5 card chart p-5"
//         >
//             <form onSubmit={(e) => handleSubmit(otp, e)}>
//                 <div className="form-group text-center">
//                     <label htmlFor="otp" className="mb-1 text-center fs-1">
//                         OTP
//                     </label>
//                     <OtpInput
//                         value={otp}
//                         onChange={setOtp}
//                         numInputs={6}
//                         renderSeparator={
//                             <span className="otp-separator">-</span>
//                         }
//                         inputStyle={{
//                             width: "50px",
//                             height: "50px",
//                             borderRadius: "10px",
//                             border: "2px solid #ccc",
//                             fontSize: "28px",
//                             fontWeight: "bold",
//                             margin: "0 10px",
//                             textAlign: "center",
//                             outline: "none",
//                         }}
//                         containerStyle={{
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             marginBottom: "20px",
//                         }}
//                         renderInput={(props) => (
//                             <input required id="otp" name="otp" {...props} />
//                         )}
//                     />
//                 </div>
//                 <button
//                     disabled={isSubmitting}
//                     className="mt-3 btn btn-primary btn-block ms-2"
//                     type="submit"
//                 >
//                     Submit
//                 </button>
//                 <button className="mt-3 btn btn-primary btn-block ms-2">
//                     Resend Otp
//                 </button>
//             </form>
//         </Col>
//     );
// };

// export default SubmitOtpForm;
// import OtpInput from "react-otp-input";
// import { useState, useEffect } from "react";
// import { Col } from "react-bootstrap";
// import { useSurveyOtp } from "../hooks/useSurveyOtp";

// const SubmitOtpForm = ({ isSubmitting }: any) => {
//     const [otp, setOtp] = useState("");
//     const [timeRemaining, setTimeRemaining] = useState(0);
//     const { handleSubmit } = useSurveyOtp();

//     useEffect(() => {
//         let timerId: number;
//         if (timeRemaining > 0) {
//             timerId = window.setTimeout(() => {
//                 setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 1);
//             }, 1000);
//         }
//         return () => {
//             clearTimeout(timerId);
//         };
//     }, [timeRemaining]);

//     const handleResend = () => {
//         setTimeRemaining(200);
//         // make API call to resend OTP
//     };

//     return (
//         <Col
//             style={{ marginBottom: "227px" }}
//             className="col-lg-5 ms-auto me-auto mt-5 card chart p-5"
//         >
//             <form onSubmit={(e) => handleSubmit(otp, e)}>
//                 <div className="form-group text-center">
//                     <label htmlFor="otp" className="mb-1 text-center fs-1">
//                         OTP
//                     </label>
//                     <OtpInput
//                         value={otp}
//                         onChange={setOtp}
//                         numInputs={6}
//                         renderSeparator={
//                             <span className="otp-separator">-</span>
//                         }
//                         inputStyle={{
//                             width: "50px",
//                             height: "50px",
//                             borderRadius: "10px",
//                             border: "2px solid #ccc",
//                             fontSize: "28px",
//                             fontWeight: "bold",
//                             margin: "0 10px",
//                             textAlign: "center",
//                             outline: "none",
//                         }}
//                         containerStyle={{
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             marginBottom: "20px",
//                         }}
//                         renderInput={(props) => (
//                             <input required id="otp" name="otp" {...props} />
//                         )}
//                     />
//                 </div>
//                 <button
//                     disabled={isSubmitting}
//                     className="mt-3 btn btn-primary btn-block"
//                     type="submit"
//                 >
//                     {isSubmitting ? "Loading..." : "Submit"}
//                 </button>
//                 <button
//                     disabled={timeRemaining > 0}
//                     className="mt-3 btn btn-primary btn-block"
//                     type="button"
//                     onClick={handleResend}
//                 >
//                     {timeRemaining > 0
//                         ? `Resend in ${timeRemaining}s`
//                         : "Resend"}
//                 </button>
//             </form>
//         </Col>
//     );
// };

// export default SubmitOtpForm;
import OtpInput from "react-otp-input";
import { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { useSurveyOtp } from "../hooks/useSurveyOtp";
import { useResendOtp } from "../hooks/useResendOtp";

const SubmitOtpForm = ({ isSubmitting }: any) => {
    const [otp, setOtp] = useState("");
    const [countdown, setCountdown] = useState(200);

    const { handleSubmit } = useSurveyOtp();
    const { handleResendSubmit } = useResendOtp();

    useEffect(() => {
        const timer = setTimeout(() => {
            setCountdown((countdown) => countdown - 1);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [countdown]);

    const handleResendClick = () => {
        handleResendSubmit();
        setCountdown(200);
    };

    return (
        <Col
            style={{ marginBottom: "227px" }}
            className="col-lg-5 ms-auto me-auto mt-5 card chart p-5"
        >
            <form onSubmit={(e) => handleSubmit(otp, e)}>
                <div className="form-group text-center">
                    <label htmlFor="otp" className="mb-1 text-center fs-1">
                        OTP
                    </label>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderSeparator={
                            <span className="otp-separator">-</span>
                        }
                        inputStyle={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "10px",
                            border: "2px solid #ccc",
                            fontSize: "28px",
                            fontWeight: "bold",
                            margin: "0 10px",
                            textAlign: "center",
                            outline: "none",
                        }}
                        containerStyle={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "20px",
                        }}
                        renderInput={(props) => (
                            <input required id="otp" name="otp" {...props} />
                        )}
                    />
                </div>
                <button
                    disabled={isSubmitting}
                    className="mt-3 btn btn-primary btn-block"
                    type="submit"
                >
                    {isSubmitting ? "Loading..." : "Submit"}
                </button>
                <button
                    disabled={countdown > 0}
                    className="mt-3 btn btn-secondary btn-block ms-2"
                    onClick={handleResendClick}
                >
                    {countdown > 0
                        ? `Resend OTP in ${countdown}s`
                        : "Resend OTP"}
                </button>
            </form>
        </Col>
    );
};

export default SubmitOtpForm;
