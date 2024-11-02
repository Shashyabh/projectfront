import React, { useState } from "react";
import "./HomeRightCard.css";
import collapse from "../images/collapse.png";
import HeroSectionCard from "./HeroSectionCard";
import InputCard from "../card/InputCard";

const HomeRightCard = ({ title, data }) => {
	const [show, setShow] = useState(false);
	const handleInput = () => {
		setShow(!show);
	};

	// Log the data properly
	console.log("data====>", data);

	return (
		<div className="homeCardMain">
			<div className="homeCardUpper">
				<p>{title}</p>
				<div className="homeCardUpperInner">
					{title === "To-do" && (
						<p onClick={handleInput} className="plusIcon">
							+
						</p>
					)}
					<img src={collapse} alt="" />
				</div>
			</div>
			{show && <InputCard show={show} />}
			<div className="homeCardLower">
				{data && data.map((task) => <HeroSectionCard key={task._id} task={task} />)}
			</div>
		</div>
	);
};

export default HomeRightCard;