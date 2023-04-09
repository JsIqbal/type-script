import Modal from "react-modal";
import { Formik, Form, Field } from "formik";

import { ModButton, svgIcon } from "../../../../core";
import { customStyles } from "../../admin.style";
import useAddBa from "../../hooks/uaeAddBa";

Modal.setAppElement("#root");

const CreateBAModal = ({ baOpen, setBaOpen, item, disabled }: any) => {
    const { handleSubmit, setFile } = useAddBa(baOpen, setBaOpen);

    return (
        <div className="d-flex align-items-center">
            {/* <ModButton
                disabled={disabled}
                element={"AddBA"}
                event={() => setBaOpen(true)}
                className="btn btn-primary mr-2 ms-2"
            /> */}
            <button
                disabled={disabled}
                onClick={() => setBaOpen(true)}
                className="btn btn-primary mr-2 ms-2 d-flex align-items-center"
                type="button"
            >
                <span className="me-2">{svgIcon.ba}</span>
                <span>+BA</span>
            </button>
            <Modal
                style={customStyles}
                isOpen={baOpen}
                onRequestClose={setBaOpen}
            >
                <Formik initialValues={{}} onSubmit={handleSubmit}>
                    {({ isSubmitting }) => (
                        <Form>
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
                                <div className="col-md-4 ms-auto">
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
                                        onClick={() => setBaOpen(false)}
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
