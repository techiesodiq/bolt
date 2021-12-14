/** @format */

import React from "react";
import {Link, useParams} from "react-router-dom";
import {sectionData} from "./../../data/section.json";

const ServiceDetailsInner = () => {
	const data = sectionData.serviceDetails;
	const singleServiceData = sectionData.serviceV2.singleService;
	const {id} = useParams();
	return (
		<>
			{/* <!-- start service details area --> */}
			<section className="service-detail pt-120">
				<div className="container">
					<div className="row">
						{/* <!-- start main content area --> */}
						{singleServiceData
							.filter((singleData) => singleData.id === id)
							.map((service, index) => (
								<div key={index} className="col-lg-8 order-1 order-lg-0">
									<div className="details-inner">
										<img
											src={service.image}
											className="img-fluid wow fadeInUp"
											alt="Service"
											data-wow-duration="1.5s"
											data-wow-delay=".3s"
										/>
										<h3
											className="wow fadeInUp"
											data-wow-duration="1.5s"
											data-wow-delay=".3s"
										>
											{service.title}
										</h3>
										<p
											className="wow fadeInUp"
											data-wow-duration="1.5s"
											data-wow-delay=".3s"
										>
											{service.description}
										</p>
										<div
											className="details-bottom wow fadeInUp"
											data-wow-duration="1.5s"
											data-wow-delay=".3s"
										>
											<img
												src={service.image}
												className="img-fluid"
												alt="Service"
											/>
											{/* <p>{data.content2}</p>
                                    <p>{data.content3}</p>
                                    <p>{data.content4}</p> */}
										</div>
									</div>
								</div>
							))}

						{/* <!-- end main content area --> */}

						{/* <!-- start detail sidebar area --> */}
						<div className="col-lg-4 col-md-8 offset-md-2 col-sm-12 order-0 order-lg-1 offset-lg-0">
							<div
								className="single-item wow fadeInUp"
								data-wow-duration="1.5s"
								data-wow-delay=".3s"
							>
								<div className="item-title all">
									<h4>{data.serviceFeature.title}</h4>
								</div>
								<ul>
									{data.serviceFeature.singleService.map((item, i) => {
										return (
											<li key={i}>
												<Link to={item.serviceLink}>
													<p>{item.serviceName}</p>
												</Link>
											</li>
										);
									})}
								</ul>
							</div>
							<div
								className="single-item time wow fadeInUp"
								data-wow-duration="1.5s"
								data-wow-delay=".3s"
							>
								<div className="item-title">
									<h4>{data.openingHours.title}</h4>
								</div>
								<ul>
									{data.openingHours.days.map((item, i) => {
										return (
											<li key={i}>
												<p>{item.dayName}</p>
												<p>{item.dayTime}</p>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						{/* <!-- end detail sidebar area --> */}
					</div>
				</div>
			</section>
			{/* <!-- end service details area --> */}
		</>
	);
};

export default ServiceDetailsInner;
