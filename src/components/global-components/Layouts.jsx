/** @format */

import {React} from "react";
const Layouts = (props) => {
	return (
		<>
			<title>
				{" "}
				{props.pageTitle} | Bolt Telecommunications Official Website
			</title>
			<div>{props.children}</div>
		</>
	);
};
export default Layouts;
