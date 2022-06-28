import React from "react";

function SelectedBrewer(props) {
	if (props.selectedBrewer) {
		return (
			<div className="brewer--outer">
				<p className="brewer">
					Looks like it's you turn{" "}
					<span>{props.selectedBrewer.name}</span>
				</p>
			</div>
		);
	} else {
		return (
			<div className="brewer--outer">
				<p className="brewer">
					<span>???</span>
				</p>
			</div>
		);
	}
}

export default SelectedBrewer;
