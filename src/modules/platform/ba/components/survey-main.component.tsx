import React from "react";
import { Formik, Form, Field } from "formik";

import { useQuestionSubmit } from "../hooks/useQuestionSubmit";

const QuestionForm: React.FC = () => {
    const { submitSurvey, campaigns } = useQuestionSubmit();

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
