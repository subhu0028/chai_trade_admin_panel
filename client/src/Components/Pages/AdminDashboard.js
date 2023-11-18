import React, { useState } from "react";
import "./AdminDashboard.css";

function AdminDashboard() {
	const [isSidebarOpen, setSidebarOpen] = useState(true);

	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen);
	};

	return (
		<div className={`App ${isSidebarOpen ? "" : "sidebar-hidden"}`}>
			<div className="sidebar">
				<h1>Admin Dashboard</h1>
				<ul>
					<li>
						<a href="#" className="active">
							Dashboard
						</a>
					</li>
					<li>
						<a href="#">Users</a>
					</li>
					<li>
						<a href="#">Products</a>
					</li>
					{/* Add more menu items as needed */}
				</ul>
			</div>
			<div className="main-content">
				<header>
					<h2>Welcome, Admin!</h2>
					<button onClick={toggleSidebar} id="toggleSidebar">
						Toggle Sidebar
					</button>
				</header>
				<div className="content">{/* Content goes here */}</div>
			</div>
		</div>
	);
}

export default AdminDashboard;
