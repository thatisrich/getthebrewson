import { useState, useRef } from "react";

import React from "react";

import FormError from "./FormError";

function AddBrewerForm(props) {
	const brewerNameRef = useRef();
	const [formIsValid, setFormValid] = useState(true);

	function addBrewer(event) {
		event.preventDefault();
		const enteredName = brewerNameRef.current.value;
		if (enteredName !== "") {
			setFormValid(true);
			event.target.reset();
			props.onAddBrewer(enteredName);
		} else {
			setFormValid(false);
		}
	}

	return (
		<div>
			<form className="add-name" onSubmit={addBrewer}>
				<input
					id="dataInput"
					placeholder="Brewers' Name"
					ref={brewerNameRef}
					type="text"
				/>
				<button className="btn" id="addBrewer">
					Add to the mix
				</button>
			</form>
			<FormError isValid={formIsValid} />
		</div>
	);
}

export default AddBrewerForm;
