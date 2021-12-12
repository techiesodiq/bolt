/** @format */

import React from "react";
import {sectionData} from "../../data/section.json";
import SectionTitle from "../global-components/SectionTitle";

const Clients = () => {
	let data = sectionData.clients;
	let publicUrl = process.env.PUBLIC_URL + "/";
	return (
		<div>
			{/* <!-- start client area --> */}
			<section
				className="client index2"
				style={{
					background: `url(${publicUrl + data.background})`,
					backgroundSize: "cover",
				}}
			>
				<div className="overlay pt-120">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 offset-lg-2">
								<SectionTitle
									subtitle={data.sectionHeading.subtitle}
									title={data.sectionHeading.title}
									titleContent={data.sectionHeading.content}
								/>
							</div>
						</div>
						<div className="row justify-content-center">
							{data.clientsDetails.map((item, i) => {
								return (
									<div className="col-md-6 col-lg-4" key={i}>
										{/* <!-- item 1 --> */}
										<div
											className={`item-wrapper swiper-slide wow ${
												item.animation
											} mb-30 ${i === 1 ? "swiper-slide-active" : ""}`}
											data-wow-duration="1.5s"
											data-wow-delay=".4s"
											style={{display: "flex"}}
										>
											<div
												className="item text-center"
												style={{alignSelf: "stretch"}}
											>
												<img
													src={item.image}
													alt="Clients' Logo"
													style={{maxWidth: "160px", maxHeight: "80px"}}
												/>

												<h3>{item.name}</h3>
												<p>{item.details}</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>
			{/* <!-- end client area --> */}
		</div>
	);
};

export default Clients;
