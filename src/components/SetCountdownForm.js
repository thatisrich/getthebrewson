import React from "react";

function SetCountdownForm() {
	return (
		<div>
			<p>
				Planning another round later? Set a reminder to pick the next
				brewer!
			</p>
			<form className="form--countdown">
				<p>The new brew will be in:</p>
				<input
					className=""
					id="countdownVal"
					min="0"
					max="300"
					type="number"
					value="0"
				/>
				<label className="" htmlFor="countdownVal">
					minutes.
				</label>
			</form>
			<p>
				<small>
					<i>
						Remember: to get a browser notification make sure they
						are allowed and that you don't close this tab!
					</i>
				</small>
			</p>
		</div>
	);
}

export default SetCountdownForm;
