/** @format */

import React, {Component} from "react";
import Footer from "../components/global-components/Footer";
import Layouts from "../components/global-components/Layouts";
import AboutV2 from "../components/section-components/About-v2";
import Connect from "../components/section-components/Connect";
import Contact from "../components/section-components/Contact";
import CountV2 from "../components/section-components/Count-v2";
import HeaderV2 from "../components/section-components/Header-v2";
import HealthAndSafety from "../components/section-components/HealthAndSafety";
import NewsLetter from "../components/section-components/NewsLetter";
import Partner from "../components/section-components/Partner";
import ServiceV2 from "../components/section-components/Service-v2";

export default class HomeV2 extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<Layouts pageTitle="Home-v2">
				<HeaderV2 />
				<AboutV2 />
				<NewsLetter />
				<ServiceV2 />
				<br />
				<br />
				<br />
				<CountV2 />
				<HealthAndSafety />
				<Partner />
				<Contact />
				<Connect />
				<Footer />
			</Layouts>
		);
	}
}
