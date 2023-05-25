import Layout from "../components/Layout";
import s from "../css/home.module.css";
import image from "../assets/images/about.jpeg";
const About = () => {
	return (
		<Layout>
			<div className={s.home__main + ""}>
				<div className="p-4 relative">
					<img className="absolute top-0 left-0" src={image} />
					<div className="z-10 absolute left-8 bg-black text-white w-[400px] p-3 rounded-md shadow-md">
						<h4>
							Credits : <em className="text-sm text-gray-400">Coming soon..</em>
						</h4>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default About;
