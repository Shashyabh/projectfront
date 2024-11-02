import React from "react";
import "./HeroSectionCard.css";
import dots from "../images/dots.png";
import { HeroSectionCardData } from "./HeroSectionCardData";

const HeroSectionCard = ({ task }) => {
	// console.log("Task======>", JSON.stringify(task));
	console.log("task======>", task);
	// task = JSON.stringify(task);
	return (
		<div className="mainCard">
			<div className="priority">
				<div className="priorityLabel">
					<span className="priorityIndicator"></span>
					<p>HIGH PRIORITY</p>
				</div>
				<img src={dots} alt="dots" />
			</div>
			<span className="heroSectionTitle">Hero Section</span>
			<div className="checklist">
				<p>Checklist (0/3)</p>
				<p className="checklistPop">^</p>
			</div>
			<div className="heroSectionData">
				<HeroSectionCardData checklist={task.checkLists} />
			</div>
			<div className="statusDiv">
				<p style={{ backgroundColor: "#cf3636" }}>Feb 10</p>
				<div className="statusDivInner">
					<p className="statusProgress">PROGRESS</p>
					<p className="statusToDo">TO-DO</p>
					<p className="statusDone">DONE</p>
				</div>
			</div>
		</div>
	);
};

export default HeroSectionCard;
