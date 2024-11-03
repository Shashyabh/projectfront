import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Home from "./dashboard/Home";
import ProtectedRoute from "./Protected/ProtectedRoute";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				{/* <Route>
					<Route path="/home/*" element={<Home />} />
				</Route> */}
				<Route path="/home/*" element={<ProtectedRoute element={<Home />} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
