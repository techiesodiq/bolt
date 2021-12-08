/** @format */

import React, {useEffect} from "react";
import Footer from "../components/global-components/Footer";
import Layouts from "../components/global-components/Layouts";
import Connect from "../components/section-components/Connect";
import ContactInner from "../components/section-components/ContactInner";
import HeaderV3 from "../components/section-components/Header-v3";
import {sectionData} from "./../data/section.json";

const ContactPage = () => {
	let data = sectionData.sectionTitle;
	let mapData = sectionData.mapDescription;
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Layouts pageTitle="Contact Page">
			<HeaderV3
				background={data.contact.background}
				title={data.contact.title}
				pageName={data.contact.pageName}
			/>
			<ContactInner />
			{/* <Map let={mapData.let} lng={mapData.lng} zoom={mapData.zoom} mapLetLng={mapData.mapLetLng.center} /> */}
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11049.489287291462!2d-79.79212737592572!3d43.666581564782874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b14e5367a9a7f%3A0x32c7b8cb0bccc7ae!2s88%20Speedwell%20St%2C%20Brampton%2C%20ON%20L6X%200R8%2C%20Canada!5e0!3m2!1sen!2sng!4v1638933024623!5m2!1sen!2sng"
				title={data.contact.title}
				width="100%"
				height="600"
				style={{border: "0"}}
				allowfullscreen=""
				loading="lazy"
			></iframe>
			<Connect />
			<Footer />
		</Layouts>
	);
};

export default ContactPage;
