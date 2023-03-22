import { useState, useEffect } from "react";
import axios from "axios";

const useGetCampaign = () => {
    const [campaigns, setCampaigns] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const access_token = `Token ${localStorage.getItem("access")}`;
    useEffect(() => {
        const getCampaign = async () => {
            try {
                const headers = {
                    Authorization: access_token,
                };
                const response = await axios.get(
                    "http://127.0.0.1:8000/campaign/get-campaign/",
                    { headers }
                );
                setCampaigns(response.data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
            }
        };
        getCampaign();
    }, []);

    return { campaigns, loading, error };
};

export { useGetCampaign };
