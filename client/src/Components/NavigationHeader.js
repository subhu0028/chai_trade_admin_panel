// NavigationHeader.js
import React from "react";
import { Link } from 'react-router-dom';
import './Main.css';

function NavigationHeader({ path }) {
	return (
		<header className="main-header">
			<nav className="main-header__nav">
				<ul className="main-header__item-list">
					<li className="main-header__item">
						<Link className={path === "/users" ? "active" : ""} 
						to="/users">
							Admin
						</Link>
					</li>
					{/* Add other navigation items following the same structure */}
					<li className="main-header__item">
						<Link className={path === "/mentors" ? "active" : ""} 
						to="/mentors">
							Mentors
						</Link>
					</li>
					<li className="main-header__item">
						<Link className={path === "/users" ? "active" : ""} 
						to="/users">
							Users
						</Link>
					</li>
					<li className="main-header__item">
						<Link className={path === "/add-faq" ? "active" : ""} 
						to="/add-faq">
							Add Faq
						</Link>
					</li>
					<li className="main-header__item">
						<Link className={path === "/faqs" ? "active" : ""} 
						to="/faqs">
							FAQS
						</Link>
					</li>
					<li className="main-header__item">
						<Link
							className={path === "/features" ? "active" : ""}
							to="/features"
						>
							Features
						</Link>
					</li>
					<li className="main-header__item">
						<Link className={path === "/blogs" ? "active" : ""} 
						to="/blogs">
							Blogs
						</Link>
					</li>
					<li className="main-header__item">
						<Link
							className={path === "/applications" ? "active" : ""}
							to="/applications"
						>
							Applications
						</Link>
					</li>
					<li className="main-header__item">
						<Link
							className={path === "/contacts" ? "active" : ""}
							to="/contacts"
						>
							Queries
						</Link>
					</li>
					<li className="main-header__item">
						<Link
							className={path === "/add-chart" ? "active" : ""}
							to="/add-chart"
						>
							Add Chart
						</Link>
					</li>
					<li className="main-header__item">
						<Link className={path === "/charts" ? "active" : ""} 
						to="/charts">
							Charts
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default NavigationHeader;
