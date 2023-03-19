import Footer from "../../../core/common/footer.component";
import Charts from "../../admin/components/charts/charts";
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
            <Footer />
        </>
    );
}
