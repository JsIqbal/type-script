import { useState, useEffect } from "react";
import axios from "axios";

interface CampaignData {
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
    const access_token = `Token ${localStorage.getItem("access")}`;
    useEffect(() => {
        const fetchCampaignData = async () => {
            try {
                const response = await axios.get(
                    "http://127.0.0.1:8000/campaign/dashboard/",
                    {
                        headers: {
                            Authorization: access_token,
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
