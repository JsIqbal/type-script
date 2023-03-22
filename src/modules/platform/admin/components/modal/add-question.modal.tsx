import Modal from "react-modal";
import { customStyles } from "../../admin.style";
import { Typography } from "../../../../core";
import { useAddQuestion } from "../../hooks/useAddQuestion";

Modal.setAppElement("#root");

export function AddQuestion({ questionOpen, setQuestionOpen, item }: any) {
    const {
        selectedOption,
        inputOption,
        choices,
        handleOptionChange,
        handleInputChange,
        handleChoicesChange,
        handleSubmit,
    } = useAddQuestion(item);

    return (
        <div>
            <Modal
                isOpen={questionOpen}
                onRequestClose={() => setQuestionOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button
                    className="payment-modal__close-btn"
                    onClick={() => setQuestionOpen(false)}
                >
                    <span>&times;</span>
                </button>
                <Typography
                    className="text-center mb-2 mt-2 question-modal-heading"
                    element={`CAMPAIGN : ${item.name}`}
                />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="selectOption">Select Option:</label>
                        <select
                            className="form-control"
                            id="selectOption"
                            value={selectedOption}
                            onChange={handleOptionChange}
                        >
                            <option value="Text">TEXT</option>
                            <option value="Multiple Choice">MCQ</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputOption">QUESTION:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputOption"
                            placeholder="Enter a question"
                            value={inputOption}
                            onChange={handleInputChange}
                        />
                    </div>
                    {selectedOption === "Multiple Choice" && (
                        <div className="form-group">
                            <label htmlFor="choices">OPTIONS:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="choices"
                                placeholder="Enter a question"
                                value={choices}
                                onChange={handleChoicesChange}
                            />
                        </div>
                    )}
                    <button type="submit" className="btn btn-primary mt-2">
                        Submit
                    </button>
                </form>
            </Modal>
        </div>
    );
}
