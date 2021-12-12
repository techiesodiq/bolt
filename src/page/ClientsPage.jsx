/** @format */

import React, {useEffect} from "react";
import ScrollTop from "../components/global-components/BackToTop";
import Footer from "../components/global-components/Footer";
import Layouts from "../components/global-components/Layouts";
import Clients from "../components/section-components/Clients";
import Connect from "../components/section-components/Connect";
import HeaderV3 from "../components/section-components/Header-v3";
import {sectionData} from "./../data/section.json";

const ClientsPage = () => {
	const data = sectionData.sectionTitle;
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Layouts pageTitle="Clients">
				<HeaderV3
					background={data.clients.background}
					title={data.clients.title}
					pageName={data.clients.pageName}
				/>
				<Clients />
				<Connect />
				<Footer />
				<ScrollTop />
			</Layouts>
		</>
	);
};

export default ClientsPage;
