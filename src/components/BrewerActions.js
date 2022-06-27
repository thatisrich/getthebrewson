import React from "react";

function BrewerActions(props) {
	return (
		<div className="actions">
			<button
				className="btn"
				id="brews"
				title="Shuffle through the names and pick a brewer!"
				onClick={props.onSelectBrewer}
			>
				Pick a Brewer
			</button>
			<button
				className="btn btn--remove"
				id="clearbrewers"
				title="Start over, clear all brewers from the list"
				onClick={props.onRemoveBrewers}
			>
				Remove all Brewers
			</button>
		</div>
	);
}

export default BrewerActions;
