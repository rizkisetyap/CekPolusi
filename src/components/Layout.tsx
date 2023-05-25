import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
interface Props {
	children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
	return (
		<main>
			<nav className="flex gap-4 py-2 px-4">
				<Link to="/">Home</Link>
				<Link to="/dashboard">Dashboard</Link>
				<Link to="/about">About</Link>
			</nav>
			{children}
		</main>
	);
};

export default Layout;
