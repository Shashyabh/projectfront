import React from "react";
import "./Home.css";
import HomeLeftCard from "./HomeLeftCard";
import HomeRight from "./HomeRight";
import { Route, Routes } from "react-router-dom";
import Analytics from "../analytics/Analytics";
import Settings from "../settings/Settings";
const Home = () => {
	return (
		<div className="main">
			<div className="leftDiv">
				<HomeLeftCard />
			</div>
			<Routes>
				<Route path="/" element={<HomeRight />} />
				<Route path="/analytics" element={<Analytics />} />
				<Route path="/settings" element={<Settings />} />
			</Routes>
		</div>
	);
};

export default Home;
