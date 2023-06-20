// function submitSurvey(questionList, answerList, participantId, signature) {
//     const data = [];

//     for (let i = 0; i < questionList.length; i++) {
//         const question = questionList[i];

//         const answer = answerList[i];

//         data.push({ question, answer });
//     }

//     const formData = new FormData();

//     formData.append("participant_id", participantId);

//     formData.append("signature", signature);

//     formData.append("survey_response", JSON.stringify(data));

//     const requestOptions = {
//         method: "POST",

//         headers: {
//             Authorization: "Token c67933cf2971402204ca460d54023ca30c237ce7",
//         },

//         body: formData,
//     };

//     fetch("http://127.0.0.1:8000/campaign/submit-survey/", requestOptions)
//         .then((response) => response.json())

//         .then((data) => console.log(data))

//         .catch((error) => console.log(error));
// }

export {};
