/** @format */

import React, {useEffect} from "react";
import ScrollTop from "../components/global-components/BackToTop";
import Footer from "../components/global-components/Footer";
import Layouts from "../components/global-components/Layouts";
import Connect from "../components/section-components/Connect";
import HeaderV3 from "../components/section-components/Header-v3";
import Admin from "../components/section-components/Admin";
import {sectionData} from "./../data/section.json";

const ServicePage = () => {
	const data = sectionData.sectionTitle;
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Layouts pageTitle="Service">
				<HeaderV3
					background={data.admin.background}
					title={data.admin.title}
					pageName={data.admin.pageName}
				/>
				<Admin />
				<Connect />
				<Footer />
				<ScrollTop />
			</Layouts>
		</>
	);
};

export default ServicePage;
