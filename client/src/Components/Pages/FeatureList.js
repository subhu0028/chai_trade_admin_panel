// FeatureList.js
import React, { useState, useEffect } from "react";
import '../Main.css';
import '../List.css';

import axios from "../../api/axiosConfig.js";

function FeatureList() {

	const [features, setFeatures] = useState([]);
	useEffect(() => {
		axios.get("/features/getFeatures").then((res) => setFeatures(res.data.data));
	}, []);

	const [searchText, setSearchText] = useState("");

	const handleSearchChange = (e) => {
		setSearchText(e.target.value.toLowerCase());
	};

	return (
		<main>
			<input
				id="searchbar"
				type="text"
				name="search"
				placeholder="Search.."
				value={searchText}
				onChange={handleSearchChange}
			/>

			{features.length > 0 ? (
				<div className="grid">
					{features.map((feature) => {
						const featureText =
							feature.mentorName + feature.title + feature.content;
						if (featureText.toLowerCase().includes(searchText)) {
							return (
								<article className="card product-item" key={feature._id}>
									<header className="card__header">
										<h1 className="product__title">{feature.mentorName}</h1>
									</header>
									<div className="card__image">
										<img src={feature.mentorImage} alt={feature.mentorName} />
									</div>
									<div className="card__content">
										<h4 className="product__description">{feature.title}</h4>
										<p className="product__description">{feature.content}</p>
									</div>
									<div className="card__action">
										<a
											href={`/admin/edit-feature/${feature._id}?edit=true`}
											className="btn"
										>
											Edit
										</a>
										<form action="/admin/delete-feature" method="POST">
											<input
												type="hidden"
												value={feature._id}
												name="featureId"
											/>
											<button className="btn" type="submit">
												Delete
											</button>
										</form>
									</div>
								</article>
							);
						}
						return null;
					})}
				</div>
			) : (
				<h1>No features Found!</h1>
			)}
		</main>
	);
}

export default FeatureList;
