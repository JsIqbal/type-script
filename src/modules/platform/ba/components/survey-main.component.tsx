import React from "react";
import { Formik, Form, Field } from "formik";
import { useGetCampaign } from "../hooks/useGetCampaign";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { error, success } from "../../../core/common/toaster";

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

const QuestionForm: React.FC = () => {
    const navigate = useNavigate();
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
            success();
            navigate("/");
        } catch (err) {
            error();
        }
    };

    return (
        <Formik initialValues={{}} onSubmit={submitSurvey}>
            {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="p-5 bg-light mt-5">
                    {campaigns.map((campaign) => {
                        const { id, choices, question_type, text } = campaign;
                        return (
                            <div key={id} className="mb-3">
                                <label
                                    htmlFor={`question-${id}`}
                                    className="form-label fw-bold"
                                >
                                    {text}
                                </label>
                                {question_type === "Multiple Choice" ? (
                                    <Field
                                        name={`question-${id}`}
                                        as="select"
                                        className="form-select"
                                    >
                                        <option value="">
                                            Select an option
                                        </option>
                                        {choices.map((choice) => (
                                            <option
                                                key={choice.id}
                                                value={choice.text}
                                            >
                                                {choice.text}
                                            </option>
                                        ))}
                                    </Field>
                                ) : (
                                    <Field
                                        name={`question-${id}`}
                                        type={
                                            question_type === "Text"
                                                ? "text"
                                                : "file"
                                        }
                                        className="form-control"
                                    />
                                )}
                            </div>
                        );
                    })}
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default QuestionForm;
