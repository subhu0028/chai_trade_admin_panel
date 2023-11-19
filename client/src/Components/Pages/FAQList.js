// FAQList.js
import React, { useState, useEffect } from "react";
import '../Main.css';
import '../List.css';

import axios from "../../api/axiosConfig.js";

function FAQList() {

	const [faqs, setFaqs] = useState([]);
	useEffect(() => {
		axios.get("/faqs/getFaqs").then((res) => setFaqs(res.data.data));
	}, []);


	return (
		<main>
			{faqs.length > 0 ? (
				<div className="grid">
					{faqs.map((faq) => (
						<article className="card product-item" key={faq._id}>
							<div className="card__content">
								<h2 className="product__price">{faq.question}</h2>
								<p className="product__description">{faq.answer}</p>
							</div>
							<div className="card__action">
								<a
									href={`/admin/edit-faq/${faq._id}?edit=true`}
									className="btn"
								>
									Edit
								</a>
								<form action="/admin/delete-faq" method="POST">
									<input type="hidden" value={faq._id} name="faqId" />
									<button className="btn" type="submit">
										Delete
									</button>
								</form>
							</div>
						</article>
					))}
				</div>
			) : (
				<h1>No FAQs Found!</h1>
			)}
		</main>
	);
}

export default FAQList;
