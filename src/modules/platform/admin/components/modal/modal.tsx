// import React from "react";
// import Modal from "react-modal";
// import { ActionProp } from "../../../user/interfaces";

// const customStyles = {
//     content: {
//         top: "50%",
//         left: "50%",
//         right: "auto",
//         bottom: "auto",
//         marginRight: "-50%",
//         transform: "translate(-50%, -50%)",
//     },
// };

// export function CreateCampaignModal({
//     modalIsOpen,
//     setIsOpen,
//     openModal,
//     disabled,
// }: ActionProp) {
//     let subtitle: any;

//     function afterOpenModal() {
//         subtitle.style.color = "#f00";
//     }

//     function closeModal() {
//         setIsOpen(false);
//     }

//     return (
//         <div>
//             <button className="btn btn-primary mx-2" onClick={openModal}>
//                 Create Campaign
//             </button>
//             <Modal
//                 isOpen={modalIsOpen}
//                 onAfterOpen={afterOpenModal}
//                 onRequestClose={closeModal}
//                 style={customStyles}
//                 contentLabel="Example Modal"
//             >
//                 <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
//                 <button onClick={closeModal}>close</button>
//                 <div>I am a modal</div>
//                 <form>
//                     <input />
//                     <button>tab navigation</button>
//                     <button>stays</button>
//                     <button>inside</button>
//                     <button>the modal</button>
//                 </form>
//             </Modal>
//         </div>
//     );
// }
import axios from "axios";
import React, { useState } from "react";
import Modal from "react-modal";
import { ActionProp } from "../../../user/interfaces";
import { createCampaign } from "../../admin.actions";
Modal.setAppElement("#root");

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

export function CreateCampaignModal({
    modalIsOpen,
    setIsOpen,
    openModal,
    disabled,
}: ActionProp) {
    let subtitle: any;
    const [formData, setFormData] = useState({
        name: "",
        status: "PENDING",
    });

    function afterOpenModal() {
        subtitle.style.color = "#f00";
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setFormData({ ...formData, status: event.target.value });
    }
    function handleSubmit() {
        createCampaign(formData, closeModal);
    }

    return (
        <div>
            <button className="btn btn-primary mx-2" onClick={openModal}>
                Create Campaign
            </button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button
                    className="payment-modal__close-btn"
                    onClick={() => setIsOpen(false)}
                >
                    <span>&times;</span>
                </button>
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Campaign Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Status:</label>
                        <select
                            className="form-control"
                            id="status"
                            name="status"
                            onChange={handleSelectChange}
                        >
                            <option value="PENDING">Pending</option>
                            <option value="RUNNING">Running</option>
                            <option value="APPROVED">Approved</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">
                        Submit
                    </button>
                </form>
            </Modal>
        </div>
    );
}
