import Header from "./Header";

import React from "react";

function Layout({ children }) {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
}

export default Layout;
