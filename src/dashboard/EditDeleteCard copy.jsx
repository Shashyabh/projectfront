import React, { useState } from "react";
import "./EditDeleteCard.css";
import DeleteCard from "./DeleteCard";

const EditDeleteCard = ({ task }) => {
	const [clicked, setClicked] = useState(false);
	const handleOnclick = () => {
		setClicked(true);
	};
	return (
		<div className="dotcardd">
			<h5 className="dotcardEdit">Edit</h5>
			<h5 className="dotcardShare">Share</h5>
			<h5 onClick={handleOnclick} className="dotcardDelete">
				Delete
			</h5>
			{clicked && <DeleteCard clicked={clicked} id={task._id} />}
		</div>
	);
};

export default EditDeleteCard;
