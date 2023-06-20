import axios from "axios";
import { useNavigate } from "react-router-dom";
import { success, error } from "../../../core/common/toaster";

const useReward = () => {
    const navigate = useNavigate();
    const initialValues = { packName: "", name: "", phoneNumber: "" };
    const access_token = `Token ${localStorage.getItem("access")}`;
    const participant_id = parseInt(localStorage.getItem("participant_id")!);

    const handleSubmit = async (values: any, { setSubmitting }: any) => {
        const data = new FormData();
        data.append("participantID", String(participant_id));
        try {
            alert("Give confirmation before submitting");
            const response = await axios.post(
                "http://127.0.0.1:8000/digital-reward/send-reward/",
                data,
                {
                    headers: {
                        Authorization: access_token,
                    },
                }
            );
            success();
            localStorage.removeItem("participant_id");
            localStorage.removeItem("rewardData");
            // return (window.location.href = "/");
            return navigate("/");
        } catch (err) {
            error();
            window.location.href = "/";
        } finally {
            setSubmitting(false);
        }
    };
    return { initialValues, handleSubmit };
};

export default useReward;
