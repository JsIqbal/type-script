import axios from "axios";

export async function login(loginData: any) {
    const data = new FormData();
    data.append("username", loginData.username);
    data.append("password", loginData.password);
    try {
        const res = await axios.post(
            "http://127.0.0.1:8000/account/login/",
            data
        );
        return res;
    } catch (err) {}
}

export function handleUserType(
    setIsLoggedIn: any,
    setIsBa: any,
    setIsAdmin: any
) {
    if (localStorage.getItem("access")) {
        setIsLoggedIn(true);
        if (localStorage.getItem("userType") === "BA") {
            setIsBa(true);
            setIsAdmin(false);
        }

        if (localStorage.getItem("userType") === "Admin") {
            setIsBa(false);
            setIsAdmin(true);
        }
    }
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
            const data = sortData(res.results);

            setCampaignList(data);
        }
    } catch (error) {
        console.error(error);
    }
}
