import axios from "axios";

export async function login(loginData: any) {
    const data = new FormData();
    data.append("username", loginData.username);
    data.append("password", loginData.password);
    try {
        const res = await axios.post(
            "https://app.qik-check.com/account/login/",
            data
        );
        return res;
    } catch (err) {
        window.location.href = "/";
    }
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
