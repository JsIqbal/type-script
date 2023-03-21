import { Footer, Typography } from "../../../core";
import Charts from "./charts/charts";
import Banner from "./dashboard-banner.component";
import Nav from "./nav.component";
import { Table } from "./table/table.component";

export default function Dashboard() {
    return (
        <>
            <Nav />
            <div className="container">
                <div className="chart-container">
                    <div className="row">
                        <Charts />
                        <div className="col-sm-4 chart card text-center">
                            <Typography
                                className="fw-semibold pt-3"
                                element={"Users/Report"}
                            />
                            <Banner />
                        </div>
                        <Table />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}
