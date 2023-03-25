import { useGetCampaign } from "../hooks/useGetCampaign";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "../../../core";

interface Campaign {
    id: number;
    choices: {
        id: number;
        text: string;
        question: number;
    }[];
    question_type: string;
    text: string;
    created_at: string;
    updated_at: string;
    campaign: number;
}

interface Props {
    campaigns: Campaign[];
}

const useQuestionSubmit = () => {
    const navigate = useNavigate();
    const { campaigns }: Props = useGetCampaign();

    const access_token = `Token ${localStorage.getItem("access")}`;
    const participant_id: any = localStorage.getItem("participant_id");

    const submitSurvey: any = async (values: any) => {
        const questionList = campaigns.map((campaign) => campaign.text);
        const answerList = Object.values(values);

        const data = [];

        for (let i = 0; i < questionList.length; i++) {
            const question = questionList[i];
            const answer = answerList[i];

            data.push({ question, answer });
        }

        const formData = new FormData();

        formData.append(
            "participant_id",
            JSON.stringify(parseInt(participant_id))
        );

        formData.append("signature", JSON.stringify(true));
        formData.append("survey_response", JSON.stringify(data));

        const headers = {
            Authorization: access_token,
        };

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/campaign/submit-survey/",
                formData,
                {
                    headers,
                }
            );
            toast.success();
            localStorage.removeItem("participant_id");

            navigate("/");
        } catch (err) {
            toast.error();
        }
    };
    return { submitSurvey, campaigns };
};

export { useQuestionSubmit };
