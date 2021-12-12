/** @format */

import React from "react";
import SectionTitle from "../global-components/SectionTitle";
import {sectionData} from "./../../data/section.json";

const ServiceV2 = () => {
	let data = sectionData.privacyPolicy;
	const section1Data = data.policyDetails.section1;
	const section2Data = data.policyDetails.section2;
	const section3Data = data.policyDetails.section3;
	const section4Data = data.policyDetails.section4;
	const section5Data = data.policyDetails.section5;
	const section6Data = data.policyDetails.section6;
	const section7Data = data.policyDetails.section7;
	const section8Data = data.policyDetails.section8;
	const section9Data = data.policyDetails.section9;
	let publicUrl = process.env.PUBLIC_URL + "/";
	return (
		<>
			{/* <!-- start offer area --> */}
			<section className="offer pt-120 index2 pb-90">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 offset-lg-2">
							<SectionTitle
								subtitle={data.sectionHeading.subtitle}
								title={data.sectionHeading.title}
								titleContent={data.sectionHeading.content}
							/>
						</div>
						<div className="col-lg-12">
							<div className="row justify-content-center mb-4">
								<div className="col-lg-10 col-md-10 col-sm-12">
									<h5 className="mb-2">{section1Data.header}</h5>
									<p className="mb-2">{section1Data.paragraph1}</p>
									<p>{section1Data.paragraph2}</p>
								</div>
							</div>
							<div className="row justify-content-center mb-4">
								<div className="col-lg-10 col-md-10 col-sm-12">
									<h5 className="mb-2">{section2Data.header}</h5>
									<p className="mb-2">{section2Data.paragraph1}</p>
									<p>{section2Data.paragraph2}</p>
								</div>
							</div>
							<div className="row justify-content-center mb-4">
								<div className="col-lg-10 col-md-10 col-sm-12">
									<h5 className="mb-2">{section3Data.header}</h5>
									<p className="mb-2">{section3Data.paragraph1}</p>
								</div>
							</div>
							<div className="row justify-content-center mb-4">
								<div className="col-lg-10 col-md-10 col-sm-12">
									<h5 className="mb-2">{section4Data.header}</h5>
									<p>{section4Data.paragraph1}</p>
								</div>
							</div>
							<div className="row justify-content-center mb-4">
								<div className="col-lg-10 col-md-10 col-sm-12">
									<h5 className="mb-2">{section5Data.header}</h5>
									<p className="mb-2">{section5Data.paragraph1}</p>
									<p>{section5Data.paragraph2}</p>
								</div>
							</div>
							<div className="row justify-content-center mb-4">
								<div className="col-lg-10 col-md-10 col-sm-12">
									<h5 className="mb-2">{section6Data.header}</h5>
									<p>{section6Data.paragraph1}</p>
								</div>
							</div>
							<div className="row justify-content-center mb-4">
								<div className="col-lg-10 col-md-10 col-sm-12">
									<h5 className="mb-2">{section7Data.header}</h5>
									<p className="mb-2">{section7Data.paragraph1}</p>
									<p className="mb-2">{section7Data.paragraph2.introduction}</p>
									<p className="mb-2 pl-4">
										{section7Data.paragraph2.list.map((item, i) => {
											return (
												<ul key={i}>
													<li style={{listStyleType: "square"}}>{item}</li>
												</ul>
											);
										})}
									</p>
									<p>{section7Data.paragraph2.conclusion}</p>
								</div>
							</div>
							<div className="row justify-content-center mb-4">
								<div className="col-lg-10 col-md-10 col-sm-12">
									<h5 className="mb-2">{section1Data.header}</h5>
									<p>{section8Data.paragraph1}</p>
								</div>
							</div>
							<div className="row justify-content-center">
								<div className="col-lg-10 col-md-10 col-sm-12">
									<h5 className="mb-2">{section1Data.header}</h5>
									<p>{section9Data.paragraph1}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- end offer area --> */}
		</>
	);
};

export default ServiceV2;
