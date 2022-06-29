import React from "react";
import { useEffect } from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "../hooks/useCountdown";

const CountdownTimer = ({
	targetDate,
	timerisVisible,
	notificationPermissions,
	isCounting,
	onSetIsCounting,
	onResetTimer,
	onSelectBrewer,
}) => {
	if (timerisVisible) {
		if (!isCounting) {
			return (
				<ExpiredNotice
					onTimeVisible={timerisVisible}
					notificationPermissions={notificationPermissions}
					onSelectBrewer={onSelectBrewer}
				/>
			);
		} else {
			return (
				<ShowCounter
					setIsCounting={onSetIsCounting}
					targetDate={targetDate}
					onResetTimer={onResetTimer}
				/>
			);
		}
	}
};

const ShowCounter = ({ setIsCounting, targetDate, onResetTimer }) => {
	setIsCounting(true);
	const [days, hours, minutes, seconds] = useCountdown(targetDate);

	if (days + hours + minutes + seconds <= 0) {
		setIsCounting(false);
	}

	return (
		<>
			<div className="show-counter">
				<p className="countdown-text">Next brewer up in:</p>
				<div className="countdown-inner">
					{/* <DateTimeDisplay
					value={days}
					type={"Days"}
					isDanger={days <= 3}
				/>
				<p>:</p> */}
					<DateTimeDisplay
						value={hours}
						type={"Hours"}
						isDanger={minutes === 0 && seconds <= 10}
					/>
					<p>:</p>
					<DateTimeDisplay
						value={minutes}
						type={"Mins"}
						isDanger={minutes === 0 && seconds <= 10}
					/>
					<p>:</p>
					<DateTimeDisplay
						value={seconds}
						type={"Seconds"}
						isDanger={minutes === 0 && seconds <= 10}
					/>
				</div>
			</div>
			<button
				className="btn btn--remove"
				data-width="full"
				onClick={onResetTimer}
				title="Remove the countdown timer"
			>
				Remove timer
			</button>
		</>
	);
};

const ExpiredNotice = ({
	onTimeVisible,
	notificationPermissions,
	onSelectBrewer,
}) => {
	useEffect(() => {
		function browserNotificationHandler() {
			if (notificationPermissions === "granted") {
				const img = "/images/browser-notification.jpg";
				const text =
					"Time to start another round! Who's it going to be this time?";
				const notification = new Notification("Get the Brews on!", {
					body: text,
					icon: img,
				});
			}
		}
		browserNotificationHandler();
	}, [onTimeVisible, notificationPermissions]);

	return (
		<>
			<div className="expired-notice">
				<span>Time's up!</span>
				<p>Let's see who's turn it is to make the brew next!</p>
			</div>
			<button
				className="btn"
				data-width="full"
				onClick={onSelectBrewer}
				title="Pick another brewer!"
			>
				Pick another brewer!
			</button>
		</>
	);
};

export default CountdownTimer;
