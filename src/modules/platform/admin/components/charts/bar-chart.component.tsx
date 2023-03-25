import React from "react";
import ReactApexChart from "react-apexcharts";

import useCampaignData from "../../hooks/useCampaignData";

interface ChartData {
    x: string;
    y: number;
}

const BarChart: React.FC = () => {
    const { data, loading } = useCampaignData();

    if (loading || !data) {
        return <div>Loading...</div>;
    }

    const { campaignImpression }: any = data;

    const chartData: ChartData[] = campaignImpression
        ? campaignImpression.map((item: any) => ({
              x: item.name,
              y: item.impression,
          }))
        : [];

    const chartOptions: any = {
        chart: {
            id: "basic-bar",
        },
        xaxis: {
            labels: {
                style: {
                    fontSize: "14px",
                },
            },
            categories: chartData.map((item) => item.x),
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: "14px",
                },
            },
        },
        grid: {
            show: false,
        },
    };

    const series = [
        {
            name: "Impression",
            data: chartData.map((item) => item.y),
        },
    ];

    return (
        <div className="mt-2">
            <ReactApexChart
                options={chartOptions}
                series={series}
                type="bar"
                height={300}
            />
        </div>
    );
};

export default BarChart;
