/** @format */

import React, {useEffect} from "react";
import ScrollTop from "../components/global-components/BackToTop";
import Footer from "../components/global-components/Footer";
import Layouts from "../components/global-components/Layouts";
import Connect from "../components/section-components/Connect";
import HeaderV3 from "../components/section-components/Header-v3";
import PrivacyPolicy from "../components/section-components/PrivacyPolicy";
import {sectionData} from "./../data/section.json";

const ClientsPage = () => {
	const data = sectionData.sectionTitle;
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Layouts pageTitle="Privacy Policy">
				<HeaderV3
					background={data.privacyPolicy.background}
					title={data.privacyPolicy.title}
					pageName={data.privacyPolicy.pageName}
				/>
				<PrivacyPolicy />
				<Connect />
				<Footer />
				<ScrollTop />
			</Layouts>
		</>
	);
};

export default ClientsPage;
