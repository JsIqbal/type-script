import React, { useState } from "react";
import Modal from "react-modal";

import { adminActions, interfaces } from "../..";
import { customStyles } from "../../admin.style";
import ModalForm from "./modal.form";
import { ModButton } from "../../../../core";

Modal.setAppElement("#root");

export function CreateCampaignModal({
    modalIsOpen,
    setIsOpen,
    openModal,
    disabled,
}: interfaces.ActionProp) {
    const [formData, setFormData] = useState({
        name: "",
        status: "PENDING",
    });

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setFormData({ ...formData, status: event.target.value });
    }

    return (
        <div>
            <ModButton element={"Create Campaign"} event={openModal} />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button
                    className="payment-modal__close-btn"
                    onClick={() => setIsOpen(false)}
                >
                    <span>&times;</span>
                </button>
                <ModalForm
                    createCampaign={adminActions.createCampaign}
                    formData={formData}
                    setIsOpen={setIsOpen}
                    handleInputChange={handleInputChange}
                    handleSelectChange={handleSelectChange}
                />
            </Modal>
        </div>
    );
}
