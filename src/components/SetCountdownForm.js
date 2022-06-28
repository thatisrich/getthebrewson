import { useRef } from "react";
import React from "react";

function SetCountdownForm(props) {
	const timerValue = useRef();

	function updateUserTimer(event) {
		event.preventDefault();
		const enteredTimer = timerValue.current.value;
		if (enteredTimer !== "") {
			props.onSetUserTimer(enteredTimer);
		} else {
			props.onSetUserTimer("");
		}
	}

	return (
		<div>
			<p>
				Planning another round later? Set a reminder to pick the next
				brewer!
			</p>
			<form className="form--countdown">
				<p>Pick a new brewer in</p>
				<input
					className=""
					id="countdownMins"
					onChange={updateUserTimer}
					min="0"
					max="300"
					ref={timerValue}
					type="number"
				/>
				<label className="" htmlFor="countdownMins">
					minutes!
				</label>
			</form>
		</div>
	);
}

export default SetCountdownForm;
