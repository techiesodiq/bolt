/** @format */

import React, {useEffect} from "react";
import ScrollTop from "../components/global-components/BackToTop";
import Footer from "../components/global-components/Footer";
import Layouts from "../components/global-components/Layouts";
import Connect from "../components/section-components/Connect";
import HeaderV3 from "../components/section-components/Header-v3";
import Testimonials from "../components/section-components/Testimonials";
import {sectionData} from "./../data/section.json";

const ServicePage = () => {
	const data = sectionData.sectionTitle;
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Layouts pageTitle="Testimonials">
				<HeaderV3
					background={data.testimonials.background}
					title={data.testimonials.title}
					pageName={data.testimonials.pageName}
				/>
				<Testimonials />
				<Connect />
				<Footer />
				<ScrollTop />
			</Layouts>
		</>
	);
};

export default ServicePage;
