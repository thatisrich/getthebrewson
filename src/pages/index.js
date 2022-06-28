import React from "react";
import { useState } from "react";
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
	const [userTimer, setUserTimer] = useState();
	const [countdownTimer, setCountdownTimer] = useState();
	const [showTimer, setShowTimer] = useState(false);
	const currentDateTime = new Date();

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
		setFormValid("true");
	}

	// Select an entry from the list
	function selectBrewerHandler() {
		const brewName =
			brewerList[Math.floor(Math.random() * brewerList.length)];

		if (userTimer) {
			setCountdownTimer(addMinutes(currentDateTime, userTimer));
		}

		setSelectedBrewer(brewName);
		setFormValid("true");
		countdownTimerHandler();
	}

	// Remove / dump all entries in the list
	function removeBrewersHandler() {
		setSelectedBrewer();
		setBrewerList([]);
		setFormValid("true");
		setShowTimer(false);
	}

	// Remove / dump all entries in the list
	function setUserTimerHandler(time) {
		setUserTimer(time);
	}

	// Snippet function to handle minutes conversion to date
	function addMinutes(date, minutes) {
		return new Date(date.getTime() + minutes * 60000);
	}

	function countdownTimerHandler() {
		if (countdownTimer) {
			setShowTimer(true);
		} else {
			setShowTimer(false);
		}
	}

	return (
		<Layout>
			<section className="">
				<OpeningContent />

				<div className="layout-grid">
					<div className="layout-item">
						<div className="board">
							<p className="board--message">
								<span>Who's round is it?</span>
							</p>
							<SelectedBrewer selectedBrewer={selectedBrewer} />
						</div>

						<CountdownTimer
							targetDate={countdownTimer}
							timerisVisible={showTimer}
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
