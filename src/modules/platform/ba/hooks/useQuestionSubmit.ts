import axios from "axios";
import { useGetCampaign } from "./useGetCampaign";

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
    const { campaigns }: Props = useGetCampaign();

    const access_token = `Token ${localStorage.getItem("access")}`;

    const submitSurvey: any = async (values: any) => {
        const questionList = campaigns.map((campaign) => campaign.text);
        const answerList = Object.values(values);

        const data = questionList.map((question, index) => {
            return {
                question: question,
                answer: answerList[index] || "Null",
            };
        });

        const json_data = JSON.stringify(data);

        const headers = {
            Authorization: access_token,
        };

        const postData = {
            survey_response: json_data,
            participant_id: parseInt(localStorage.getItem("participant_id")!),
            signature: true,
        };

        try {
            console.log(
                "----------------------------------------------------",
                postData
            );
            const response = await axios.post(
                "http://127.0.0.1:8000/campaign/submit-survey/",
                postData,
                {
                    headers,
                }
            );
        } catch (error) {}
    };
    return { submitSurvey, campaigns };
};

export default { useQuestionSubmit };
