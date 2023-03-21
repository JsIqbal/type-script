import { useState, useEffect } from "react";
import axios from "axios";
// userReport
interface CampaignData {
    // Define the properties of your data here
    campaignReport?: {
        total_campaign: "";
        total_impression: "";
    };
    userReport?: {
        total_ba: "";
    };
}

const useCampaignData = () => {
    const [data, setData] = useState<CampaignData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCampaignData = async () => {
            try {
                const response = await axios.get(
                    "http://127.0.0.1:8000/campaign/dashboard/",
                    {
                        headers: {
                            Authorization:
                                "Token 7c729a12546ab13206a31e6222a336712cac2449",
                        },
                    }
                );
                setData(response.data);
            } catch (error) {
                setData({});
            } finally {
                setLoading(false);
            }
        };
        fetchCampaignData();
    }, []);

    return { data, loading };
};

export default useCampaignData;
