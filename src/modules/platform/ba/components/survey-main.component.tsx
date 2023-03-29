import { Formik, Form, Field } from "formik";
import { FormCheck } from "react-bootstrap";
import { useState } from "react";

import { useQuestionSubmit } from "../hooks/useQuestionSubmit";
import DigitalSign from "./digital-signature.component";

const QuestionForm: React.FC = () => {
    const {
        submitSurvey,
        campaigns,
        isSignatureEmpty,
        clearSignature,
        handleSignatureChange,
        signatureRef,
        agreed,
        setAgreed,
        handleAgreementCheck,
    } = useQuestionSubmit();

    return (
        <Formik initialValues={{ signature: "" }} onSubmit={submitSurvey}>
            {({ handleSubmit }) => (
                <Form
                    onSubmit={handleSubmit}
                    className="p-5 bg-light mt-5 mb-5"
                >
                    {campaigns.map((item) => {
                        const {
                            id,
                            choices,
                            question_type,
                            text,
                            campaign,
                        }: any = item;
                        if (campaign?.digital_reward === "Yes") {
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
                                            required
                                            name={`question-${id}`}
                                            as="select"
                                            className="form-select"
                                        >
                                            <option value="">
                                                Select an option
                                            </option>
                                            {choices.map((choice: any) => (
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
                                            required
                                            name={`question-${id}`}
                                            type={
                                                question_type === "Text"
                                                    ? "text"
                                                    : "file"
                                            }
                                            className="form-control"
                                        />
                                    )}
                                    <FormCheck
                                        className="mb-3"
                                        type="checkbox"
                                        label="I agree to the terms and conditions"
                                        checked={agreed}
                                        onChange={handleAgreementCheck}
                                    />
                                </div>
                            );
                        }
                    })}
                    <DigitalSign
                        signatureRef={signatureRef}
                        handleSignatureChange={handleSignatureChange}
                        clearSignature={clearSignature}
                        isSignatureEmpty={isSignatureEmpty}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isSignatureEmpty}
                    >
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default QuestionForm;
