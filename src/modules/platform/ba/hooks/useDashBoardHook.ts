import { useState, useEffect } from "react";
import axios from "axios";
interface DashBoardData {
    username: "";
    campaigns: "";
    region: "";
    area: "";
    teritorry: "";
    contact: "";
    Impression: null;
}

const useDashBoardHook = () => {
    const [data, setData] = useState<DashBoardData | null>(null);
    const [loading, setLoading] = useState(true);
    const access_token = `Token ${localStorage.getItem("access")}`;
    const [error, setError] = useState("");
    useEffect(() => {
        const fetchDashData = async () => {
            try {
                const response = await axios.get(
                    "http://127.0.0.1:8000/campaign/self-dashboard/",
                    {
                        headers: {
                            Authorization: access_token,
                        },
                    }
                );
                setData(response.data);
            } catch (error) {
            } finally {
                setLoading(false);
            }
        };
        fetchDashData();
    }, []);

    return { data, loading, error };
};

export default useDashBoardHook;
