/** @format */

import React, {useEffect} from "react";
import ScrollTop from "../components/global-components/BackToTop";
import Footer from "../components/global-components/Footer";
import Layouts from "../components/global-components/Layouts";
import About from "../components/section-components/About-v2";
import Client from "../components/section-components/Client";
import Connect from "../components/section-components/Connect";
import Count from "../components/section-components/Count";
import HeaderV3 from "../components/section-components/Header-v3";
import Service from "../components/section-components/Service-v2";
import {sectionData} from "./../data/section.json";
const AboutPage = () => {
	const data = sectionData.sectionTitle;
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Layouts pageTitle="Abouts">
				<HeaderV3
					background={data.about.background}
					title={data.about.title}
					pageName={data.about.pageName}
				/>
				<About />
				<Count />
				<Service />
				<Client />
				<Connect />
				<Footer />
				<ScrollTop />
			</Layouts>
		</>
	);
};

export default AboutPage;
