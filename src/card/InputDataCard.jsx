import React from "react";
import "./InputDataCard.css";
const InputDataCard = ({ tasks }) => {
	console.log("taskkkkk===>>>" + tasks);
	return (
		<div className="inputDataCard">
			{tasks != null &&
				tasks.map((task, i) => (
					<div key={i} className="inputDataCardInner">
						<input type="checkbox" checked={task.checked} readOnly />
						<span>{task.text}</span>
					</div>
				))}
		</div>
	);
};

export default InputDataCard;
