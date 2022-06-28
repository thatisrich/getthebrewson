import React from "react";

function BrewerList(props) {
	const removeBrewerName = (i) => {
		props.onRemoveBrewer(i);
	};

	if (props.list.length) {
		return (
			<ul className="brew-list" id="brewList">
				{props.list.map((brewer, i) => (
					<li
						className={"option option-" + i}
						key={i}
						data-name={"brewer_number_" + i}
					>
						<span className="option--name">{brewer.name}</span>
						<button
							className="option--delete"
							onClick={() => removeBrewerName(i)}
						>
							Remove this name
						</button>
					</li>
				))}
			</ul>
		);
	}
}

export default BrewerList;
