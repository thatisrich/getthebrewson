import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import useLocalStorage from "../hooks/useLocalStorage";

import Layout from "../components/layout/Layout";
import OpeningContent from "../components/OpeningContent";
import BrewerList from "../components/BrewerList";
import AddBrewerForm from "../components/AddBrewerForm";
import SetCountdownForm from "../components/SetCountdownForm";
import BrewerActions from "../components/BrewerActions";
import SelectedBrewer from "../components/SelectedBrewer";
import CountdownTimer from "../components/CountdownTimer";

function IndexPage() {
	// Set brewer list values
	const [brewerList, setBrewerList] = useLocalStorage("brewers", []);
	const [selectedBrewer, setSelectedBrewer] = useState();

	// Set form validation
	const [formIsValid, setFormValid] = useState(true);

	// Set initial values for countdown timer
	const [currentDateTime, setCurrentDateTime] = useState(new Date());
	const [userTimer, setUserTimer] = useState();
	const [countdownTimer, setCountdownTimer] = useState(currentDateTime);
	const [showTimer, setShowTimer] = useState(false);
	const [isCounting, setIsCounting] = useState(false);

	// Add a new name to the list
	function addBrewerHandler(brewerName) {
		const data = {
			name: brewerName,
		};

		setBrewerList((brewerList) => [...brewerList, data]);
	}

	// Remove the target name from the list
	function removeBrewerHandler(key) {
		const newBrewers = brewerList.filter((_, index) => index !== key);

		setBrewerList(newBrewers);
		setFormValid(true);
	}

	// Select an entry from the list
	function selectBrewerHandler() {
		if (brewerList.length) {
			resetCountdownTimer();
			const brewName =
				brewerList[Math.floor(Math.random() * brewerList.length)];

			if (userTimer > 0) {
				setCurrentDateTime(new Date());
				setCountdownTimer(addMinutes(currentDateTime, userTimer));
				setShowTimer(true);
				setIsCounting(true);
			} else {
				setShowTimer(false);
				setIsCounting(false);
			}

			setSelectedBrewer(brewName);
			setFormValid(true);
		} else {
			setIsCounting(false);
			setFormValid(false);
		}
	}

	// Remove / dump all entries in the list
	function removeBrewersHandler() {
		setSelectedBrewer();
		setBrewerList([]);
		setFormValid(true);
		setShowTimer(false);
	}

	// Remove / dump all entries in the list
	function setUserTimerHandler(time) {
		setUserTimer(time);
	}

	function resetCountdownTimer() {
		setCountdownTimer(0);
		setShowTimer(false);
		setIsCounting(false);
	}

	// Snippet function to handle minutes conversion to date
	function addMinutes(date, minutes) {
		return new Date(date.getTime() + minutes * 60000);
	}

	// Setting up browser notifications
	const [notificationPermissions, setNotificationPermissions] = useState();

	// Ask for notification access on load
	Notification.requestPermission().then(function (result) {
		setNotificationPermissions(result);
	});

	return (
		<Layout>
			<Helmet>
				<meta charSet="utf-8" />
				<title>
					Decide whose round it is next with Get the Brews on!
				</title>
				<meta
					name="description"
					content="If you can't decide whose turn it is to make the next brew round, let fate pick a name from your custom list!"
				/>
				<link rel="canonical" href="https://getthebrewson.co.uk/" />
			</Helmet>
			<section className="">
				<OpeningContent />

				<div className="layout-grid">
					<div className="layout-item">
						<div className="board">
							<p className="board--message">
								<span>Who's round is it?</span>
							</p>
							<div
								className={
									selectedBrewer
										? "brewer--outer set"
										: "brewer--outer"
								}
							>
								<SelectedBrewer
									selectedBrewer={selectedBrewer}
								/>
							</div>
						</div>

						<CountdownTimer
							targetDate={countdownTimer}
							timerisVisible={showTimer}
							notificationPermissions={notificationPermissions}
							isCounting={isCounting}
							onSetIsCounting={setIsCounting}
							onResetTimer={resetCountdownTimer}
						/>
					</div>

					<div className="layout-item">
						<div className="pad">
							<p className="pad--head">Potential brewers</p>
							<BrewerList
								list={brewerList}
								onRemoveBrewer={removeBrewerHandler}
							/>
						</div>

						<AddBrewerForm
							onAddBrewer={addBrewerHandler}
							onFormValidation={setFormValid}
							formIsValid={formIsValid}
						/>

						<SetCountdownForm
							onSetUserTimer={setUserTimerHandler}
						/>

						<BrewerActions
							onRemoveBrewers={removeBrewersHandler}
							onSelectBrewer={selectBrewerHandler}
							onFormValidation={setFormValid}
							formIsValid={formIsValid}
						/>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default IndexPage;
