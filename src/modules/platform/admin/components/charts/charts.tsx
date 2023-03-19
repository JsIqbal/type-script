import Typography from "../../../../core/common/typography.component";
import BarChart from "./bar-chart.component";
import DonutChart from "./donut-chart.component";
import LineChart from "./line-chart.component";

const data1 = [
    { x: "Category 1", y: 10 },
    { x: "Category 2", y: 20 },
    { x: "Category 3", y: 15 },
    { x: "Category 4", y: 5 },
    { x: "Category 5", y: 8 },
];
const data2 = [
    { x: "Jan", y: 23 },
    { x: "Feb", y: 43 },
    { x: "Mar", y: 36 },
    { x: "Apr", y: 55 },
    { x: "May", y: 38 },
];
const sampleData = {
    labels: ["Banglalink", "Grameenphone", "Airtel", "Teletalk", "Robi"],
    values: [10, 30, 20, 25, 5],
};
const Charts = () => {
    return (
        <div className="chart-container">
            <div className="row">
                <div className="col-sm-4 chart card">
                    <div className="card-body">
                        <Typography
                            className="fw-semibold mb-2"
                            element={"Total BA"}
                        />
                        <BarChart data={data1} />
                    </div>
                </div>
                <div className="col-sm-4 text-center">
                    <Typography
                        className="fw-semibold mb-2"
                        element={"Impressions/Hour"}
                    />
                    <LineChart data={data2} />
                </div>
                <div className="col-sm-4 chart card text-center">
                    <Typography
                        className="fw-semibold pt-3"
                        element={"Impressions/Campaign"}
                    />
                    <DonutChart />
                </div>
            </div>
        </div>
    );
};

export default Charts;
