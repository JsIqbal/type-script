import { CreateCampaignModal } from "../modal/modal.component";
import { interfaces } from "../../";
import { svgIcon } from "../../../../core";
import { useState } from "react";
import { AddQuestion } from "../modal/add-question.modal";

const TableAction = ({
    disabled,
    modalIsOpen,
    openModal,
    setIsOpen,
    item,
}: interfaces.ActionProp) => {
    const [questionOpen, setQuestionOpen] = useState<boolean>(false);
    return (
        <div className="row">
            <div className="col-12 col-md-6 d-flex justify-content-start mb-4">
                <div>
                    <CreateCampaignModal
                        modalIsOpen={modalIsOpen}
                        setIsOpen={setIsOpen}
                        openModal={openModal}
                    />
                </div>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-end align-items-center mb-4">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-md-end">
                    <input
                        disabled={true}
                        placeholder={item ? item.name : "selected user"}
                        className="form-control mb-2 mb-md-0 mr-md-2"
                    />
                    <button
                        className="btn btn-primary mx-2"
                        disabled={disabled}
                        onClick={() => setQuestionOpen(true)}
                    >
                        {/* {svgIcon.question} */}
                        QUESTION+
                    </button>
                    <button className="btn btn-success" disabled={disabled}>
                        {item.status === "RUNNING" || null
                            ? "COMPLETED"
                            : "APPROVED"}
                    </button>
                </div>
            </div>
            <AddQuestion
                item={item}
                questionOpen={questionOpen}
                setQuestionOpen={setQuestionOpen}
            />
        </div>
    );
};

export default TableAction;
