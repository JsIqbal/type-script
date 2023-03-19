import React from "react";
import ReactApexChart from "react-apexcharts";

interface LineChartProps {
    data: {
        x: string;
        y: number;
    }[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
    const options = {
        chart: {
            id: "basic-line",
        },
        xaxis: {
            categories: data.map((item) => item.x),
        },
    };

    const series = [
        {
            name: "Series 1",
            data: data.map((item) => item.y),
        },
    ];

    return (
        <div className="mt-2">
            <ReactApexChart
                options={options}
                series={series}
                type="line"
                height={300}
            />
        </div>
    );
};

export default LineChart;
