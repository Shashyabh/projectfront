import React, { useEffect, useState } from "react";
import "./InputCard.css";
import "./InputSectionCard.css";
import InputDataCard from "./InputDataCard";
import { getMembersByUsers } from "../services/UserServices";
import AssignCard from "./AssignCard";
import { createTask } from "../services/TaskService";

const InputCard = ({ show }) => {
	const [formData, setFormData] = useState({
		title: "",
		priority: "",
		status: "backlog",
		checkLists: [],
		dueDate: "",
		assignTo: [],
		newTask: { checked: false, text: "" },
	});
	const [isCardOpen, setIsCardOpen] = useState(false);
	const [isPopupOpen, setIsPopupOpen] = useState(show);
	const [selectedUser, setSelectedUser] = useState("");
	const [users, setUsers] = useState([]);

	const closePopup = () => setIsPopupOpen(false);

	const handleUserSelect = (event) => {
		const value = event.target.value;
		setSelectedUser(value);
		setFormData((prev) => ({
			...prev,
			assignTo: [...prev.assignTo, value],
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const email = formData.assignTo[0]?.trim().split(/\s+/)[1];
			if (!email) throw new Error("No user assigned");

			const data = {
				title: formData.title,
				priority: formData.priority,
				status: formData.status,
				checkLists: formData.checkLists,
				assignTo: email,
				dueDate: formData.dueDate,
			};

			await createTask(data);
			// console.log("newData: " + newData);
			//if (!newData.status) throw new Error(newData.msg);

			closePopup();
		} catch (error) {
			console.log(error.message); // Replace with a proper UI message
		}
	};

	const addNewTask = (e) => {
		e.preventDefault();
		if (!isCardOpen) {
			setIsCardOpen(true);
		} else if (formData.newTask.text.trim() !== "") {
			setFormData((prev) => ({
				...prev,
				checkLists: [
					...prev.checkLists,
					{ text: formData.newTask.text, checked: formData.newTask.checked },
				],
				newTask: { checked: false, text: "" },
			}));
		}
	};

	const handleCheckboxChange = (event) => {
		setFormData((prev) => ({
			...prev,
			newTask: { ...prev.newTask, checked: event.target.checked },
		}));
	};

	const handleTextChange = (event) => {
		setFormData((prev) => ({
			...prev,
			newTask: { ...prev.newTask, text: event.target.value },
		}));
	};

	const handleOverlayClick = (e) => {
		if (e.target.classList.contains("popupOverlay")) {
			closePopup();
		}
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	useEffect(() => {
		const fetchUsers = async () => {
			const usersData = await getMembersByUsers(); // Await the promise
			if (usersData) {
				//console.log(usersData);
				setUsers(usersData.data);
			}
		};

		fetchUsers();
	}, []);

	return (
		<div className="mainpopDiv">
			{isPopupOpen && (
				<form className="popupOverlay" onClick={handleOverlayClick} onSubmit={handleSubmit}>
					<div className="popupContent">
						<span className="popupHeading">Task Details</span>
						<div>
							<input
								className="groupNameInput"
								type="text"
								name="title"
								placeholder="Enter Task Title"
								value={formData.title}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className="priorityTask">
							<p>Select Priority</p>
							<div className="radioInput">
								<input
									type="radio"
									name="priority"
									value="high"
									className="radioButton"
									id="radio-high"
									onChange={handleInputChange}
								/>
								<label htmlFor="radio-high" className="label">
									HIGH PRIORITY
								</label>
								<input
									type="radio"
									name="priority"
									value="moderate"
									className="radioButton"
									id="radio-moderate"
									onChange={handleInputChange}
								/>
								<label htmlFor="radio-moderate" className="label">
									MODERATE PRIORITY
								</label>
								<input
									type="radio"
									name="priority"
									value="low"
									className="radioButton"
									id="radio-low"
									onChange={handleInputChange}
								/>
								<label htmlFor="radio-low" className="label">
									LOW PRIORITY
								</label>
							</div>
						</div>

						<div className="assign">
							<p className="assignUser">Assign to (User)</p>
							<select
								className="groupNameAssign"
								value={selectedUser}
								onChange={handleUserSelect}
							>
								<option value="" disabled>
									Select a user
								</option>
								{users !== null &&
									users.map((user) => (
										<option key={user.id} value={user.id} className="optionContent">
											<AssignCard user={user} />
										</option>
									))}
							</select>
						</div>

						<div>
							<p>Checklist ({formData.checkLists.length}/0)</p>
							{formData.checkLists.length > 0 && (
								<InputDataCard tasks={formData.checkLists} />
							)}
							{isCardOpen && (
								<div className="inputSectionCard">
									<div className="inputSectionCardInner">
										<input
											className="innerCheckbox"
											type="checkbox"
											checked={formData.newTask.checked}
											onChange={handleCheckboxChange}
										/>
										<input
											className="innerText"
											type="text"
											value={formData.newTask.text}
											onChange={handleTextChange}
										/>
									</div>
								</div>
							)}
							<button onClick={addNewTask} className="addButton">
								+ Add new
							</button>
						</div>
						<div>
							<p>Due Date</p>
							<input
								className="inputDate"
								type="date"
								name="dueDate"
								value={formData.dueDate}
								onChange={handleInputChange}
							/>
						</div>
						<div className="lastDiv">
							<div className="lastDivInner">
								<button
									className="reset"
									type="button"
									onClick={() => setIsPopupOpen(!show)}
								>
									Cancel
								</button>
								<button className="save" type="submit">
									Save
								</button>
							</div>
						</div>
					</div>
				</form>
			)}
		</div>
	);
};

export default InputCard;
