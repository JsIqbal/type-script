import { Outlet } from "react-router-dom";

function Test({}) {
    return <div className="content-wrapper">{<Outlet />}</div>;
}

export default Test;
