// BlogForm.js
import React from "react";
import '../List.css';
import '../Main.css';
import '../Form.css';

function BlogForm({ editing, blog }) {
	return (
		<main>
			<form
				className="product-form"
				action={editing ? "edit-blog" : "add-blog"}
				method="post"
			>
				<div className="form-control">
					<label htmlFor="authorName">Author Name</label>
					<input
						type="text"
						name="authorName"
						id="authorName"
						defaultValue={editing ? blog.authorName : ""}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="authorAvatar">Author Avatar URL</label>
					<input
						type="text"
						name="authorAvatar"
						id="authorAvatar"
						defaultValue={editing ? blog.authorAvatar : ""}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						name="title"
						id="title"
						defaultValue={editing ? blog.title : ""}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="content">Content</label>
					<textarea
						name="content"
						id="content"
						rows="5"
						defaultValue={editing ? blog.content : ""}
					></textarea>
				</div>

				{editing && <input type="hidden" value={blog._id} name="blogId" />}
				<button type="submit">{editing ? "Update Blog" : "Add Blog"}</button>
			</form>
		</main>
	);
}

export default BlogForm;
