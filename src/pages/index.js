import React from "react";
import { useState } from "react";

import Layout from "../components/layout/Layout";
import OpeningContent from "../components/OpeningContent";
import BrewerList from "../components/BrewerList";
import AddBrewerForm from "../components/AddBrewerForm";
// import SetCountdownForm from "../components/SetCountdownForm";
import BrewerActions from "../components/BrewerActions";

// import Cookies from "universal-cookie";

function IndexPage() {
	const [brewerList, setBrewerList] = useState([]);
	// TODO - Set the selected name on button press
	const [selectedBrewer, setSelectedBrewer] = useState();

	// Set cookies
	// const cookies = new Cookies();

	function addBrewerHandler(brewerName) {
		// get the current object
		// get the total numberin the object
		// assign id

		const data = {
			name: brewerName,
		};

		setBrewerList((brewerList) => [...brewerList, data]);

		// TODO - Make sure the most recent name is added
		// cookies.set("BrewerList", JSON.stringify(brewerList), { path: "/" });
	}

	function removeBrewerHandler(key) {
		const newBrewers = brewerList.filter((_, index) => index !== key);

		setBrewerList(newBrewers);

		// TODO - Update cookies
		// cookies.set("BrewerList", JSON.stringify(newBrewers), { path: "/" });
	}

	return (
		<Layout>
			<section className="">
				<div className="wrap">
					<div className="brew--action">
						<div className="countdown">
							<p className="countdown--text">Next Brewer in:</p>
							<p className="countdown--timer">
								<span>0</span>
							</p>
						</div>

						<OpeningContent />

						<BrewerList
							list={brewerList}
							onRemoveBrewer={removeBrewerHandler}
						/>

						<AddBrewerForm onAddBrewer={addBrewerHandler} />

						{/* <SetCountdownForm /> */}

						<BrewerActions />
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default IndexPage;
