/** @format */

import React from "react";
import ReactStars from "react-rating-stars-component";
import {sectionData} from "../../data/section.json";
import SectionTitle from "../global-components/SectionTitle";

const secondExample = {
	size: 20,
	color: "black",
	activeColor: "#ecc026",
	count: 5,
	value: 7.5,
	a11y: true,
	isHalf: true,
	emptyIcon: <i className="far fa-star" />,
	halfIcon: <i className="fa fa-star-half-alt" />,
	filledIcon: <i className="fa fa-star" />,
	onChange: (newValue) => {
		//   console.log(`Example 2: new value is ${newValue}`);
	},
};
const ClientV2 = () => {
	let data = sectionData.client;
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
							{data.clientReview.map((item, i) => {
								return (
									<div className="col-md-6 col-lg-4" key={i}>
										{/* <!-- item 1 --> */}
										<div
											className={`item-wrapper swiper-slide wow ${
												item.animation
											} mb-30 ${i === 1 ? "swiper-slide-active" : ""}`}
											data-wow-duration="1.5s"
											data-wow-delay=".4s"
										>
											<div className="item text-center">
												<span className="quote"></span>
												<h3>{item.name}</h3>
												<p>{item.comment}</p>
												<ul className="d-flex justify-content-center">
													<div className="review-stars">
														<ReactStars
															{...secondExample}
															value={item.rating}
														/>
													</div>
												</ul>
												<div className="client-img">
													<div className="border-style">
														<img
															src={item.image}
															style={{objectFit: "cover"}}
															className="img-fluid"
															alt="Client"
														/>
													</div>
												</div>
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

export default ClientV2;
