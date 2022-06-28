import React from "react";

function SelectedBrewer(props) {
	if (props.selectedBrewer) {
		return (
			<>
				<p className="brewer brewer_name">
					Looks like it's your turn{" "}
					<span>{props.selectedBrewer.name}</span>
				</p>
			</>
		);
	} else {
		return (
			<>
				<p className="brewer brewer_empty">
					<span>???</span>
				</p>
			</>
		);
	}
}

export default SelectedBrewer;
