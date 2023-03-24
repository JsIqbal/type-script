import { useState } from "react";
import Modal from "react-modal";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { ModButton, svgIcon } from "../../../../core";
import { customStyles } from "../../admin.style";
import { error, success } from "../../../../core/common/toaster";

Modal.setAppElement("#root");

const CreateBAModal = ({ baOpen, setBaOpen, item, disabled }: any) => {
    const [file, setFile] = useState();
    const access_token = `Token ${localStorage.getItem("access")}`;
    const campaign_Code = item.id;

    const handleSubmit = async (values: any, { setSubmitting }: any) => {
        try {
            const formData = new FormData();
            if (file) {
                formData.append("file", file);
            }
            formData.append("campaign_Code", campaign_Code);
            console.log(file);
            console.log(campaign_Code);
            const response = await axios.post(
                "http://127.0.0.1:8000/account/create-ba/",
                formData,
                {
                    headers: {
                        Authorization: access_token,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log("API response:", response.data);
            success();
            setBaOpen(false);
        } catch (err) {
            error();
            console.error("API error:", err);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="d-flex align-items-center">
            <ModButton
                disabled={disabled}
                element={"AddBA"}
                event={() => setBaOpen(true)}
                className="btn btn-primary mr-2 ms-2"
            />
            <Modal
                style={customStyles}
                isOpen={baOpen}
                onRequestClose={setBaOpen}
            >
                <button
                    className="payment-modal__close-btn close"
                    onClick={() => setBaOpen(false)}
                >
                    <span>&times;</span>
                </button>
                <Formik initialValues={{}} onSubmit={handleSubmit}>
                    {({ isSubmitting }) => (
                        <Form className="mt-4">
                            <div className="row">
                                <div className="col-md-8">
                                    <Field
                                        className="form-control"
                                        name="file"
                                        type="file"
                                        onChange={(event: any) =>
                                            setFile(
                                                event.currentTarget.files[0]
                                            )
                                        }
                                    />
                                </div>
                                <div className="col-md-4">
                                    <button
                                        className="btn btn-primary btn-block"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        {svgIcon.singleTik}
                                    </button>
                                    <button
                                        className="btn btn-danger btn-block ms-2"
                                        type="button"
                                        onClick={setBaOpen}
                                    >
                                        {svgIcon.cross}
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </div>
    );
};

export default CreateBAModal;
