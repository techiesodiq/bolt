/** @format */

import React from "react";
import {sectionData} from "./../../data/section.json";

const AboutV2 = () => {
	let data = sectionData.healthAndSafety;
	console.log(data);
	return (
		<>
			{/* <!-- start about area --> */}
			<section className="about p-120 index2">
				<div className="container">
					<div className="row align-items-center justify-content-around">
						<div className="col-lg-6 align-items-center">
							<div
								className="all-img wow fadeInRight"
								data-wow-duration="1.5s"
								data-wow-delay=".3s"
							>
								<div className="bg bg1">
									<img
										style={{objectFit: "cover"}}
										src={data.safetyImage}
										className="img-fluid"
										alt="About "
									/>
								</div>
								<div className="shape"></div>
							</div>
						</div>
						<div className="col-lg-6 align-items-center text-justify">
							<div
								className="section-title wow fadeInLeft"
								data-wow-duration="1.5s"
								data-wow-delay=".3s"
							>
								<h6>{data.subtitle}</h6>
								<h2>
									<span>{data.title}</span>
								</h2>
							</div>
							<div
								className="text-part wow fadeInLeft"
								data-wow-duration="1.5s"
								data-wow-delay=".3s"
							>
								<p>{data.content1}</p>
								<br />
								<p>{data.content2}</p>
								<br />
								{/* <p>{data.content3}</p> */}
							</div>
						</div>
					</div>
					<br />
					<div className="row align-items-center flex-column-reverse flex-lg-row">
						<div className="col-lg-6 align-items-center text-justify">
							<div
								className="section-title wow fadeInLeft"
								data-wow-duration="1.5s"
								data-wow-delay=".3s"
							>
								<h6>{data.subtitle}</h6>
								<h2>
									<span>{data.industryInvolvementTitle}</span>
								</h2>
							</div>
							<div
								className="text-part wow fadeInLeft"
								data-wow-duration="1.5s"
								data-wow-delay=".3s"
							>
								<p>{data.industryInvolvement}</p>
								<br />
								<p>{data.content2}</p>
								<br />
								{/* <p>{data.content3}</p> */}
							</div>
						</div>
						<div className="col-lg-2"></div>
						<div className="col-lg-4 align-items-center">
							<div
								className="all-img wow fadeInRight"
								data-wow-duration="1.5s"
								data-wow-delay=".3s"
								// style={{marginLeft: "160px"}}
							>
								<div className="bg bg1">
									<img
										style={{objectFit: "cover"}}
										src={data.engineer}
										className="img-fluid"
										alt="About "
									/>
								</div>
								<div className="shape"></div>
							</div>
						</div>
					</div>
					<br />
					<div className="row align-items-center justify-content-between">
						<div className="col-lg-6 align-items-center">
							<div
								className="all-img wow fadeInRight"
								data-wow-duration="1.5s"
								data-wow-delay=".3s"
							>
								<div className="bg bg1">
									<img
										style={{objectFit: "cover"}}
										src={data.femaleEngineer}
										className="img-fluid"
										alt="About "
									/>
								</div>
								<div className="shape"></div>
							</div>
						</div>
						<div className="col-lg-6 align-items-center text-justify">
							<div
								className="section-title wow fadeInLeft"
								data-wow-duration="1.5s"
								data-wow-delay=".3s"
							>
								<h6>{data.subtitle}</h6>
								<h2>
									<span>{data.safetyInitiativesTitle}</span>
								</h2>
							</div>
							<div
								className="text-part wow fadeInLeft"
								data-wow-duration="1.5s"
								data-wow-delay=".3s"
							>
								<p>{data.safetyInitiatives}</p>
								<br />
								<p>{data.content2}</p>
								<br />
								{/* <p>{data.content3}</p> */}
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- end about area --> */}
		</>
	);
};

export default AboutV2;
