import React from "react";
import "./HeroSectionCardData.css";

export const HeroSectionCardData = ({ checklist }) => {
	//console.log("checking ==> ", JSON.stringify(checklist, null, 2));

	return (
		<div className="heroSectionCard">
			{checklist?.map((group) =>
				group.map((item) => (
					<div key={item.id || item.text} className="heroSectionCardInner">
						<input type="checkbox" checked={item.checked} readOnly />
						<span>{item.text}</span>
					</div>
				))
			)}
		</div>
	);
};
