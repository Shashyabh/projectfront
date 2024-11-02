import React from "react";
import "./AssignCard.css";

const getInitials = (name) => {
	//console.log("name" + name);
	if (!name || typeof name !== "string") {
		return "";
	}

	const nameParts = name.trim().split(" ");
	if (nameParts.length === 0) {
		return "";
	}

	if (nameParts.length === 1) {
		return nameParts[0][0].toUpperCase() + nameParts[0][1].toUpperCase();
	} else {
		const initials = nameParts[0][0].toUpperCase() + nameParts[1][0].toUpperCase();
		return initials;
	}
};
const AssignCard = ({ user }) => {
	const short = getInitials(user.name);
	return (
		<div>
			<p className="userTitle">{short}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
			<p className="userEmail">{user.email}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
			<button className="assignButton">Assign</button>
		</div>
	);
};

export default AssignCard;
