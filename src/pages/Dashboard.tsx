import { useEffect, useState } from "react";
import DefaultMap from "../components/DefaultMap";
import MainChart from "../components/MainChart";
import s from "../css/home.module.css";
import Layout from "../components/Layout";
import { realtimeDB } from "../config/firebase";
import { ref, onValue } from "firebase/database";
import moment from "moment";

interface IDataSets {
	label: string;
	data: number[];
	backgroundColor: string;
	pointRadius: number;
	tension: number;
	borderColor: string;
}
const initialDatasets: IDataSets = {
	label: "DatasRaw",
	data: [],
	backgroundColor: "rgba(53, 162, 235, 0.5)",
	pointRadius: 2,
	tension: 0.1,
	borderColor: "rgba(53, 162, 235, 0.5)",
};
const Dashboard = () => {
	const [labels, setLabels] = useState<string[]>([]);
	const [time, setTime] = useState(Date.now());
	const [n, setN] = useState(0);
	///
	const [datasetsRaw, setDatasetsRaw] = useState<IDataSets>({
		...initialDatasets,
		label: "Dataset Raw",
		backgroundColor: "rgba(53, 162, 235, 0.5)",
		borderColor: "rgba(53, 162, 235, 0.5)",
	});
	const [datasetAlcohol, setDatasetAlcohol] = useState<IDataSets>({
		...initialDatasets,
		label: "Dataset Alcohol",
		backgroundColor: "rgba(255,99,132,0.5)",
		borderColor: "rgba(255,99,132,0.5)",
	});
	const [datasetnh4, setDatasetnh4] = useState<IDataSets>({
		...initialDatasets,
		label: "Dataset NH4",
		backgroundColor: "rgba(252,168,86,0.5)",
		borderColor: "rgba(252,168,86,0.5)",
	});
	const [datasetco2, setDatasetco2] = useState<IDataSets>({
		...initialDatasets,
		label: "Dataset CO2",
		backgroundColor: "rgba(255,230,170,0.5)",
		borderColor: "rgba(255,230,170,0.5)",
	});
	// var n = 0;
	useEffect(() => {
		const q = ref(realtimeDB, "Sensor");
		return onValue(q, (snapshot) => {
			const data = snapshot.val();
			const alkohol = data.ALCOHOL + Math.random() * (631 - 625 + 1) + 625;
			const co2 = data.CO2 + Math.random() * (250 - 230 + 1) + 230;
			const nh4 = data.NH4 + Math.random() * (640 - 620 + 1) + 620;
			const label = moment(Date.now()).format("H:mm:ss");
			let rawData = data.RawData + Math.random() * (20 - 3 + 1) + 3;
			if (datasetsRaw.data.length >= 10) {
				const newArray = [...datasetsRaw.data];
				const newAlkohol = [...datasetAlcohol.data];
				const newNH4 = [...datasetnh4.data];
				const newCO2 = [...datasetco2.data];
				const newLabels = [...labels];
				newLabels.unshift(label);

				newArray.pop();
				newAlkohol.pop();
				newNH4.pop();
				newCO2.pop();

				newArray.unshift(rawData);
				newAlkohol.unshift(alkohol);
				newNH4.unshift(nh4);
				newCO2.unshift(co2);

				newLabels.pop();

				setLabels(newLabels);
				setDatasetsRaw((p) => ({ ...p, data: newArray }));
				setDatasetAlcohol((p) => ({ ...p, data: newAlkohol }));
				setDatasetnh4((p) => ({ ...p, data: newNH4 }));
				setDatasetco2((p) => ({ ...p, data: newCO2 }));
			} else {
				const newArray = [...datasetsRaw.data];
				const newAlkohol = [...datasetAlcohol.data];
				const newNH4 = [...datasetnh4.data];
				const newCO2 = [...datasetco2.data];
				const newLabels = [...labels];

				newArray.unshift(rawData);
				newAlkohol.unshift(alkohol);
				newNH4.unshift(nh4);
				newCO2.unshift(co2);

				newLabels.unshift(label);
				setLabels(newLabels);
				setDatasetsRaw((p) => ({ ...p, data: newArray }));
				setDatasetsRaw((p) => ({ ...p, data: newArray }));
				setDatasetAlcohol((p) => ({ ...p, data: newAlkohol }));
				setDatasetnh4((p) => ({ ...p, data: newNH4 }));
				setDatasetco2((p) => ({ ...p, data: newCO2 }));
			}
			setTime(Date.now());
			setTimeout(() => setN((n) => n + 1), 2000);
		});
	}, [n]);
	// console.log(datas);
	return (
		<Layout>
			<div className={s.home__main + " w-screen h-screen"}>
				<div className="p-4">
					<div className="mb-6">
						<h1 className="text-white text-4xl font-semibold mb-4">Dashboard</h1>
						<button className="outline-none px-4 py-1 bg-[#3858D6] text-white rounded-sm">Randomize</button>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 items-stretch lg:gap-4">
						<div className="col-span-1">
							<DefaultMap />
						</div>
						<div className="bg-white">
							<MainChart
								date={time}
								ds={[datasetsRaw, datasetco2, datasetAlcohol, datasetnh4]}
								labels={labels}
							/>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Dashboard;
