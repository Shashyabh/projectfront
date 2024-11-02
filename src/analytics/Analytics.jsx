import React from "react";
import "./Analytics.css";

const Analytics = () => {
	return (
		<>
			<div className="analyticsDiv">
				<div>
					<span>Analytics</span>
				</div>
				<div className="analyticsMainDiv">
					<div className="analyticsTask">
						<table>
							<tbody className="tableBody">
								<tr>
									<p className="circle"></p>
									<td className="leftAlign">Backlog Tasks</td>
									<td className="rightAlign">16</td>
								</tr>
								<tr>
									<p className="circle"></p>
									<td className="leftAlign">To-do Tasks</td>
									<td className="rightAlign">14</td>
								</tr>
								<tr>
									<p className="circle"></p>
									<td className="leftAlign">In-Progress Tasks</td>
									<td className="rightAlign">3</td>
								</tr>
								<tr>
									<p className="circle"></p>
									<td className="leftAlign">Completed Tasks</td>
									<td className="rightAlign">22</td>
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
									<td className="rightAlign">16</td>
								</tr>
								<tr>
									<p className="circle"></p>
									<td className="leftAlign">Moderate Priority</td>
									<td className="rightAlign">14</td>
								</tr>
								<tr>
									<p className="circle"></p>
									<td className="leftAlign">High Priority</td>
									<td className="rightAlign">3</td>
								</tr>
								<tr>
									<p className="circle"></p>
									<td className="leftAlign">Due Date Tasks</td>
									<td className="rightAlign">22</td>
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
