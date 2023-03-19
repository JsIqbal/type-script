import ReactApexChart from "react-apexcharts";

function DonutChart({
    banglalink = 20,
    grameenphone = 10,
    airtel = 15,
    teletalk = 3,
    robi = 35,
}) {
    const initials: any = {
        series: [banglalink, grameenphone, airtel, teletalk, robi],
        chartOptions: {
            fill: {
                colors: ["#F16725", "#12acf8", "#FF0000", "#6cc63a", "#ac1833"],
            },
            legend: {
                show: true,
                position: "top",
                markers: {
                    width: 12,
                    height: 12,
                    strokeWidth: 0,
                    strokeColor: "#fff",
                    fillColors: [
                        "#F16725",
                        "#12acf8",
                        "#FF0000",
                        "#6cc63a",
                        "#ac1833",
                    ],
                },
            },
            labels: [
                "Banglalink",
                "Grameenphone",
                "Airtel",
                "Teletalk",
                "Robi",
            ],
            chart: {
                type: "donut",
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                        },
                    },
                },
            },
            responsive: [
                {
                    breakpoint: 1280,
                    options: {
                        chart: {
                            width: 400,
                        },
                        legend: {
                            position: "top",
                        },
                    },
                },
                {
                    breakpoint: 768,
                    options: {
                        chart: {
                            width: "100%",
                        },
                        legend: {
                            position: "bottom",
                        },
                    },
                },
            ],
        },
    };

    return (
        <div id="chart" className="mt-4">
            <ReactApexChart
                options={initials.chartOptions}
                series={initials.series}
                type="donut"
            />
        </div>
    );
}

export default DonutChart;
