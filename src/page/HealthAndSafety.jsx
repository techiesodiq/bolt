/** @format */

import React, {useEffect} from "react";
import ScrollTop from "../components/global-components/BackToTop";
import Footer from "../components/global-components/Footer";
import Layouts from "../components/global-components/Layouts";
import Connect from "../components/section-components/Connect";
import Count from "../components/section-components/Count";
import HeaderV3 from "../components/section-components/Header-v3";
import HealthAndSafety from "../components/section-components/HealthAndSafety";
import Service from "../components/section-components/Service-v2";
import {sectionData} from "./../data/section.json";
const AboutPage = () => {
	const data = sectionData.sectionTitle;
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Layouts pageTitle="About">
				<HeaderV3
					background={data.healthAndSafety.background}
					title={data.healthAndSafety.title}
					pageName={data.healthAndSafety.pageName}
				/>
				<HealthAndSafety />
				<Count />
				<Service />
				<Connect />
				<Footer />
				<ScrollTop />
			</Layouts>
		</>
	);
};

export default AboutPage;
