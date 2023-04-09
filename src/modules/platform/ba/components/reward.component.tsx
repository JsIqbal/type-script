// import axios from "axios";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { Col } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import useReward from "../hooks/useReward";

// const Reward = () => {
//     const { initialValues, handleSubmit } = useReward();

//     return (
//         <Col
//             style={{ marginBottom: "43px" }}
//             className="col-lg-6 ms-auto me-auto mt-5 card chart p-5 mb-5"
//         >
//             <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//                 {({ isSubmitting }) => (
//                     <Form>
//                         <div className="row">
//                             <div className="col-lg-12 ms-auto me-auto mt-4">
//                                 <div className="mb-3">
//                                     <label
//                                         htmlFor="packName"
//                                         className="form-label"
//                                     >
//                                         Pack Name
//                                     </label>
//                                     <Field
//                                         type="text"
//                                         name="packName"
//                                         id="packName"
//                                         className="form-control"
//                                     />
//                                     {/* <ErrorMessage
//                                         name="packName"
//                                         className="invalid-feedback"
//                                     /> */}
//                                 </div>
//                                 <div className="mb-3">
//                                     <label
//                                         htmlFor="name"
//                                         className="form-label"
//                                     >
//                                         Name
//                                     </label>
//                                     <Field
//                                         type="text"
//                                         name="name"
//                                         id="name"
//                                         className="form-control"
//                                     />
//                                     {/* <ErrorMessage
//                                         name="name"
//                                         className="invalid-feedback"
//                                     /> */}
//                                 </div>
//                                 <div className="mb-3">
//                                     <label
//                                         htmlFor="phoneNumber"
//                                         className="form-label"
//                                     >
//                                         Phone Number
//                                     </label>
//                                     <Field
//                                         type="text"
//                                         name="phoneNumber"
//                                         id="phoneNumber"
//                                         className="form-control"
//                                     />
//                                     {/* <ErrorMessage
//                                         name="phoneNumber"
//                                         className="invalid-feedback"
//                                     /> */}
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className="btn btn-primary"
//                                     disabled={isSubmitting}
//                                 >
//                                     Submit
//                                 </button>
//                             </div>
//                         </div>
//                     </Form>
//                 )}
//             </Formik>
//         </Col>
//     );
// };

// export default Reward;
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useReward from "../hooks/useReward";

const Reward = () => {
    const { handleSubmit } = useReward();

    // Get data from local storage
    const jsonData: any = localStorage.getItem("rewardData");
    const datatoshow: any = JSON.parse(jsonData);
    const initialValues = {
        ba_AvailableReward: datatoshow?.ba_AvailableReward ?? "",
        participant_id: datatoshow?.participant_id ?? "",
        participant_name: datatoshow?.participant_name ?? "",
        participant_operator: datatoshow?.participant_operator ?? "",
        dataPack: datatoshow?.dataPack ?? "",
    };
    return (
        <Col
            style={{ marginBottom: "43px" }}
            className="col-lg-6 ms-auto me-auto mt-5 card chart p-5 mb-5"
        >
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <div className="row">
                            <div className="col-lg-12 ms-auto me-auto mt-4">
                                <div className="mb-3">
                                    <label
                                        htmlFor="ba_AvailableReward"
                                        className="form-label"
                                    >
                                        ba_AvailableReward
                                    </label>
                                    <Field
                                        disabled
                                        type="text"
                                        name="ba_AvailableReward"
                                        id="ba_AvailableReward"
                                        className="form-control"
                                        placeholder={
                                            initialValues.ba_AvailableReward
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="packName"
                                        className="form-label"
                                    >
                                        Pack Name
                                    </label>
                                    <Field
                                        disabled
                                        type="text"
                                        name="packName"
                                        id="packName"
                                        className="form-control"
                                        placeholder={initialValues.dataPack}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="participant_id"
                                        className="form-label"
                                    >
                                        participant_id
                                    </label>
                                    <Field
                                        disabled
                                        type="text"
                                        name="participant_id"
                                        id="participant_id"
                                        className="form-control"
                                        placeholder={
                                            initialValues.participant_id
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="participant_name"
                                        className="form-label"
                                    >
                                        participant_name
                                    </label>
                                    <Field
                                        disabled
                                        type="text"
                                        name="participant_name"
                                        id="participant_name"
                                        className="form-control"
                                        placeholder={
                                            initialValues.participant_name
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="participant_operator"
                                        className="form-label"
                                    >
                                        participant_operator
                                    </label>
                                    <Field
                                        disabled
                                        type="text"
                                        name="participant_operator"
                                        id="participant_operator"
                                        className="form-control"
                                        placeholder={
                                            initialValues.participant_operator
                                        }
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={isSubmitting}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </Col>
    );
};

export default Reward;
