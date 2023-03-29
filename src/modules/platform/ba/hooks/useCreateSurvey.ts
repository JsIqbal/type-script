// import { useState } from "react";
// import axios from "axios";
// import { useGetCampaign } from "./useGetCampaign";
// import { toast } from "../../../core";
// import { useNavigate } from "react-router-dom";

// function useCreateSurvey() {
//     const naviate = useNavigate();
//     const { campaigns, loading, error } = useGetCampaign();
//     const [formData, setFormData] = useState({
//         participant_name: "",
//         participant_phone: "",
//         age: "",
//         profession: "",
//     });

//     const handleChange = (event: any) => {
//         setFormData({
//             ...formData,
//             [event.target.name]: event.target.value,
//         });
//     };

//     const handleSubmit = (event: any) => {
//         const data = new FormData();
//         data.append("participant_name", formData.participant_name);
//         data.append("participant_phone", formData.participant_phone);
//         data.append("age", formData.age);
//         data.append("profession", formData.profession);
//         event.preventDefault();
//         const url = "http://127.0.0.1:8000/campaign/create-survey/";
//         const access_token = `Token ${localStorage.getItem("access")}`;
//         const headers = {
//             Authorization: access_token,
//         };
//         axios
//             .post(url, data, { headers })
//             .then((response) => {
//                 localStorage.setItem(
//                     "participant_id",
//                     response.data.participant_id
//                 );
//                 toast.success();
//                 naviate("/survey/otp");
//             })
//             .catch((err) => {
//                 naviate("/");
//             });
//     };

//     return { campaigns, loading, error, formData, handleChange, handleSubmit };
// }

// export default useCreateSurvey;

// import { useState } from "react";
// import axios from "axios";
// import { useGetCampaign } from "./useGetCampaign";
// import { toast } from "../../../core";
// import { useNavigate } from "react-router-dom";

// function useCreateSurvey() {
//     const navigate = useNavigate();
//     const { campaigns, loading, error } = useGetCampaign();
//     const [formData, setFormData] = useState({
//         participant_name: "",
//         participant_phone: "",
//         age: "",
//         profession: "",
//         code: "",
//         id: "",
//     });
//     const handleChange = (event: any) => {
//         setFormData({
//             ...formData,
//             [event.target.name]: event.target.value,
//         });
//     };

//     console.log(
//         "----------------------------------------------------",
//         formData.id
//     );

//     const handleSubmit = (event: any) => {
//         event.preventDefault();

//         const data = new FormData();
//         data.append("participant_name", formData.participant_name);
//         data.append("participant_phone", formData.participant_phone);
//         data.append("age", formData.age);
//         data.append("profession", formData.profession);
//         data.append("id", formData.id);
//         data.append("code", formData.code);

//         const url = "http://127.0.0.1:8000/campaign/create-survey/";
//         const access_token = `Token ${localStorage.getItem("access")}`;
//         const headers = {
//             Authorization: access_token,
//         };
//         axios
//             .post(url, data, { headers })
//             .then((response) => {
//                 localStorage.setItem(
//                     "participant_id",
//                     response.data.participant_id
//                 );
//                 toast.success();
//                 navigate("/survey/otp");
//             })
//             .catch((err) => {
//                 navigate("/");
//             });
//     };

//     return { campaigns, loading, error, formData, handleChange, handleSubmit };
// }

// export default useCreateSurvey;

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
