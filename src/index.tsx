import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./css/index.css";
import "./css/App.css";
import App from "./modules/core/App";

const div = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(div);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
