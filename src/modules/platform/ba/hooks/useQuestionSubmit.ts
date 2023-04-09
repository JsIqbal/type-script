import { useGetCampaign } from "../hooks/useGetCampaign";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { success, error } from "../../../core/common/toaster";

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
    loading: boolean;
}

const useQuestionSubmit = () => {
    const navigate = useNavigate();
    const { campaigns, loading }: Props = useGetCampaign();
    const signatureRef: any = useRef(null);
    const [isSignatureEmpty, setIsSignatureEmpty] = useState(true);
    const [agreed, setAgreed] = useState(false);

    const handleAgreementCheck = (e: any) => {
        setAgreed(e.target.checked);
    };

    const clearSignature = () => {
        signatureRef.current.clear();
        setIsSignatureEmpty(true);
    };

    const handleSignatureChange = () => {
        if (signatureRef.current.isEmpty()) {
            setIsSignatureEmpty(true);
        } else {
            setIsSignatureEmpty(false);
        }
    };

    let rewardData;

    const access_token = `Token ${localStorage.getItem("access")}`;
    const participant_id: any = localStorage.getItem("participant_id");

    const submitSurvey: any = async (values: any) => {
        const questionList = campaigns.map((campaign) => campaign.text);
        // const answerList = Object.values(values);
        const answerList = Object.values(values).slice(1);

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
            console.log(data);
            const response = await axios.post(
                "http://127.0.0.1:8000/campaign/submit-survey/",
                formData,
                {
                    headers,
                }
            );
            console.log(response.data.rewardData);
            rewardData = response.data.rewardData;
            localStorage.setItem("rewardData", JSON.stringify(rewardData));
            if (agreed) {
                success();
                return navigate("/survey/reward");
            }
            success();
            localStorage.removeItem("participant_id");
            localStorage.removeItem("rewardData");
            // window.location.href = "/";
            return navigate("/");
        } catch (err) {
            error();
        }
    };
    return {
        submitSurvey,
        campaigns,
        isSignatureEmpty,
        clearSignature,
        handleSignatureChange,
        signatureRef,
        agreed,
        setAgreed,
        handleAgreementCheck,
        loading,
    };
};

export { useQuestionSubmit };
