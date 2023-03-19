import React from "react";
import ReactApexChart from "react-apexcharts";

interface ChartData {
    x: string;
    y: number;
}

interface ChartProps {
    data: ChartData[];
}

const BarChart: React.FC<ChartProps> = ({ data }) => {
    const chartOptions = {
        chart: {
            id: "basic-bar",
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
        <ReactApexChart
            options={chartOptions}
            series={series}
            type="bar"
            height={300}
        />
    );
};

export default BarChart;
