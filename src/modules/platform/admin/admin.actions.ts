import axios from "axios";
import { toast } from "../../core";

export async function createCampaign(formData: any, closeModal: any) {
    const data = new FormData();
    data.append("name", formData.name);
    data.append("status", formData.status);
    try {
        const access_token = `Token ${localStorage.getItem("access")}`;
        const res = await axios.post(
            "https://app.qik-check.com/campaign/create-campaign/",
            data,
            {
                headers: {
                    Authorization: access_token,
                },
            }
        );
        toast.success();
        closeModal();
    } catch (err) {
        toast.error();
    }
}

export const getCampaignList = async (next?: string, prev?: string) => {
    const access_token = `Token ${localStorage.getItem("access")}`;
    let url = "https://app.qik-check.com/campaign/campaign-list";

    if (next || prev) {
        url = next ? next : prev ? prev : url;
    }

    const response = await axios.get(url, {
        headers: {
            Authorization: access_token,
        },
    });
    return response.data;
};

export function sortData(data: any) {
    let d = data;
    d.sort();
    d.reverse();
    return d;
}

export async function fetchCampaignList(
    setCampaignList: any,
    setNext: any,
    setPrev: any,
    setItemsPerPage: any,
    next?: any,
    prev?: any
) {
    try {
        if (localStorage.getItem("userType") === "Admin") {
            const res: any = await getCampaignList(next, prev);
            setNext(res.next);
            setPrev(res.previous);
            setItemsPerPage(res.count);
            const data = res.results;

            setCampaignList(data);
        }
    } catch (error) {
        console.error(error);
    }
}

export const handleCampaignStatusSubmit = async (item: any) => {
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

export const handleDigitalRewardSubmit = async (item: any) => {
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

export const handleAllowDuplicatesSubmit = async (item: any) => {
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

export const handleAllowDuplicatesAcrossCampaignsSubmit = async (item: any) => {
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
