import { Footer } from "../../../core";
import Charts from "./charts/charts";
import Nav from "./nav.component";
import { Table } from "./table/table.component";

export default function Dashboard() {
    return (
        <>
            <Nav />
            <div className="container">
                <Charts />
                <Table />
            </div>
            <Footer />
        </>
    );
}
