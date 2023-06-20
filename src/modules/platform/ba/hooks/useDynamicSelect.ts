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
        // const fetchData = async () => {
        //     try {
        //         const response = await axios.get<CampaignData>(
        //             "http://127.0.0.1:8000/campaign/dynamics/"
        //         );
        //         console.log(response.data);
        //         setData(response.data);
        //     } catch (error) {
        //         console.error("Error fetching dynamic select data:", error);
        //     }
        // };
        const fetchData = async () => {
            try {
                const response = await axios.get<CampaignData>(
                    "http://127.0.0.1:8000/campaign/dynamics/"
                );

                const decodedData: CampaignData = {
                    job_choices: response.data.job_choices.map((choice) => ({
                        id: choice.id,
                        professions: decodeURIComponent(choice.professions),
                    })),
                    age_choices: response.data.age_choices.map((choice) => ({
                        id: choice.id,
                        age: decodeURIComponent(choice.age),
                    })),
                };

                const sortedData: CampaignData = {
                    job_choices: decodedData.job_choices.sort((a, b) =>
                        a.professions.localeCompare(b.professions)
                    ),
                    age_choices: decodedData.age_choices.sort((a, b) =>
                        a.age.localeCompare(b.age)
                    ),
                };

                setData(sortedData);
            } catch (error) {
                console.error("Error fetching dynamic select data:", error);
            }
        };

        fetchData();
    }, []);

    return data;
};

export default useDynamicSelect;
