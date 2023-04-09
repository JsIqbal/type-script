import axios from "axios";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

export default function Loader({ children }: any) {
    let [loading, setLoading] = useState(false);

    useEffect(() => {
        const requestInterceptor = axios.interceptors.request.use((config) => {
            if (config.method === "post") {
                setLoading(true);
            }
            return config;
        });

        const responseInterceptor = axios.interceptors.response.use(
            (response) => {
                if (response.config.method === "post") {
                    setLoading(false);
                }
                return response;
            },
            (error) => {
                if (error.config.method === "post") {
                    setLoading(false);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axios.interceptors.request.eject(requestInterceptor);
            axios.interceptors.response.eject(responseInterceptor);
        };
    }, []);

    return (
        <>
            {loading ? (
                <PuffLoader className="loader" color="#f50f72" />
            ) : (
                <>{children}</>
            )}
        </>
    );
}
