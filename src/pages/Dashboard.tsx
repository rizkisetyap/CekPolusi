import { useEffect, useState } from "react";
import DefaultMap from "../components/DefaultMap";
import MainChart from "../components/MainChart";
import s from "../css/home.module.css";
import Layout from "../components/Layout";
import { realtimeDB } from "../config/firebase";
import { ref, onValue } from "firebase/database";

const Dashboard = () => {
	const [datas, setDatas] = useState<number[]>([]);
	const [n, setN] = useState(0);
	// var n = 0;
	useEffect(() => {
		const q = ref(realtimeDB, "Sensor");
		return onValue(q, (snapshot) => {
			const data = snapshot.val();

			if (datas.length <= 30) {
				let newArray = [...datas];
				newArray = [data.RawData, ...newArray];
				setDatas(newArray);
			} else {
				let newArray = [...datas];
				newArray.pop();
				setDatas(newArray);
			}
			console.log(datas);
			setN((n) => n + 1);
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
							<MainChart ds={datas} />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Dashboard;
