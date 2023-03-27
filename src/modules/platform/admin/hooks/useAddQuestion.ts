// import { useState } from "react";
// import axios from "axios";

// import { toast } from "../../../core";

// export const useAddQuestion = (item: any) => {
//     const [selectedOption, setSelectedOption] = useState("Text");
//     const [inputOption, setInputOption] = useState("");
//     const [choices, setChoices] = useState<string[]>([]);

//     const handleOptionChange = (e: any) => {
//         setSelectedOption(e.target.value);
//     };

//     const handleInputChange = (e: any) => {
//         setInputOption(e.target.value);
//     };

//     const handleChoicesChange = (event: any) => {
//         const input = event.target.value;
//         const inputArray = input.split(",");
//         setChoices(inputArray);
//     };

//     const handleSubmit = async (e: any) => {
//         e.preventDefault();

//         const access_token = `Token ${localStorage.getItem("access")}`;
//         const url = "http://127.0.0.1:8000/campaign/create-questions/";
//         const config = {
//             headers: {
//                 Authorization: access_token,
//             },
//         };

//         const data = new FormData();
//         data.append("campaignName", item.name);
//         data.append("type", selectedOption);
//         data.append("question", inputOption);

//         if (selectedOption === "Multiple Choice") {
//             data.append("choices", JSON.stringify(choices));
//         }

//         try {
//             const response = await axios.post(url, data, config);
//             toast.success();
//         } catch (err) {
//             toast.error();
//         }
//     };

//     return {
//         selectedOption,
//         inputOption,
//         choices,
//         handleOptionChange,
//         handleInputChange,
//         handleChoicesChange,
//         handleSubmit,
//     };
// };
import { useState } from "react";
import axios from "axios";

import { toast } from "../../../core";

export const useAddQuestion = (item: any) => {
    const [selectedOption, setSelectedOption] = useState("Text");
    const [inputOption, setInputOption] = useState("");
    const [choices, setChoices] = useState<string[]>([]);

    const handleOptionChange = (e: any) => {
        setSelectedOption(e.target.value);
    };

    const handleInputChange = (e: any) => {
        setInputOption(e.target.value);
    };

    const handleChoicesChange = (event: any) => {
        const input = event.target.value;
        const inputArray = input.split(",");
        setChoices(inputArray);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const access_token = `Token ${localStorage.getItem("access")}`;
        const url = "http://127.0.0.1:8000/campaign/create-questions/";
        const config = {
            headers: {
                Authorization: access_token,
            },
        };

        if (selectedOption === "") {
            return alert("Select an option");
        }
        if (inputOption === "") {
            return alert("Give your question");
        }

        const data = new FormData();
        data.append("campaignName", item.name);
        data.append("type", selectedOption);
        data.append("question", inputOption);

        if (selectedOption === "Multiple Choice") {
            data.append("choices", JSON.stringify(choices));
        }

        try {
            const response = await axios.post(url, data, config);
            toast.success();
            setSelectedOption("Text");
            setInputOption("");
            setChoices([]);
        } catch (err) {
            toast.error();
        }
    };

    return {
        selectedOption,
        inputOption,
        choices,
        handleOptionChange,
        handleInputChange,
        handleChoicesChange,
        handleSubmit,
    };
};
