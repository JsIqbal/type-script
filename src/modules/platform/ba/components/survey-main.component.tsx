// import { Formik, Form, Field } from "formik";
// import { FormCheck } from "react-bootstrap";
// import { useState } from "react";

// import { useQuestionSubmit } from "../hooks/useQuestionSubmit";
// import DigitalSign from "./digital-signature.component";

// const QuestionForm: React.FC = () => {
//     const {
//         submitSurvey,
//         campaigns,
//         isSignatureEmpty,
//         clearSignature,
//         handleSignatureChange,
//         signatureRef,
//         agreed,
//         setAgreed,
//         handleAgreementCheck,
//         loading,
//     } = useQuestionSubmit();

//     const [reward, setReward] = useState(false);
//     if (loading) {
//         return <h1 className="text-center mt-5">Loading...</h1>;
//     }

//     return (
//         <Formik initialValues={{ signature: "" }} onSubmit={submitSurvey}>
//             {({ handleSubmit }) => (
//                 <Form
//                     onSubmit={handleSubmit}
//                     className="p-5 bg-light mt-5 mb-5"
//                 >
//                     {campaigns.map((item) => {
//                         const {
//                             id,
//                             choices,
//                             question_type,
//                             text,
//                             campaign,
//                         }: any = item;
//                         campaign.digital_reward === "Yes" && setReward(true);
//                         return (
//                             <div key={id} className="mb-3">
//                                 <label
//                                     htmlFor={`question-${id}`}
//                                     className="form-label fw-bold"
//                                 >
//                                     {text}
//                                 </label>
//                                 {question_type === "Multiple Choice" ? (
//                                     <Field
//                                         required
//                                         name={`question-${id}`}
//                                         as="select"
//                                         className="form-select"
//                                     >
//                                         <option value="">
//                                             Select an option
//                                         </option>
//                                         {choices.map((choice: any) => (
//                                             <option
//                                                 key={choice.id}
//                                                 value={choice.text}
//                                             >
//                                                 {choice.text}
//                                             </option>
//                                         ))}
//                                     </Field>
//                                 ) : (
//                                     <Field
//                                         required
//                                         name={`question-${id}`}
//                                         type={
//                                             question_type === "Text"
//                                                 ? "text"
//                                                 : "file"
//                                         }
//                                         className="form-control"
//                                     />
//                                 )}
//                             </div>
//                         );
//                         // }
//                     })}
//                     {reward && (
//                         <FormCheck
//                             className="mb-3 mt-4"
//                             type="checkbox"
//                             label="Give Digital Reward!"
//                             checked={agreed}
//                             onChange={handleAgreementCheck}
//                         />
//                     )}
//                     <DigitalSign
//                         required
//                         signatureRef={signatureRef}
//                         handleSignatureChange={handleSignatureChange}
//                         clearSignature={clearSignature}
//                         isSignatureEmpty={isSignatureEmpty}
//                     />
//                     <button
//                         type="submit"
//                         className="btn btn-primary"
//                         disabled={isSignatureEmpty}
//                     >
//                         Submit
//                     </button>
//                 </Form>
//             )}
//         </Formik>
//     );
// };

// export default QuestionForm;
import { Formik, Form, Field } from "formik";
import { FormCheck, Button, Modal } from "react-bootstrap";
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
        loading,
    } = useQuestionSubmit();

    const [reward, setReward] = useState(false);
    const [modalOpen, setModalOpen] = useState(true);

    if (loading) {
        return <h1 className="text-center mt-5">Loading...</h1>;
    }

    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <>
            {modalOpen && (
                <Modal show={modalOpen} onHide={handleModalClose}>
                    <Modal.Header className="text-center" closeButton>
                        <Modal.Title>Attention!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Please shift to AR app followed by Brand message
                            then back to microsite again
                        </p>
                        <Button variant="primary" onClick={handleModalClose}>
                            OK
                        </Button>
                    </Modal.Body>
                </Modal>
            )}

            {!modalOpen && (
                <Formik
                    initialValues={{ signature: "" }}
                    onSubmit={submitSurvey}
                >
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
                                campaign.digital_reward === "Yes" &&
                                    setReward(true);
                                return (
                                    <div key={id} className="mb-3">
                                        <label
                                            htmlFor={`question-${id}`}
                                            className="form-label fw-bold"
                                        >
                                            {text}
                                        </label>
                                        {/* {question_type === "Multiple Choice" ? (
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
                                        )} */}
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
                                        ) : question_type === "Checkbox" ? (
                                            <div>
                                                {choices.map((choice: any) => (
                                                    <div
                                                        className="form-check"
                                                        key={choice.id}
                                                    >
                                                        <Field
                                                            required
                                                            type="checkbox"
                                                            name={`question-${id}`}
                                                            id={`question-${id}-${choice.id}`}
                                                            className="form-check-input"
                                                            value={choice.text} // Set the value to the choice text
                                                        />
                                                        <label
                                                            htmlFor={`question-${id}-${choice.id}`}
                                                            className="form-check-label"
                                                        >
                                                            {choice.text}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <Field
                                                required
                                                name={`question-${id}`}
                                                type="text"
                                                className="form-control"
                                            />
                                        )}
                                    </div>
                                );
                            })}
                            {reward && (
                                <FormCheck
                                    className="mb-3 mt-4"
                                    type="checkbox"
                                    label="Give Digital Reward!"
                                    checked={agreed}
                                    onChange={handleAgreementCheck}
                                />
                            )}
                            <DigitalSign
                                required
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
            )}
        </>
    );
};

export default QuestionForm;
