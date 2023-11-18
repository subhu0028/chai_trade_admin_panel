// UserList.js
import React, { useState, useEffect } from "react";
import "../Main.css";
import "../List.css";
import axios from "../../api/axiosConfig.js";

function UserList() {
	const [searchQuery, setSearchQuery] = useState([]);

	const handleSearch = (e) => {
		setSearchQuery(e.target.value.toLowerCase());
	};

	const [users, setUsers] = useState([]);
	useEffect(() => {
		axios.get("/user/getUsers").then((res) => setUsers(res.data.data));
	}, []);

	return (
		<main>
			<input
				id="searchbar"
				type="text"
				name="search"
				placeholder="Search users.."
				onChange={handleSearch}
			/>

			{users.length > 0 ? (
				<div className="grid">
					{users.map((user) => (
						<article className="card product-item users" key={user._id}>
							<header className="card__header">
								<h1 className="product__title">{user.userName}</h1>
							</header>
							<div className="card__content">
								<h4 className="product__price">{user.email}</h4>
								{/* Uncomment the following code block if you want to display the password */}
								{/* 
                                        <p className="product__description">
                                        {user.password}
                                        </p>
                                        */}
							</div>
							<div className="card__action">
								<a
									href={`/admin/edit-user/${user._id}?edit=true`}
									className="btn"
								>
									Edit
								</a>
								<form action="/admin/delete-user" method="POST">
									<input type="hidden" value={user._id} name="userId" />
									<button className="btn" type="submit">
										Delete
									</button>
								</form>
							</div>
						</article>
					))}
				</div>
			) : (
				<h1>No Users Found!</h1>
			)}
		</main>
	);
}

export default UserList;
