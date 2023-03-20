import { CreateCampaignModal } from "../modal/modal.component";
import { interfaces } from "../../";

const TableAction = ({
    disabled,
    modalIsOpen,
    openModal,
    setIsOpen,
    item,
}: interfaces.ActionProp) => {
    return (
        <div className="row ">
            <div className="col d-flex justify-content-between align-items-center mb-4">
                <div>
                    <CreateCampaignModal
                        modalIsOpen={modalIsOpen}
                        setIsOpen={setIsOpen}
                        openModal={openModal}
                    />
                </div>
                <div className="col-auto justify-content-between">
                    <input
                        // className="btn btn-secondary mx-2"
                        disabled={true}
                        placeholder={item ? item.name : "selected user"}
                    />
                    <button
                        className="btn btn-primary mx-2"
                        disabled={disabled}
                    >
                        Edit
                    </button>
                    <button
                        className="btn btn-success mx-2"
                        disabled={disabled}
                    >
                        Approve
                    </button>
                    <button className="btn btn-danger mx-2" disabled={disabled}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TableAction;
