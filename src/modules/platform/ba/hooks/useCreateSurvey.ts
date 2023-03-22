import { useState } from "react";
import axios from "axios";
import { useGetCampaign } from "./useGetCampaign";
import { success } from "../../../core/common/toaster";
import { useNavigate } from "react-router-dom";

function useCreateSurvey() {
    const naviate = useNavigate();
    const { campaigns, loading, error } = useGetCampaign();
    const [formData, setFormData] = useState({
        participant_name: "",
        participant_phone: "",
        age: "",
        profession: "",
    });

    const handleChange = (event: any) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const url = "http://127.0.0.1:8000/campaign/create-survey/";
        const access_token = `Token ${localStorage.getItem("access")}`;
        const headers = {
            Authorization: access_token,
        };
        axios
            .post(url, formData, { headers })
            .then((response) => {
                success();
                naviate("/survey/otp");
            })
            .catch((err) => {});
    };

    return { campaigns, loading, error, formData, handleChange, handleSubmit };
}

export default useCreateSurvey;
