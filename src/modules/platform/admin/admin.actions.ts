import axios from "axios";

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
        closeModal();
    } catch (err) {}
}

export const getCampaignList = async () => {
    let data;
    const access_token = `Token ${localStorage.getItem("access")}`;
    let url = "http://127.0.0.1:8000/campaign/campaign-list";

    await axios
        .get(url, {
            headers: {
                Authorization: access_token,
            },
        })
        .then((res) => {
            data = res.data;
        });
    console.log(data);
    return data;
};

export function sortData(data: any) {
    let d = data;
    d.sort();
    d.reverse();
    return d;
}

export async function fetchCampaignList(setCampaignList: any) {
    try {
        if (localStorage.getItem("userType") === "Admin") {
            const res: any = await getCampaignList();
            console.log("CampaignList", res.results);
            const data = res.results;

            setCampaignList(data);
        }
    } catch (error) {
        console.error(error);
    }
}
