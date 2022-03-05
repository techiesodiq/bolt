/** @format */

import React from "react";

const AdminModal = ({closeModal}) => {
	return (
		<div
		// style={{
		// 	width: "100vw",
		// 	height: "100vh",
		// 	backgroundColor: "rgba(200, 200, 200)",
		// 	position: "fixed",
		// 	display: "flex",
		// 	justifyContent: "center",
		// 	alignItems: "center",
		// }}
		>
			<form
			// style={{
			// 	width: "500px",
			// 	height: "500px",
			// 	borderRadius: "12px",
			// 	backgroundColor: "white",
			// 	boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
			// 	display: "flex",
			// 	flexDirection: "column",
			// 	padding: "25px",
			// }}
			>
				<div>
					<button>X</button>
				</div>
				<header>
					<h6>Kindly edit the form below</h6>
				</header>
				<main>
					<div className="form-group">
						<input placeholder="Title" />
					</div>
					<div className="form-group">
						<input placeholder="Number of Splicing" />
					</div>
				</main>
				<footer>
					<button
						onClick={() => {
							closeModal(false);
						}}
						id="cancelBtn"
					>
						Cancel
					</button>
				</footer>
			</form>
		</div>
	);
};

export default AdminModal;
