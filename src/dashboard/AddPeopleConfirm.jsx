import React, { useEffect, useState } from "react";
import "./AddPeopleConfirm.css";

const AddPeopleConfirm = ({ showAdd, title }) => {
	const [isPopupOpen, setIsPopupOpen] = useState(true);

	const handleSubmit = (e) => {
		e.preventDefault();
		closePopup();
	};
	useEffect(() => {
		setIsPopupOpen(showAdd); // Sync popup open state with prop
	}, [showAdd]);

	const closePopup = () => setIsPopupOpen(false);

	const handleOverlayClick = (e) => {
		if (e.target.classList.contains("popupOverlay")) {
			closePopup();
		}
	};

	return (
		<div>
			{isPopupOpen && (
				<form className="popupOverlayyy" onClick={handleOverlayClick} onSubmit={handleSubmit}>
					<div className="popupContenttt">
						<span>{title} added to board</span>
						<div className="btnbtnn">
							<button className="btnbtnAddd" type="submit">
								Ok, got it!
							</button>
						</div>
					</div>
				</form>
			)}
		</div>
	);
};

export default AddPeopleConfirm;
