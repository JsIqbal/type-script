import axios from "axios";
import { error, success } from "../../../core/common/toaster";

const useResendOtp = () => {
    const handleResendSubmit = async () => {
        const access_token = `Token ${localStorage.getItem("access")}`;
        const participant_id = parseInt(
            localStorage.getItem("participant_id")!
        );

        const submitOTP = "http://127.0.0.1:8000/campaign/resend-otp/";
        const headers = {
            Authorization: access_token,
        };

        const data = new FormData();
        data.append("participant_id", String(participant_id));

        try {
            const response = await axios.post(submitOTP, data, { headers });
            success();
        } catch (err) {
            error();
            // resetForm();
        } finally {
            // setSubmitting(false);
        }
    };
    return { handleResendSubmit };
};

export { useResendOtp };
