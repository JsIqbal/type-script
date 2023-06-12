import { useEffect, useState } from "react";
import axios from "axios";

interface CampaignData {
    job_choices: JobChoice[];
    age_choices: AgeChoice[];
}

interface JobChoice {
    id: number;
    professions: string;
}

interface AgeChoice {
    id: number;
    age: string;
}

const useDynamicSelect = (): CampaignData | null => {
    const [data, setData] = useState<CampaignData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<CampaignData>(
                    "https://app.qik-check.com/campaign/dynamics/"
                );
                console.log(response.data);
                setData(response.data);
            } catch (error) {
                console.error("Error fetching dynamic select data:", error);
            }
        };

        fetchData();
    }, []);

    return data;
};

export default useDynamicSelect;
