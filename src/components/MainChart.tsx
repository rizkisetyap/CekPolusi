import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
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
};
const labels = ["January", "February", "March", "April", "May", "June", "July"];

const MainChart: React.FC<{ ds: any }> = (prop) => {
	const data = {
		labels,
		datasets: [
			{
				label: "Datasets 1",
				data: prop.ds,
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
		],
	};
	return <Bar options={options} data={data} />;
};

export default MainChart;
