import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "../hooks/useCountdown";

const CountdownTimer = (props) => {
	const [days, hours, minutes, seconds] = useCountdown(props.targetDate);

	if (props.timerisVisible) {
		if (days + hours + minutes + seconds <= 0) {
			return <ExpiredNotice />;
		} else {
			return (
				<ShowCounter
					days={days}
					hours={hours}
					minutes={minutes}
					seconds={seconds}
				/>
			);
		}
	}
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
	return (
		<div className="show-counter">
			<p className="countdown-text">Next brewer up in:</p>
			<div className="countdown-inner">
				{/* <DateTimeDisplay
					value={days}
					type={"Days"}
					isDanger={days <= 3}
				/>
				<p>:</p>
				<DateTimeDisplay
					value={hours}
					type={"Hours"}
					isDanger={false}
				/>
				<p>:</p> */}
				<DateTimeDisplay
					value={minutes}
					type={"Mins"}
					isDanger={false}
				/>
				<p>:</p>
				<DateTimeDisplay
					value={seconds}
					type={"Seconds"}
					isDanger={false}
				/>
			</div>
		</div>
	);
};

const ExpiredNotice = () => {
	return (
		<div className="expired-notice">
			<span>Time's up!</span>
			<p>Let's see who's turn it is to make the brew next!</p>
		</div>
	);
};

export default CountdownTimer;
