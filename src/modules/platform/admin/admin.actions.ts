import axios from "axios";
import { toast } from "../../core";

export async function createCampaign(formData: any, closeModal: any) {
    const data = new FormData();
    data.append("name", formData.name);
    data.append("status", formData.status);
    try {
        const access_token = `Token ${localStorage.getItem("access")}`;
        const res = await axios.post(
            "http://127.0.0.1:8000/campaign/create-campaign/",
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
    let url = "http://127.0.0.1:8000/campaign/campaign-list";

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
