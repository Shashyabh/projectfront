import React, { useEffect, useState } from "react";
import "./AddPeople.css";
import AddPeopleConfirm from "./AddPeopleConfirm";
import { addPeopleToBoard } from "../services/UserServices";

const AddPeople = ({ show }) => {
	const [isPopupOpen, setIsPopupOpen] = useState(show);
	const [showAdd, setShowAdd] = useState(false);
	const [input, setInput] = useState({
		email: "",
	});
	const [title, setTitle] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		const userr = await addPeopleToBoard(input);
		setTitle(userr[userr.length - 1].email);
		//console.log("useeessesees" + userr[0].userId);
		setInput({ email: "" });
		setShowAdd(true);
		closePopup();
	};

	const closePopup = () => setIsPopupOpen(false);

	const handleOverlayClick = (e) => {
		if (e.target.classList.contains("popupOverlay")) {
			closePopup();
		}
	};

	useEffect(() => {
		setIsPopupOpen(show);
	}, [show]);

	return (
		<div>
			{isPopupOpen && (
				<form className="popupOverlayy" onClick={handleOverlayClick} onSubmit={handleSubmit}>
					<div className="popupContentt">
						<span className="popupHeadingg">Add people to the board</span>
						<label>
							<input
								className="groupNameInputt"
								type="email"
								placeholder="Enter the email"
								value={input.email}
								onChange={(e) => setInput((prev) => ({ ...prev, email: e.target.value }))}
							/>
						</label>

						<div className="btnbtn">
							<button className="btnbtnCancel" type="button" onClick={closePopup}>
								Cancel
							</button>
							<button className="btnbtnAdd" type="submit">
								Add Email
							</button>
						</div>
					</div>
				</form>
			)}

			{showAdd && <AddPeopleConfirm showAdd={showAdd} title={title} />}
		</div>
	);
};

export default AddPeople;
