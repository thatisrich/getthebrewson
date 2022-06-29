import React from "react";

function BrewerActions({ onSelectBrewer, onRemoveBrewers }) {
	return (
		<div className="actions">
			<button
				className="btn"
				id="brews"
				title="Shuffle through the names and pick a brewer!"
				onClick={onSelectBrewer}
			>
				Pick a Brewer
			</button>
			<button
				className="btn btn--remove"
				id="clearbrewers"
				title="Start over, clear all brewers from the list"
				onClick={onRemoveBrewers}
			>
				Remove all Brewers
			</button>
		</div>
	);
}

export default BrewerActions;
