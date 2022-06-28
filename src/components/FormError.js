import React from "react";

function FormError(props) {
	if (!props.isValid) {
		return (
			<div className="alert-error">
				<p>Remember to add a name!</p>
			</div>
		);
	}
}

export default FormError;
