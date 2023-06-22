import Modal from "react-modal";

import { campaignFeatureStyle } from "../../admin.style";
import CampaignFeatureElement from "./campaign-feature-element";

function CampaignFeatureModal({ featureOpen, setFeatureOpen, item }: any) {
    return (
        <Modal
            style={campaignFeatureStyle}
            isOpen={featureOpen}
            onRequestClose={() => setFeatureOpen(false)}
            contentLabel="Example Modal"
        >
            <button
                className="payment-modal__close-btn close"
                onClick={() => setFeatureOpen(false)}
            >
                <span>&times;</span>
            </button>
            <div>
                <div className="row">
                    <div className="col">
                        <h3>Campaign Feature</h3>
                        <p>See the below feature for {item.name} campaign</p>
                    </div>
                </div>
                <div className="row">
                    <CampaignFeatureElement
                        item={item}
                        className={
                            item.status === "PENDING"
                                ? "btn btn-primary"
                                : "btn btn-danger"
                        }
                        element={
                            item.status === "PENDING" ? "RUNNING" : "PENDING"
                        }
                        event="status"
                    />
                    <CampaignFeatureElement
                        item={item}
                        className={
                            item.digital_reward === "Yes"
                                ? "btn btn-danger"
                                : "btn btn-primary"
                        }
                        element={
                            item.digital_reward === "Yes"
                                ? "Remove Digital Reward"
                                : "Allow Digital Reward"
                        }
                        event="reward"
                    />
                    <CampaignFeatureElement
                        item={item}
                        className={
                            item.allow_duplicate === "Yes"
                                ? "btn btn-danger"
                                : "btn btn-primary"
                        }
                        element={
                            item.allow_duplicate === "Yes"
                                ? "Restrict Duplicates"
                                : "Allow Duplicates"
                        }
                        event="dupplicate"
                    />
                    <CampaignFeatureElement
                        item={item}
                        className={
                            item.allow_duplicate_across_campaigns === "Yes"
                                ? "btn btn-danger"
                                : "btn btn-primary"
                        }
                        element={
                            item.allow_duplicate_across_campaigns === "Yes"
                                ? "Restrict Duplicates Across Campaigns"
                                : "Allow Duplicates Across Campaigns"
                        }
                        event="across"
                    />
                </div>
            </div>
        </Modal>
    );
}

export default CampaignFeatureModal;
