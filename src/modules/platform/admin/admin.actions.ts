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
