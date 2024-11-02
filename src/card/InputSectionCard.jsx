import "./InputSectionCard.css";

const InputSectionCard = () => {
	return (
		<div className="inputSectionCard">
			<div className="inputSectionCardInner">
				<input className="innerCheckbox" type="checkbox" />
				<input className="innerText" type="text" />
			</div>
		</div>
	);
};

export default InputSectionCard;
