/** @format */

import {collection, getDocs} from "firebase/firestore";
import React, {useEffect, useState} from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import {db} from "../../firebase-config";
import {sectionData} from "./../../data/section.json";

const CountV2 = () => {
	let data = sectionData.countV2;
	let publicUrl = process.env.PUBLIC_URL + "/";

	const [didViewCountUp, setDidViewCountUp] = useState(false);
	const [users, setUsers] = useState([]);
	const usersCollectionRef = collection(db, "users");

	const getUsers = async () => {
		const data = await getDocs(usersCollectionRef);
		setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
	};

	useEffect(() => {
		getUsers();
	}, []);

	const onVisibilityChange = (isVisible) => {
		if (isVisible) {
			setDidViewCountUp(true);
		}
	};
	return (
		<>
			{/* <!-- start count area --> */}
			<section className="count index2">
				<div className="container">
					<div
						className="bg wow fadeInUp"
						data-wow-duration="1.5s"
						data-wow-delay=".3s"
					>
						<div
							className="overlay p-100"
							style={{
								background: `url(${publicUrl + data.background})`,
								backgroundSize: "cover",
							}}
						>
							<div className="row">
								{users.map((item, i) => {
									return (
										<div
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
											}}
											className="col-lg-12 "
											key={i}
										>
											<div className="item">
												<div className="icon">
													<i className={item.icon}></i>
												</div>
												<div className="text">
													<VisibilitySensor
														onChange={onVisibilityChange}
														offset={{top: 10}}
														delayedCall
													>
														<CountUp
															className="counter"
															end={didViewCountUp ? item.number : 0}
														/>
													</VisibilitySensor>
													<h6>{item.title}</h6>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- end count area --> */}
		</>
	);
};

export default CountV2;
