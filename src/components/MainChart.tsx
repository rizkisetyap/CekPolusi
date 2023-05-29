import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	LineElement,
	PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useRef, useEffect } from "react";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
		},
		title: {
			display: true,
			text: "Chart.js Bar Chart",
		},
	},
	options: {
		elements: {
			point: {
				radius: 0,
			},
		},
	},
};
// const labels = ["January", "February", "March", "April", "May", "June", "July"];

const MainChart: React.FC<{ ds: any }> = (prop) => {
	const chartContainerRef = useRef(null);

	const data = {
		labels: [...new Array(30).fill(0)],
		datasets: [
			{
				label: "Datasets 1",
				data: prop.ds,
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
		],
	};
	useEffect(() => {}, []);
	return <Line ref={chartContainerRef} options={options} data={data} />;
};

export default MainChart;
