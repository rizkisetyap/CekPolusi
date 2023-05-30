import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend,
	LineElement,
	PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useRef } from "react";
import moment from "moment";
import "moment/locale/id";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

const MainChart: React.FC<{ ds: any; labels: any; date: any }> = (prop) => {
	const chartContainerRef = useRef(null);
	const options = {
		responsive: true,
		scales: {
			y: {
				ticks: {
					stepSize: 0.01, // Set the tick step (interval) to 10
				},
			},
		},
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: "Last Update " + moment(prop.date).format("dddd, DD MMMM YYYY - H:mm:ss"),
			},
		},
	};
	const data = {
		labels: prop.labels,
		datasets: prop.ds,
	};
	// console.log(prop.ds);
	return <Line ref={chartContainerRef} options={options} data={data} />;
};

export default MainChart;
