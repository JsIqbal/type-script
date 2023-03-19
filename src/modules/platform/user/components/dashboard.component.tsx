import Charts from "../../admin/components/charts/charts";
import BarChart from "../../admin/components/charts/bar-chart.component";
import Nav from "./nav.component";
import { Table } from "./table.component";

export default function Dashboard() {
    return (
        <>
            <Nav />
            <div className="container">
                <Charts />
                <Table />
            </div>
        </>
    );
}
