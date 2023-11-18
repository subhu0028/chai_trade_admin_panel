// MentorList.js
import React, { useState, useEffect } from "react";
import '../Main.css';
import '../List.css';
import axios from "../../api/axiosConfig.js";

function MentorList() {

	const [mentors, setMentors] = useState([]);
	useEffect(() => {
		axios.get("/mentor/getMentors").then((res) => setMentors(res.data.data));
	}, []);

	return (
		<main>
			{mentors.length > 0 ? (
				<div className="grid">
					{mentors.map((mentor) => (
						<article className="card product-item" key={mentor._id}>
							<header className="card__header">
								<h1 className="product__title">{mentor.mentorName}</h1>
							</header>
							<div className="card__image">
								<img src={mentor.mentorImage} alt={mentor.mentorName} />
							</div>
							<div className="card__content">
								<h2 className="product__price">{mentor.email}</h2>
							</div>
							<div className="card__action">
								<a
									href={`/admin/edit-mentor/${mentor._id}?edit=true`}
									className="btn"
								>
									Edit
								</a>
								<form action="/admin/delete-mentor" method="POST">
									<input type="hidden" value={mentor._id} name="mentorId" />
									<button className="btn" type="submit">
										Delete
									</button>
								</form>
							</div>
						</article>
					))}
				</div>
			) : (
				<h1>No Mentors Found!</h1>
			)}
		</main>
	);
}

export default MentorList;
