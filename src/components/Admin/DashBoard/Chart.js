import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend
} from "chart.js"
import { Doughnut, Line } from "react-chartjs-2"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend
);

export const LineChart = ({ dataArray = [] }) => {

    const labels = getLastYearMonths();
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom"
            },
            title: {
                display: true,
                text: "Yearly Views"
            },
        },
    };
        
    const data = {
            labels,
            datasets: [{
                label: "Views",
                data: dataArray,
                borderColor: "rgba(107,70,193,.5)",
                backgroundColor: "#6b46c1"
            },
            ],
        }

    return (
        <Line options={options} data={data} />
    )
};

function getLastYearMonths() {
    const labels = [];
    const months = ["January", "Feburary", "March", "April", " May ", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonth = new Date().getMonth();
    const remain = 11 - currentMonth;
    
    for (let i = currentMonth; i < months.length; i--) {
        const element = months[i];
        labels.unshift(element);
        if (i === 0) {
            break;
        }
    }

    for (let i = 11; i > remain; i--) {
        if (i === currentMonth) {
            break;
        }
        const element = months[i];
        labels.unshift(element);
    }
    return labels;

}


export const DoughnutChart = ({ users = [] }) => {

    const data = {
        labels: ["Subscribed", "Not Subscribed"],
        datasets: [{
            label: "Views",
            data: users,
            borderColor: ["rgb(62,12,171)", "rgb(214,43,129)"],
            backgroundColor: ["rgba(62,12,171,.3)", "rgba(214,43,129,.3)"]
        },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
            },
        },
    };

    return <Doughnut data={data} options={options} />
}