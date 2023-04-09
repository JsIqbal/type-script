import { useState } from "react";
import axios from "axios";
import { useGetCampaign } from "./useGetCampaign";
import { toast } from "../../../core";
import { useNavigate } from "react-router-dom";

function useCreateSurvey() {
    const navigate = useNavigate();
    const { campaigns, loading, error } = useGetCampaign();
    const [formData, setFormData] = useState({
        participant_phone: "",
        code: "",
        id: "",
        participant_operator: "",
    });

    const [submitting, setSubmitting] = useState(false);

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (values: any, e: any) => {
        // e.resetForm();
        setSubmitting(true);

        const data = new FormData();
        data.append("participant_phone", `880${values.participant_phone}`);
        data.append("outlet_name", values.id);
        data.append("outlet_code", values.code);
        data.append("participant_operator", values.participant_operator);

        const url = "http://127.0.0.1:8000/campaign/start-survey/";
        const access_token = `Token ${localStorage.getItem("access")}`;
        const headers = {
            Authorization: access_token,
        };
        axios
            .post(url, data, { headers })
            .then((response) => {
                localStorage.setItem(
                    "participant_id",
                    response.data.participant_id
                );
                toast.success();
                navigate("/survey/otp");
            })
            .catch((err) => {
                navigate("/");
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    return {
        campaigns,
        loading,
        error,
        formData,
        submitting,
        handleChange,
        handleSubmit,
    };
}

export default useCreateSurvey;
