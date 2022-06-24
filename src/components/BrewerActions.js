import React from "react";

function BrewerActions() {
	return (
		<div>
			<button
				className="btn"
				id="brews"
				title="Shuffle through the names and pick a brewer!"
			>
				Pick a Brewer
			</button>
			<button
				className="btn btn--remove"
				id="clearbrewers"
				title="Start over, clear all brewers from the list"
			>
				Remove all Brewers
			</button>
		</div>
	);
}

export default BrewerActions;
