/** @format */

import React, {useEffect} from "react";
import Footer from "../components/global-components/Footer";
import Layouts from "../components/global-components/Layouts";
import ErrorInner from "../components/section-components/Error";

const ErrorPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<Layouts pageTitle="Error">
				<ErrorInner />
				<Footer />
			</Layouts>
		</div>
	);
};

export default ErrorPage;
