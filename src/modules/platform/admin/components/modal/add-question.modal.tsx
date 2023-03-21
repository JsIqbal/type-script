import axios from "axios";
import { useState } from "react";
import Modal from "react-modal";
import { customStyles } from "../../admin.style";
import { Typography } from "../../../../core";

Modal.setAppElement("#root");

export function AddQuestion({ questionOpen, setQuestionOpen, item }: any) {
    const [selectedOption, setSelectedOption] = useState("Text");
    const [inputOption, setInputOption] = useState("");
    const [choices, setChoices] = useState<string[]>([]);

    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputOption(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const access_token = `Token ${localStorage.getItem("access")}`;
        const url = "http://127.0.0.1:8000/campaign/create-questions/";
        const config = {
            headers: {
                Authorization: access_token,
            },
        };
        const data = new FormData();
        data.append("campaignName", item.name);
        data.append("type", selectedOption);
        data.append("question", inputOption);
        if (selectedOption === "Multiple Choice") {
            data.append("choices[]", JSON.stringify(choices));
        }

        try {
            console.log("----------------------", data);
            const response = await axios.post(url, data, config);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChoicesChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const input = event.target.value;
        const inputArray = input.split(",");
        setChoices(inputArray);
    };

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
