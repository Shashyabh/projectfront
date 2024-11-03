import React, { useEffect, useState } from "react";
import "./Analytics.css";
import { getAllTask } from "../services/TaskService";

const Analytics = () => {
	const [allTask, setAllTask] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await getAllTask();

				if (result) {
					setAllTask(result);
					console.log("all tasks", allTask);
				} else {
					console.error("No data found in response");
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	const countTasks = (status) => {
		if (!Array.isArray(allTask)) return 0;
		return allTask.filter((task) => task.status === status).length;
	};

	const countPriority = (priority) => {
		if (!Array.isArray(allTask)) return 0;
		return allTask.filter((task) => task.priority === priority).length;
	};

	return (
		<>
			<div className="analyticsDiv">
				<div>
					<span className="spanAna">Analytics</span>
				</div>
				<div className="analyticsMainDiv">
					<div className="analyticsTask">
						<table>
							<tbody className="tableBody">
								<tr>
									<p className="circle"></p>
									<td className="leftAlign">Backlog Tasks</td>
									<td className="rightAlign">{countTasks("backlog")}</td>
								</tr>
								<tr>
									<p className="circle"></p>
									<td className="leftAlign">To-do Tasks</td>
									<td className="rightAlign">{countTasks("todo")}</td>
								</tr>
								<tr>
									<p className="circle"></p>
									<td className="leftAlign">In-Progress Tasks</td>
									<td className="rightAlign">{countTasks("progress")}</td>
								</tr>
								<tr>
									<p className="circle"></p>
									<td className="leftAlign">Completed Tasks</td>
									<td className="rightAlign">{countTasks("done")}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="analyticsPriority">
						<table>
							<tbody>
								<tr>
									<p className="circle"></p>
									<td className="leftAlign">Low Priority</td>
									<td className="rightAlign">{countPriority("low")}</td>
								</tr>
								<tr>
									<p className="circle"></p>
									<td className="leftAlign">Moderate Priority</td>
									<td className="rightAlign">{countPriority("moderate")}</td>
								</tr>
								<tr>
									<p className="circle"></p>
									<td className="leftAlign">High Priority</td>
									<td className="rightAlign">{countPriority("high")}</td>
								</tr>
								<tr>
									<p className="circle"></p>
									<td className="leftAlign">Due Date Tasks</td>
									<td className="rightAlign">
										{Array.isArray(allTask)
											? allTask.filter((task) => new Date(task.dueDate) >= new Date())
													.length
											: 0}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default Analytics;
