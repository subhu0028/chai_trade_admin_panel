// NavigationHeader.js
import React from "react";
import './Main.css';

function NavigationHeader({ path }) {
	return (
		<header className="main-header">
			<nav className="main-header__nav">
				<ul className="main-header__item-list">
					<li className="main-header__item">
						<a className={path === "/users" ? "active" : ""} href="/users">
							Admin
						</a>
					</li>
					{/* Add other navigation items following the same structure */}
					<li className="main-header__item">
						<a className={path === "/mentors" ? "active" : ""} href="/mentors">
							Mentors
						</a>
					</li>
					<li className="main-header__item">
						<a className={path === "/users" ? "active" : ""} href="/users">
							Users
						</a>
					</li>
					<li className="main-header__item">
						<a className={path === "/add-faq" ? "active" : ""} href="/add-faq">
							Add Faq
						</a>
					</li>
					<li className="main-header__item">
						<a className={path === "/faqs" ? "active" : ""} href="/faqs">
							FAQS
						</a>
					</li>
					<li className="main-header__item">
						<a
							className={path === "/features" ? "active" : ""}
							href="/features"
						>
							Features
						</a>
					</li>
					<li className="main-header__item">
						<a className={path === "/blogs" ? "active" : ""} href="/blogs">
							Blogs
						</a>
					</li>
					<li className="main-header__item">
						<a
							className={path === "/applications" ? "active" : ""}
							href="/applications"
						>
							Applications
						</a>
					</li>
					<li className="main-header__item">
						<a
							className={path === "/contacts" ? "active" : ""}
							href="/contacts"
						>
							Queries
						</a>
					</li>
					<li className="main-header__item">
						<a
							className={path === "/add-chart" ? "active" : ""}
							href="/add-chart"
						>
							Add Chart
						</a>
					</li>
					<li className="main-header__item">
						<a className={path === "/charts" ? "active" : ""} href="/charts">
							Charts
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default NavigationHeader;
