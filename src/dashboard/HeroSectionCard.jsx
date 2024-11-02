import React from "react";
import "./HeroSectionCard.css";
import dots from "../images/dots.png";
import { HeroSectionCardData } from "./HeroSectionCardData";
import { editTaskStatus } from "../services/TaskService";

function formatDateString(dateString) {
	const date = new Date(dateString);
	const options = { day: "2-digit", month: "short" };
	return date.toLocaleDateString("en-GB", options);
}
const HeroSectionCard = ({ task, title }) => {
	//console.log("task======>", task);
	const date = formatDateString(task.dueDate);

	console.log("task iddddd " + task._id);
	const handleTaskStatus = () => {
		editTaskStatus("progress", task._id);
	};

	const handleTodoTaskStatus = () => {
		editTaskStatus("todo", task._id);
	};

	const handleDoneTaskStatus = () => {
		editTaskStatus("done", task._id);
	};

	const handleBacklogTaskStatus = () => {
		editTaskStatus("backlog", task._id);
	};

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
				<p
					style={{
						backgroundColor: title === "Done" ? "#63C05B" : "#cf3636",
					}}
				>
					{date}
				</p>
				<div className="statusDivInner">
					{title !== "Backlog" && (
						<p onClick={handleBacklogTaskStatus} className="statusBacklog">
							BACKLOG
						</p>
					)}
					{title !== "In progress" && (
						<p onClick={handleTaskStatus} className="statusProgress">
							PROGRESS
						</p>
					)}
					{title !== "To-do" && (
						<p onClick={handleTodoTaskStatus} className="statusToDo">
							TO-DO
						</p>
					)}
					{title !== "Done" && (
						<p onClick={handleDoneTaskStatus} className="statusDone">
							DONE
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default HeroSectionCard;
