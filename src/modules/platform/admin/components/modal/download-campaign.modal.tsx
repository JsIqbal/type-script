import React, { useState } from "react";
import Modal from "react-modal";

import { customStyles } from "../../admin.style";
import { svgIcon } from "../../../../core";

Modal.setAppElement("#root");

export function Download({
    downloadOpen,
    setDownloadOpen,
    item,
    disabled,
}: any) {
    const [formData, setFormData] = useState({
        date: "",
    });

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div className="d-flex align-items-center">
            <button
                disabled={disabled}
                onClick={() => setDownloadOpen(true)}
                className="btn btn-primary mr-2 ms-2 d-flex align-items-center"
                type="button"
            >
                <span className="me-2">{svgIcon.download}</span>
                <span>Report</span>
            </button>
            <a
                href={`http://127.0.0.1:8000/campaign/download-ba-list/?Token=${localStorage.getItem(
                    "access"
                )}&CampaignID=${item.id}`}
                target="_blank"
                className={`btn btn-primary mr-2 ms-2 d-flex align-items-center${
                    disabled ? " disabled" : ""
                }`}
                type="button"
            >
                <span className="me-2">{svgIcon.download}</span>
                <span>BA</span>
            </a>

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
                    <div className="d-grid gap-2">
                        <a
                            target="_blank"
                            href={`http://127.0.0.1:8000/campaign/download-report/?Token=${localStorage.getItem(
                                "access"
                            )}&Date=${formData.date}&CampaignID=${item.id}`}
                            className="btn btn-primary mt-2"
                        >
                            Submit
                        </a>
                    </div>
                </form>
            </Modal>
        </div>
    );
}
