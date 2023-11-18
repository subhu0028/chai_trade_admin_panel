// BlogList.js
import React from "react";
import '../List.css';
import '../Main.css';


function BlogList({ blogs }) {
	return (
		<main>
			{blogs.length > 0 ? (
				<div className="grid">
					{blogs.map((blog) => (
						<article className="card product-item" key={blog._id}>
							<header className="card__header">
								<h1 className="product__title">{blog.authorName}</h1>
							</header>
							<div className="card__image">
								<img src={blog.authorAvatar} alt={blog.authorName} />
							</div>
							<div className="card__content">
								<h2 className="product__price">{blog.title}</h2>
								<p className="product__description">{blog.content}</p>
							</div>
							<div className="card__action">
								<a
									href={`/admin/edit-blog/${blog._id}?edit=true`}
									className="btn"
								>
									Edit
								</a>
								<form action="/admin/delete-blog" method="POST">
									<input type="hidden" value={blog._id} name="blogId" />
									<button className="btn" type="submit">
										Delete
									</button>
								</form>
							</div>
						</article>
					))}
				</div>
			) : (
				<h1>No Blogs Found!</h1>
			)}
		</main>
	);
}

export default BlogList;
