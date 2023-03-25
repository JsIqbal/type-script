import { useState } from "react";
import axios from "axios";
import { useGetCampaign } from "./useGetCampaign";
import { toast } from "../../../core";
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
        const data = new FormData();
        data.append("participant_name", formData.participant_name);
        data.append("participant_phone", formData.participant_phone);
        data.append("age", formData.age);
        data.append("profession", formData.profession);
        event.preventDefault();
        const url = "http://127.0.0.1:8000/campaign/create-survey/";
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
                naviate("/survey/otp");
            })
            .catch((err) => {
                naviate("/");
            });
    };

    return { campaigns, loading, error, formData, handleChange, handleSubmit };
}

export default useCreateSurvey;
