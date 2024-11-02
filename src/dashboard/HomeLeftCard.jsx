import React, { useState } from "react";
import "./HomeLeftCard.css";
import promange from "../images/promanage.png";
import board from "../images/board.png";
import analytics from "../images/analytics.png";
import settings from "../images/settings.png";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/UserServices";

const HomeLeftCard = () => {
	const navigate = useNavigate();
	const [selected, setSelected] = useState(null); // State to track selected item

	const handleBoardClick = () => {
		setSelected("board");
		navigate("/home");
	};

	const handleAnalyticsClick = () => {
		setSelected("analytics");
		navigate("/home/analytics");
	};

	const handleSettingsClick = () => {
		setSelected("settings");
		navigate("/home/settings");
	};

	const handleLogout = () => {
		logout();
		navigate("/");
	};

	// Function to get the style for each card
	const getCardStyle = (cardName) => {
		return selected === cardName
			? { backgroundColor: "#e0e0e0", cursor: "pointer" } // Change this color as needed
			: { cursor: "pointer" };
	};

	return (
		<div className="cardMainDiv">
			<div className="cardDiv" style={getCardStyle("promanage")}>
				<img src={promange} alt="" />
				<p
					style={{
						color: "#000000",
						fontFamily: "Open Sans",
						fontWeight: "700",
						fontSize: "21px",
					}}
				>
					Pro Manage
				</p>
			</div>
			<div className="cardDiv" style={getCardStyle("board")} onClick={handleBoardClick}>
				<img src={board} alt="" />
				<p>Board</p>
			</div>
			<div className="cardDiv" style={getCardStyle("analytics")} onClick={handleAnalyticsClick}>
				<img src={analytics} alt="" />
				<p>Analytics</p>
			</div>
			<div className="cardDiv" style={getCardStyle("settings")} onClick={handleSettingsClick}>
				<img src={settings} alt="" />
				<p>Settings</p>
			</div>
			<div className="cardDiv" style={getCardStyle("logout")} onClick={handleLogout}>
				<img src={settings} alt="" />
				<p>Logout</p>
			</div>
		</div>
	);
};

export default HomeLeftCard;
