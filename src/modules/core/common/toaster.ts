import { injectStyle } from "react-toastify/dist/inject-style";
import { toast } from "react-toastify";

if (typeof window !== "undefined") {
    injectStyle();
}

async function success() {
    toast.success("Successful!", {
        autoClose: 1000,
        // onClose: () => {
        //     window.location.reload();
        // },
    });
}

function error() {
    toast.error("Failed!", {
        autoClose: 1000,
        // onClose: () => {
        //     window.location.reload();
        // },
    });
}

function er() {
    toast.error("Number Already Exists!", {
        autoClose: 1000,
        // onClose: () => {
        //     window.location.reload();
        // },
    });
}

function log() {
    toast.error("Logout Due To Inactivity!", {
        autoClose: 1000,
        onClose: () => {
            window.location.reload();
        },
    });
}

export { success, error, er, log };
