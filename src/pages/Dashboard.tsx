import { useState } from "react";
import DefaultMap from "../components/DefaultMap";
import MainChart from "../components/MainChart";
import s from "../css/home.module.css";
import Layout from "../components/Layout";
const Dashboard = () => {
	const [data, setData] = useState([...new Array(10).fill(0).map(() => getRandomArbitrary(100, 500))]);

	function randomize() {
		setData([...new Array(10).fill(0).map(() => getRandomArbitrary(100, 500))]);
	}
	return (
		<Layout>
			<div className={s.home__main + " w-screen h-screen"}>
				<div className="p-4">
					<div className="mb-6">
						<h1 className="text-white text-4xl font-semibold mb-4">Dashboard</h1>
						<button onClick={randomize} className="outline-none px-4 py-1 bg-[#3858D6] text-white rounded-sm">
							Randomize
						</button>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 items-stretch lg:gap-4">
						<div className="col-span-1">
							<DefaultMap />
						</div>
						<div className="bg-white">
							<MainChart ds={data} />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
function getRandomArbitrary(min: number, max: number) {
	return Math.random() * (max - min) + min;
}
export default Dashboard;
