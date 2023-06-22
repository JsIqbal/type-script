import {
    handleAllowDuplicatesAcrossCampaignsSubmit,
    handleAllowDuplicatesSubmit,
    handleCampaignStatusSubmit,
    handleDigitalRewardSubmit,
} from "../../admin.actions";

function CampaignFeatureElement({ item, className, event, element }: any) {
    return (
        <div className="col">
            <button
                onClick={() => {
                    if (event === "status") {
                        handleCampaignStatusSubmit(item);
                    }
                    if (event === "reward") {
                        handleDigitalRewardSubmit(item);
                    }
                    if (event === "dupplicate") {
                        handleAllowDuplicatesSubmit(item);
                    }
                    if (event === "across") {
                        handleAllowDuplicatesAcrossCampaignsSubmit(item);
                    }
                }}
                className={className}
            >
                {element}
            </button>
        </div>
    );
}

export default CampaignFeatureElement;
