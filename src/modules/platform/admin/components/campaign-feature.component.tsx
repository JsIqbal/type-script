import Modal from "react-modal";

import CampaignFeatureModal from "./modal/campaign-feature.modal";

Modal.setAppElement("#root");

export function CampaignFeature({
    disabled,
    featureOpen,
    setFeatureOpen,
    item,
}: any) {
    return (
        <>
            <button
                disabled={disabled}
                onClick={() => setFeatureOpen(true)}
                className="btn btn-primary mr-2 ms-2 d-flex align-items-center"
                type="button"
            >
                <span>Features</span>
            </button>

            <CampaignFeatureModal
                featureOpen={featureOpen}
                setFeatureOpen={setFeatureOpen}
                item={item}
            />
        </>
    );
}
