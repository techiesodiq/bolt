/** @format */

import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AboutPage from "../../page/AboutPage";
import BlogDetails from "../../page/BlogDetails";
import ContactPage from "../../page/ContactPage";
import ErrorPage from "../../page/Error.jsx";
import FTTBPage from "../../page/FTTBPage";
import FTTCPage from "../../page/FTTCPage";
import FTTHPage from "../../page/FTTHPage";
import FTTRPage from "../../page/FTTRPage";
import HomeV2 from "../../page/Home-v2";
import InstallationAndDesignSolution from "../../page/InstallationAndDesignSolution";
import PricingPage from "../../page/PricingPage";
import ProjectPage from "../../page/ProjectPage";
import ServiceDetails from "../../page/ServiceDetails";
import ServicePage from "../../page/ServicePage";
import TeamDetails from "../../page/TeamDetails";
import TeamPage from "../../page/TeamPage";

function AppRoute() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={HomeV2} />
				<Route path="/about" exact component={AboutPage} />
				<Route path="/service" exact component={ServicePage} />
				<Route path="/service-details" exact component={ServiceDetails} />
				<Route path="/fiber-to-the-home" exact component={FTTHPage} />
				<Route path="/fiber-to-the-building" exact component={FTTBPage} />
				<Route path="/fiber-to-the-curb" exact component={FTTCPage} />
				<Route path="/fiber-to-the-room" exact component={FTTRPage} />
				<Route
					path="/installation-and-design-solution"
					exact
					component={InstallationAndDesignSolution}
				/>
				<Route path="/project" exact component={ProjectPage} />
				<Route path="/team" exact component={TeamPage} />
				<Route path="/team-details" exact component={TeamDetails} />
				<Route path="/pricing" exact component={PricingPage} />
				<Route path="/contact" exact component={ContactPage} />
				<Route path="/blog-details" exact component={BlogDetails} />
				<Route path="*" exact component={ErrorPage} />
			</Switch>
		</BrowserRouter>
	);
}
export default AppRoute;
