import React, { useEffect, useState } from "react";
import HomeRightCard from "./HomeRightCard";
import addpeople from "../images/addpeople.png";
import "./HomeRight.css";
import AddPeople from "./AddPeople";
import { getTaskByType } from "../services/TaskService";
const HomeRight = () => {
	const [show, setShow] = useState(false);
	const user = JSON.parse(localStorage.getItem("userData"));

	const [backlog, setBacklog] = useState([]);
	const [todoData, setTodoData] = useState([]);
	const [progressData, setProgressData] = useState([]);
	const [doneData, setDoneData] = useState([]);
	function formatCurrentDate() {
		const date = new Date();
		const options = { day: "numeric", month: "short", year: "numeric" };
		const parts = date.toLocaleDateString("en-GB", options).split(" ");
		const day = parts[0];
		const suffix = (day) => {
			const lastDigit = day.charAt(day.length - 1);
			if (lastDigit === "1" && day !== "11") return "st";
			if (lastDigit === "2" && day !== "12") return "nd";
			if (lastDigit === "3" && day !== "13") return "rd";
			return "th";
		};

		return `${day}${suffix(day)} ${parts[1]}, ${parts[2]}`;
	}

	//e5J0M9sXQ2Iy9Ort

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await getTaskByType("backlog");
				const todoresult = await getTaskByType("todo");
				const progressData = await getTaskByType("progress");
				const doneResult = await getTaskByType("done");

				if (result && result.data) {
					setBacklog(result.data);
					setProgressData(progressData.data);
					setTodoData(todoresult.data);
					setDoneData(doneResult.data);
				} else {
					console.error("No data found in response");
					setBacklog([]);
				}
			} catch (error) {
				console.error("Error fetching data:", error);
				setBacklog([]);
			}
		};

		fetchData();
	}, []);

	const handleAddPeople = () => {
		setShow(!show);
	};
	return (
		<div className="rightDiv">
			<div className="HomeCardUp">
				<div className="homeCardWelcome">
					<p className="homeCardWelcomeDiv">Welcome! {user?.name}</p>
					<p className="homeCardWelcomeDate">{formatCurrentDate()}</p>
				</div>
				<div className="homeCardBoard">
					<div className="homeCardBoardInner">
						<label>Board</label>
						<img src={addpeople} alt="" />

						<span onClick={handleAddPeople}>Add_People</span>
					</div>
					<select className="selectDropdown">
						<option value="volvo" selected>
							Today
						</option>
						<option value="saab">This Week</option>
						<option value="mercedes">This Month</option>
					</select>
					{/* <p >This_Week</p> */}
				</div>
			</div>
			<div className="homeCardDown">
				<div>
					<HomeRightCard title={"Backlog"} data={backlog} />
				</div>
				<div>
					<HomeRightCard title={"To-do"} data={todoData} />
				</div>
				<div>
					<HomeRightCard title={"In progress"} data={progressData} />
				</div>
				<div>
					<HomeRightCard title={"Done"} data={doneData} />
				</div>
			</div>
			{show && <AddPeople show={show} />}
		</div>
	);
};

export default HomeRight;
