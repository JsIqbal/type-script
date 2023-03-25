import React, { useState } from "react";
import Modal from "react-modal";

import { customStyles } from "../../admin.style";
import { ModButton } from "../../../../core";

Modal.setAppElement("#root");

export function Download({
    downloadOpen,
    setDownloadOpen,
    item,
    disabled,
}: any) {
    console.log(item);
    const [formData, setFormData] = useState({
        date: "",
    });

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div className="d-flex align-items-center">
            <ModButton
                disabled={disabled}
                element={"DOWNLOAD"}
                event={() => setDownloadOpen(true)}
                className="btn btn-primary mr-2 ms-2"
            />
            <Modal
                isOpen={downloadOpen}
                onRequestClose={() => setDownloadOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button
                    className="payment-modal__close-btn close"
                    onClick={() => setDownloadOpen(false)}
                >
                    <span>&times;</span>
                </button>
                <form>
                    <div className="form-group">
                        <label htmlFor="date">Date:</label>
                        <input
                            type="date"
                            name="date"
                            className="form-control"
                            id="date"
                            value={formData.date}
                            onChange={handleInputChange}
                        />
                    </div>
                    <a
                        target="_blank"
                        href={`http://127.0.0.1:8000/campaign/download-report/?Token=${localStorage.getItem(
                            "access"
                        )}&Date=${formData.date}&CampaignID=${item.id}`}
                        className="btn btn-primary mt-2"
                    >
                        Submit
                    </a>
                </form>
            </Modal>
        </div>
    );
}
