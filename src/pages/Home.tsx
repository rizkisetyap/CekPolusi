import cn from "classnames";
import img from "../assets/images/cloud.png";
import style from "../css/home.module.css";
import searchIcon from "../assets/images/search.svg";

export const Home = () => {
	return (
		<div className={cn(style.home__main, "h-screen w-screen")}>
			<div className="grid items-center grid-cols-1 md:grid-cols-2">
				<div className="p-16">
					<h1 className="text-6xl mb-7 font-semibold text-white">
						Seberapa
						<br />
						Sehat
						<br />
						Ruanganmu
					</h1>
					<p className="text-[#8B8E99]">
						Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find
						smart watches of almost all brands. So why you are waiting? Just order now!
					</p>
					<div className="bg-white mt-12 py-2 rounded-md">
						<div className="relative px-3 flex justify-between items-center">
							<img className="" src={searchIcon} />

							<input
								placeholder="Cek Ruang Meeting"
								type="text"
								className="rounded-md flex-1 block outline-none transition-all duration-300 px-2 py-1"
							/>
							<button className="rounded-md text-white inline-block right-4 bg-[#3858D6] p-2 z-10">
								Search
							</button>
						</div>
					</div>
				</div>
				<div className="flex justify-center items-center">
					<img src={img} className="w-[388px]" />
				</div>
			</div>
		</div>
	);
};
