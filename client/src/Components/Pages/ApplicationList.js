// ApplicationList.js
import React, { useState, useEffect } from "react";
import '../Main.css';
import '../List.css';
import axios from "../../api/axiosConfig.js";

function ApplicationList() {


	const [applications, setApplications] = useState([]);
	useEffect(() => {
		axios.get("/application/getApplications").then((res) => setApplications(res.data.data));
	}, []);


	return (
		
		<main>
			{applications.length > 0 ? (
				<div className="grid">
					{applications.map((application) => (
						<article className="card product-item" key={application._id}>
							<header className="card__header">
								<h1 className="product__title">{application.userName}</h1>
							</header>
							<div className="card__content">
								<h4 className="product__price">{application.userEmail}</h4>
							</div>
							<div className="card__content">
								<p className="product__price">User ID: {application.userID}</p>
							</div>
							<div className="card__content">
								<p className="product__price">{application.country}</p>
							</div>
							<div className="card__content">
								<p className="product__price">
									Trading Experience: {application.tradingExperience}
								</p>
							</div>
							<div className="card__content">
								<p className="product__price">
									Trading Strategy: {application.tradingStrategy}
								</p>
							</div>
							<div className="card__content">
								<p className="product__price">
									Mentor Reason: {application.reasonMentor}
								</p>
							</div>
							<div className="card__image">
								<p className="product__price">
									Certificate: <a href={application.certificationPath}>link</a>
								</p>
							</div>
							<div className="card__action">
								<a
									href={`/admin/edit-application/${application._id}?edit=true`}
									className="btn"
								>
									Approve
								</a>
								<form action="/admin/delete-mentor" method="POST">
									<input
										type="hidden"
										value={application._id}
										name="applicationId"
									/>
									<button className="btn" type="submit">
										Delete
									</button>
								</form>
							</div>
						</article>
					))}
				</div>
			) : (
				<h1>No Applications Found!</h1>
			)}
		</main>
	);
}

export default ApplicationList;
