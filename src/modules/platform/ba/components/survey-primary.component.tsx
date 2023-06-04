// import { Col, Placeholder } from "react-bootstrap";
// import useCreateSurvey from "../hooks/useCreateSurvey";
// import SurveyForm from "./survey-primary-form.component";
// import useDashBoardHook from "../hooks/useDashBoardHook";
// import { useGetCampaign } from "../hooks/useGetCampaign";

// function SurveyPrimary() {
//     const { loading, error, formData, handleChange, handleSubmit } =
//         useCreateSurvey();
//     const { data } = useDashBoardHook();
//     const data2 = useGetCampaign();

//     if (loading)
//         return (
//             // <div aria-hidden="true">
//             //     <Placeholder xs={6} />
//             // </div>
//             <h1 className="text-center mt-5">Loading...</h1>
//         );
//     if (error) {
//         return <div>{error}</div>;
//     }
//     return (
//         <Col
//             style={{ marginBottom: "43px" }}
//             className="col-lg-6 ms-auto me-auto mt-5 card chart p-5 mb-5"
//         >
//             {data2.map((item) => {
//                 if (item.campaign.status === "RUNNING") {
//                     <div
//                         className="card border-primary text-center"
//                         style={{ maxWidth: "400px", margin: "0 auto" }}
//                     >
//                         <div className="card-header bg-primary text-white">
//                             <h5 className="card-title">Campaign Status</h5>
//                         </div>
//                         <div className="card-body">
//                             <p className="card-text">
//                                 The campaign is not active yet.
//                             </p>
//                         </div>
//                     </div>;
//                 }
//             })}
//             <SurveyForm
//                 data={data}
//                 formData={formData}
//                 handleChange={handleChange}
//                 handleSubmit={handleSubmit}
//             />
//         </Col>
//     );
// }

// export default SurveyPrimary;

import { Col } from "react-bootstrap";
import useCreateSurvey from "../hooks/useCreateSurvey";
import SurveyForm from "./survey-primary-form.component";
import useDashBoardHook from "../hooks/useDashBoardHook";
import { useGetCampaign } from "../hooks/useGetCampaign";
import { useState, useEffect } from "react";

function SurveyPrimary() {
    const { loading, error, formData, handleChange, handleSubmit } =
        useCreateSurvey();
    const { data } = useDashBoardHook();
    const { campaigns } = useGetCampaign();
    const [campaignStatus, setCampaignStatus] = useState("NOT_ACTIVE");

    useEffect(() => {
        const runningCampaign = campaigns.find(
            (item: any) => item.campaign.status === "RUNNING"
        );
        if (runningCampaign) {
            setCampaignStatus("RUNNING");
        } else {
            const pendingCampaign = campaigns.find(
                (item: any) => item.campaign.status === "PENDING"
            );
            if (pendingCampaign) {
                setCampaignStatus("PENDING");
            } else {
                setCampaignStatus("COMPLETED");
            }
        }
    }, [campaigns]);

    if (loading) return <h1 className="text-center mt-5">Loading...</h1>;

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Col
            style={{ marginBottom: "43px" }}
            className="col-lg-6 ms-auto me-auto mt-5 card chart p-5 mb-5"
        >
            {campaignStatus === "RUNNING" ? (
                <SurveyForm
                    data={data}
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            ) : campaignStatus === "PENDING" ? (
                <div
                    className="card border-primary text-center"
                    style={{ maxWidth: "400px", margin: "0 auto" }}
                >
                    <div className="card-header bg-primary text-white">
                        <h5 className="card-title">Campaign Status</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-text">
                            The campaign is not active yet. Please ask your
                            admin to activate it.
                        </p>
                    </div>
                </div>
            ) : (
                <div
                    className="card border-primary text-center"
                    style={{ maxWidth: "400px", margin: "0 auto" }}
                >
                    <div className="card-header bg-primary text-white">
                        <h5 className="card-title">Campaign Status</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-text">The campaign is Completed.</p>
                    </div>
                </div>
            )}
        </Col>
    );
}

export default SurveyPrimary;
