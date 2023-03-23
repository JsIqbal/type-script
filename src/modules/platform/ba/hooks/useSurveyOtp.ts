import axios from "axios";
import { FormValues } from "../interface";
import { useNavigate } from "react-router-dom";
import { error, success } from "../../../core/common/toaster";

const useSurveyOtp = () => {
    const navigate = useNavigate();

    const initialValues: FormValues = { otp: 0 };

    const handleSubmit = async (
        values: FormValues,
        { setSubmitting, resetForm }: any
    ) => {
        const access_token = `Token ${localStorage.getItem("access")}`;
        const participant_id = parseInt(
            localStorage.getItem("participant_id")!
        );

        const submitOTP = "http://127.0.0.1:8000/campaign/submit-otp/";
        const headers = {
            Authorization: access_token,
        };

        const data = new FormData();
        data.append("otp", String(values.otp));
        data.append("participant_id", String(participant_id));

        try {
            const response = await axios.post(submitOTP, data, { headers });
            success();
            navigate("/survey/form");
        } catch (err) {
            error();
            resetForm();
        } finally {
            setSubmitting(false);
        }
    };
    return { initialValues, handleSubmit };
};

export { useSurveyOtp };
