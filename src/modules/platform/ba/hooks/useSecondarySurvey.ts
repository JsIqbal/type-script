import { useState } from "react";
import axios from "axios";
import { useGetCampaign } from "./useGetCampaign";
import { toast } from "../../../core";
import { useNavigate } from "react-router-dom";
import { success } from "../../../core/common/toaster";

function useSecondarySurvey() {
    const navigate = useNavigate();
    const { campaigns, loading, error } = useGetCampaign();
    const [formData, setFormData] = useState({
        participant_name: "",
        age: "",
        profession: "",
    });

    const handleChange = (event: any) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (values: any, e: any) => {
        const id: any = localStorage.getItem("participant_id");

        const data = new FormData();
        data.append("participant_name", values.participant_name);
        data.append("age", values.age);
        data.append("profession", values.profession);
        data.append("participant_id", id);
        // e.preventDefault();
        const url = "http://127.0.0.1:8000/campaign/create-survey/";
        const access_token = `Token ${localStorage.getItem("access")}`;
        const headers = {
            Authorization: access_token,
        };
        axios
            .post(url, data, { headers })
            .then((response) => {
                success();
                navigate("/survey/form");
            })
            .catch((err) => {
                navigate("/");
            });
    };

    return { campaigns, loading, error, formData, handleChange, handleSubmit };
}

export default useSecondarySurvey;
