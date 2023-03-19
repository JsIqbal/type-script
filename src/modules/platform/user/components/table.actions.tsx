import { CreateCampaignModal } from "../../admin/components/modal/modal.component";
import { ActionProp } from "../interfaces";

const TableAction = ({
    disabled,
    modalIsOpen,
    openModal,
    setIsOpen,
}: ActionProp) => {
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
