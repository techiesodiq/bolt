/** @format */

import React, {useState} from "react";
import SectionTitle from "../global-components/SectionTitle";
import {sectionData} from "./../../data/section.json";
import AdminModal from "./AdminModal";

const ServiceV2 = () => {
	const [openModal, setOpenModal] = useState(false);
	let data = sectionData.admin;
	let publicUrl = process.env.PUBLIC_URL + "/";
	return (
		<>
			{/* <!-- start offer area --> */}
			<section className="offer pt-120 index2 pb-90">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 offset-lg-2">
							<SectionTitle
								subtitle={data.adminSectionHeading.subtitle}
								title={data.adminSectionHeading.title}
								titleContent={data.adminSectionHeading.content}
							/>
						</div>
						<div className="col-lg-12">
							<div className="row justify-content-center">
								<div className="col-lg-4 col-md-6">
									<div
										className={`item wow  ${data.count.animation}`}
										style={{background: `url(${publicUrl + data.count.image})`}}
										data-img={`${data.count.image}`}
										data-wow-duration="1.5s"
										data-wow-delay=".3s"
									>
										<div className="overlay">
											<div className="icon">
												<i className={data.count.icon}></i>
											</div>
											<span className="number">0</span>
											<h3>{data.count.title}</h3>
											<h3>{data.count.number}</h3>
											{/* <ul>
														{item.feature.map((item, i) => {
															return <li key={i}>{item}</li>;
														})}
													</ul> */}
											<button
												type="button"
												data-toggle="modal"
												data-target="#exampleModalLong"
												className="btn-style"
												onClick={() => {
													setOpenModal(true);
												}}
											>
												<span>Edit </span>
											</button>

											{openModal && <AdminModal closeModal={setOpenModal} />}
										</div>
									</div>
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
