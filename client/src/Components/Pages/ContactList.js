// ContactList.js
import React, { useState, useEffect } from "react";
import '../Main.css';
import '../List.css';
import axios from "../../api/axiosConfig.js";

function ContactList() {


	const [contacts, setContacts] = useState([]);
	useEffect(() => {
		axios.get("/contacts/getContacts").then((res) => setContacts(res.data.data));
	}, []);



	return (
		<main>
			{contacts.length > 0 ? (
				<div className="grid">
					{contacts.map((contact) => (
						<article className="card product-item" key={contact._id}>
							<header className="card__header">
								<h1 className="product__title">{contact.authorName}</h1>
							</header>
							<h4 className="product__title">{contact.email}</h4>
							<div className="card__content">
								<h4 className="product__description">{contact.title}</h4>
								<p className="product__description">{contact.content}</p>
							</div>
							<div className="card__action">
								<a
									href={`/admin/edit-contact/${contact._id}?edit=true`}
									className="btn"
								>
									Reply
								</a>
								<form action="/admin/delete-contact" method="POST">
									<input type="hidden" value={contact._id} name="contactId" />
									<button className="btn" type="submit">
										Dis-miss
									</button>
								</form>
							</div>
						</article>
					))}
				</div>
			) : (
				<h1>No Queries Found!</h1>
			)}
		</main>
	);
}

export default ContactList;
