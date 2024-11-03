import React, { useState, useEffect } from "react";
import "./DeleteCard.css";

import { useNavigate } from "react-router-dom";
import { deleteTaskById } from "../services/TaskService";
const DeleteCard = ({ clicked, id }) => {
	const [isPopupOpenn, setIsPopupOpenn] = useState(clicked);
	const navigate = useNavigate();

	useEffect(() => {
		setIsPopupOpenn(clicked);
	}, [clicked]);

	const closePopup = () => setIsPopupOpenn(false);

	const handleOverlayClick = (e) => {
		if (e.target.classList.contains("popupOverlay")) {
			closePopup();
		}
	};

	const handleDeleteClick = (e) => {
		e.preventDefault();
		deleteTaskById(id);
		navigate("/home");
		closePopup();
	};

	return (
		<div>
			{isPopupOpenn && (
				<div className="popupOverl" onClick={handleOverlayClick}>
					<div className="popupCont">
						<div className="btnContainer">
							<span className="deleteSpan">Are you sure you want to Delete?</span>
							<button className="btnCancel" type="button" onClick={closePopup}>
								Cancel
							</button>
							<button className="btnDelete" type="button" onClick={handleDeleteClick}>
								Delete
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default DeleteCard;
