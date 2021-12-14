/** @format */

import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import Footer from "../components/global-components/Footer";
import Connect from "../components/section-components/Connect";
import HeaderV3 from "../components/section-components/Header-v3";
import ServiceDetailsInner from "../components/Service-components/Service-details";
import {sectionData} from "./../data/section.json";

const ServiceDetails = () => {
	const data = sectionData.sectionTitle;
	const singleServiceData = sectionData.serviceV2.singleService;
	const {id} = useParams();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			{singleServiceData
				.filter((singleData) => singleData.id === id)
				.map((service, index) => (
					<>
						<HeaderV3
							background={data.serviceDetails.background}
							title={service.title}
							pageName={data.serviceDetails.pageName}
						/>
						<ServiceDetailsInner />
						<Connect />
						<Footer />
					</>
				))}
		</>
	);
};

export default ServiceDetails;
