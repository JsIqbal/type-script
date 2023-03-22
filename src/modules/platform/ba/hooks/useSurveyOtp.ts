import axios from "axios";

const useSurveyOtp = () => {
    const initialValues = {
        otp: "",
        participant_id: 0,
    };

    const onSubmit = async (values: any, { setSubmitting }: any) => {
        const access_token = `Token ${localStorage.getItem("access")}`;
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/campaign/submit-otp/",
                values,
                {
                    headers: {
                        Authorization: access_token,
                    },
                }
            );
            console.log(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setSubmitting(false);
        }
    };

    const validate = (values: any) => {
        const errors: any = {};
        if (!values.otp) {
            errors.otp = "OTP is required";
        }
        if (!values.participant_id) {
            errors.participant_id = "Participant ID is required";
        }
        return errors;
    };
    return { initialValues, onSubmit, validate };
};

export { useSurveyOtp };
