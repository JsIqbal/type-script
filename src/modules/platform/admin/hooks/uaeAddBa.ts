import { useState } from "react";
import axios from "axios";

import { toast } from "../../../core";

const useAddBa = (item: any, setBaOpen: any) => {
    const [file, setFile] = useState();
    const access_token = `Token ${localStorage.getItem("access")}`;
    const campaign_Code = item.id;

    const handleSubmit = async (values: any, { setSubmitting }: any) => {
        try {
            const formData = new FormData();
            if (file) {
                formData.append("file", file);
            }
            formData.append("campaign_Code", campaign_Code);
            const response = await axios.post(
                "http://127.0.0.1:8000/account/create-ba/",
                formData,
                {
                    headers: {
                        Authorization: access_token,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            toast.success();
            setBaOpen(false);
        } catch (err) {
            toast.error();
            console.error("API error:", err);
        } finally {
            setSubmitting(false);
        }
    };
    return { handleSubmit, setFile };
};

export default useAddBa;
