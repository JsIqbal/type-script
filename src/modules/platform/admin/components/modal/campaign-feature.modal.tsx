// import React from "react";
// import Modal from "react-modal";
// import axios from "axios";
// import { svgIcon, toast } from "../../../../core";
// import { customStyles } from "../../admin.style";

// Modal.setAppElement("#root");

// export function CampaignFeature({
//     disabled,
//     featureOpen,
//     setFeatureOpen,
//     item,
// }: any) {
//     const handleCampaignStatusSubmit = async () => {
//         try {
//             const campaignStatusEndpoint =
//                 "https://app.qik-check.com/campaign/campaign-status/";
//             const headers = {
//                 Authorization: `Token ${localStorage.getItem("access")}`,
//             };
//             const data = new FormData();
//             data.append("CampaignID", item.id);
//             data.append(
//                 "Status",
//                 item.status === "PENDING" ? "RUNNING" : "PENDING"
//             );

//             const response = await axios.post(campaignStatusEndpoint, data, {
//                 headers: headers,
//             });

//             toast.feature();

//             console.log(response.data);
//             console.log(response.status);
//         } catch (error) {
//             toast.error();
//             console.error(error);
//         }
//     };

//     const handleDigitalRewardSubmit = async () => {
//         try {
//             const digitalRewardEndpoint =
//                 "https://app.qik-check.com/campaign/allow-digital-reward/";
//             const headers = {
//                 Authorization: `Token ${localStorage.getItem("access")}`,
//             };
//             const data = new FormData();
//             data.append("campaign_id", item.id);
//             data.append(
//                 "reward_option",
//                 item.digital_reward === "Yes" ? "No" : "Yes"
//             );

//             const response = await axios.post(digitalRewardEndpoint, data, {
//                 headers: headers,
//             });

//             toast.feature();

//             console.log(response.data);
//             console.log(response.status);
//         } catch (error) {
//             toast.error();
//             console.error(error);
//         }
//     };

//     return (
//         <>
//             <button
//                 disabled={disabled}
//                 onClick={() => setFeatureOpen(true)}
//                 className="btn btn-primary mr-2 ms-2 d-flex align-items-center"
//                 type="button"
//             >
//                 <span>Features</span>
//             </button>

//             <Modal
//                 style={customStyles}
//                 isOpen={featureOpen}
//                 onRequestClose={() => setFeatureOpen(false)}
//                 contentLabel="Example Modal"
//             >
//                 <button
//                     className="payment-modal__close-btn close"
//                     onClick={() => setFeatureOpen(false)}
//                 >
//                     <span>&times;</span>
//                 </button>
//                 <div>
//                     <h3>Campaign Feature</h3>
//                     <p>
//                         Do you want to update the campaign status to{" "}
//                         {item.status === "PENDING" ? "RUNNING" : "PENDING"}?
//                     </p>
//                     <div>
//                         <button
//                             onClick={handleCampaignStatusSubmit}
//                             className="btn btn-primary mt-2"
//                         >
//                             Update Status
//                         </button>
//                         <button
//                             onClick={handleDigitalRewardSubmit}
//                             className="btn btn-primary mt-2"
//                         >
//                             {item.digital_reward === "Yes"
//                                 ? "Remove Digital Reward"
//                                 : "Allow Digital Reward"}
//                         </button>
//                     </div>
//                 </div>
//             </Modal>
//         </>
//     );
// }

// import React from "react";
// import Modal from "react-modal";
// import axios from "axios";
// import { svgIcon, toast } from "../../../../core";
// import { customStyles } from "../../admin.style";

// Modal.setAppElement("#root");

// export function CampaignFeature({
//     disabled,
//     featureOpen,
//     setFeatureOpen,
//     item,
// }: any) {
//     const handleCampaignStatusSubmit = async () => {
//         try {
//             const campaignStatusEndpoint =
//                 "https://app.qik-check.com/campaign/campaign-status/";
//             const headers = {
//                 Authorization: `Token ${localStorage.getItem("access")}`,
//             };
//             const data = new FormData();
//             data.append("CampaignID", item.id);
//             data.append(
//                 "Status",
//                 item.status === "PENDING" ? "RUNNING" : "PENDING"
//             );

//             const response = await axios.post(campaignStatusEndpoint, data, {
//                 headers: headers,
//             });
//             toast.feature();

//             console.log(response.data);
//             console.log(response.status);
//         } catch (error) {
//             toast.error();
//             console.error(error);
//         }
//     };

//     const handleDigitalRewardSubmit = async () => {
//         try {
//             const digitalRewardEndpoint =
//                 "https://app.qik-check.com/campaign/allow-digital-reward/";
//             const headers = {
//                 Authorization: `Token ${localStorage.getItem("access")}`,
//             };
//             const data = new FormData();
//             data.append("CampaignID", item.id);
//             data.append(
//                 "reward_option",
//                 item.digital_reward === "Yes" ? "No" : "Yes"
//             );

//             const response = await axios.post(digitalRewardEndpoint, data, {
//                 headers: headers,
//             });
//             toast.feature();
//             console.log(response.data);
//             console.log(response.status);
//         } catch (error) {
//             toast.error();
//             console.error(error);
//         }
//     };

//     const handleAllowDuplicatesSubmit = async () => {
//         try {
//             const allowDuplicatesEndpoint =
//                 "https://app.qik-check.com/campaign/allow-dupicates/";
//             const headers = {
//                 Authorization: `Token ${localStorage.getItem("access")}`,
//             };
//             const data = new FormData();
//             data.append("campaign_id", item.id);
//             data.append(
//                 "allow_duplicate",
//                 item.allow_duplicate === "Yes" ? "No" : "Yes"
//             );

//             const response = await axios.post(allowDuplicatesEndpoint, data, {
//                 headers: headers,
//             });
//             toast.feature();
//             console.log(response.data);
//             console.log(response.status);
//         } catch (error) {
//             toast.error();
//             console.error(error);
//         }
//     };

//     return (
//         <>
//             <button
//                 disabled={disabled}
//                 onClick={() => setFeatureOpen(true)}
//                 className="btn btn-primary mr-2 ms-2 d-flex align-items-center"
//                 type="button"
//             >
//                 <span>Report</span>
//             </button>

//             <Modal
//                 style={customStyles}
//                 isOpen={featureOpen}
//                 onRequestClose={() => setFeatureOpen(false)}
//                 contentLabel="Example Modal"
//             >
//                 <button
//                     className="payment-modal__close-btn close"
//                     onClick={() => setFeatureOpen(false)}
//                 >
//                     <span>&times;</span>
//                 </button>
//                 <div>
//                     <h3>Campaign Feature</h3>
//                     <p>
//                         Do you want to update the campaign status to{" "}
//                         {item.status === "PENDING" ? "RUNNING" : "PENDING"}?
//                     </p>
//                     <div>
//                         <button
//                             onClick={handleCampaignStatusSubmit}
//                             className="btn btn-primary mt-2"
//                         >
//                             Update Status
//                         </button>
//                         <button
//                             onClick={handleDigitalRewardSubmit}
//                             className="btn btn-primary mt-2"
//                         >
//                             {item.digital_reward === "Yes"
//                                 ? "Remove Digital Reward"
//                                 : "Allow Digital Reward"}
//                         </button>
//                         <button
//                             onClick={handleAllowDuplicatesSubmit}
//                             className="btn btn-primary mt-2"
//                         >
//                             {item.allow_duplicate === "Yes"
//                                 ? "Disallow Duplicates"
//                                 : "Allow Duplicates"}
//                         </button>
//                     </div>
//                 </div>
//             </Modal>
//         </>
//     );
// }

import React from "react";
import Modal from "react-modal";
import axios from "axios";
import { svgIcon, toast } from "../../../../core";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: " 500px",
    },
};

Modal.setAppElement("#root");

export function CampaignFeature({
    disabled,
    featureOpen,
    setFeatureOpen,
    item,
}: any) {
    const handleCampaignStatusSubmit = async () => {
        try {
            const campaignStatusEndpoint =
                "https://app.qik-check.com/campaign/campaign-status/";
            const headers = {
                Authorization: `Token ${localStorage.getItem("access")}`,
            };
            const data = new FormData();
            data.append("CampaignID", item.id);
            data.append(
                "Status",
                item.status === "PENDING" ? "RUNNING" : "PENDING"
            );

            const response = await axios.post(campaignStatusEndpoint, data, {
                headers: headers,
            });

            toast.feature();
        } catch (error) {
            toast.error();
            console.error(error);
        }
    };

    const handleDigitalRewardSubmit = async () => {
        try {
            const digitalRewardEndpoint =
                "https://app.qik-check.com/campaign/allow-digital-reward/";
            const headers = {
                Authorization: `Token ${localStorage.getItem("access")}`,
            };
            const data = new FormData();
            data.append("campaign_id", item.id);
            data.append(
                "reward_option",
                item.digital_reward === "Yes" ? "No" : "Yes"
            );

            const response = await axios.post(digitalRewardEndpoint, data, {
                headers: headers,
            });

            toast.feature();
        } catch (error) {
            toast.error();
            console.error(error);
        }
    };

    const handleAllowDuplicatesSubmit = async () => {
        try {
            const allowDuplicatesEndpoint =
                "https://app.qik-check.com/campaign/allow-dupicates/";
            const headers = {
                Authorization: `Token ${localStorage.getItem("access")}`,
            };
            const data = new FormData();
            data.append("campaign_id", item.id);
            data.append(
                "allow_duplicate",
                item.allow_duplicate === "Yes" ? "No" : "Yes"
            );

            const response = await axios.post(allowDuplicatesEndpoint, data, {
                headers: headers,
            });

            toast.feature();
        } catch (error) {
            toast.error();
            console.error(error);
        }
    };

    const handleAllowDuplicatesAcrossCampaignsSubmit = async () => {
        try {
            const allowDuplicatesAcrossCampaignsEndpoint =
                "https://app.qik-check.com/campaign/allow-dupicates-across-campaigns/";
            const headers = {
                Authorization: `Token ${localStorage.getItem("access")}`,
            };
            const data = new FormData();
            data.append("campaign_id", item.id);
            data.append(
                "allow_duplicate_across_campaigns",
                item.allow_duplicate_across_campaigns === "Yes" ? "No" : "Yes"
            );

            const response = await axios.post(
                allowDuplicatesAcrossCampaignsEndpoint,
                data,
                {
                    headers: headers,
                }
            );

            toast.feature();
        } catch (error) {
            toast.error();
            console.error(error);
        }
    };

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

            <Modal
                style={customStyles}
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
                            <p>
                                {/* Do you want to update the campaign status to{" "}
                                {item.status === "PENDING"
                                    ? "RUNNING"
                                    : "PENDING"}
                                ? */}
                                See the below feature for {item.name} campaign
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button
                                onClick={handleCampaignStatusSubmit}
                                className="btn btn-primary mt-2 w-100"
                            >
                                Update Status
                            </button>
                        </div>
                        <div className="col">
                            <button
                                onClick={handleDigitalRewardSubmit}
                                className="btn btn-primary mt-2 w-100"
                            >
                                {item.digital_reward === "Yes"
                                    ? "Remove Digital Reward"
                                    : "Allow Digital Reward"}
                            </button>
                        </div>
                        <div className="col">
                            <button
                                onClick={handleAllowDuplicatesSubmit}
                                className="btn btn-primary mt-2 w-100"
                            >
                                {item.allow_duplicate === "Yes"
                                    ? "Disallow Duplicates"
                                    : "Allow Duplicates"}
                            </button>
                        </div>
                        <div className="col">
                            <button
                                onClick={
                                    handleAllowDuplicatesAcrossCampaignsSubmit
                                }
                                className="btn btn-primary mt-2 w-100"
                            >
                                {item.allow_duplicate_across_campaigns === "Yes"
                                    ? "Disallow Duplicates Across Campaigns"
                                    : "Allow Duplicates Across Campaigns"}
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}
