import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
	{
		path: "/about",
		element: <About />,
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
