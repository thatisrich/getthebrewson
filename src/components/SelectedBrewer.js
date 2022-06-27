import React from "react";

function SelectedBrewer(props) {
	if (props.selectedBrewer) {
		return (
			<div>
				<p className="brewer">{props.selectedBrewer.name}</p>
			</div>
		);
	}
}

export default SelectedBrewer;
