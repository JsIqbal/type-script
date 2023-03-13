import { Routes, Route, Navigate } from "react-router-dom";
import "../../css/App.css";

import Login from "../platform/user/components/login.component";

function App() {
    return (
        <div className="app">
            <div className="container-fluid">
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
