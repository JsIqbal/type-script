import { Formik, Form, Field } from "formik";

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
    } = useQuestionSubmit();

    return (
        <Formik initialValues={{ signature: "" }} onSubmit={submitSurvey}>
            {({ handleSubmit }) => (
                <Form
                    onSubmit={handleSubmit}
                    className="p-5 bg-light mt-5 mb-5"
                >
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
                                        required
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
                            </div>
                        );
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
