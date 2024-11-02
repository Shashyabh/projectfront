import React from "react";
import "./HeroSectionCardData.css";
export const HeroSectionCardData = ({ checklist }) => {
	//console.log("chhhhhhh" + checklist);
	console.log("checking ==> ", JSON.stringify(checklist, null, 2));
	//checklist = JSON.stringify(checklist, null, 2);
	return (
		<div className="heroSectionCard">
			{checklist?.map((item) => (
				<div key={item.id || item.text} className="heroSectionCardInner">
					{console.log("first++++" + item)}
					<input type="checkbox" checked={item.checked} />
					<span>{item?.text}</span>
				</div>
			))}

			{/* <div className="heroSectionCardInner">
				<input type="checkbox" checked={checklist.checked} />
				<span>{checklist?.text}</span>
			</div> */}
		</div>
	);
};
