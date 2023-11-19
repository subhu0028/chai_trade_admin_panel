import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Components/Pages/Layout";
// import NavigationHeader from "./Components/NavigationHeader";
import ApplicationList from "./Components/Pages/ApplicationList";
import BlogList from "./Components/Pages/BlogList"; // Replace with your actual components
// import BlogForm from './Components/Pages/BlogFrom';
import ChartList from "./Components/Pages/ChartList";
import ContactList from "./Components/Pages/ContactList";
import FAQList from "./Components/Pages/FAQList";
import FeatureList from "./Components/Pages/FeatureList";
import MentorList from "./Components/Pages/MentorList";
import UserList from "./Components/Pages/UserList";
// Import other route components as needed

// client/src/App.js
import { useState, useEffect } from "react";
import Axios from "axios";
import NavigationHeader from "./Components/NavigationHeader";

const App = () => {
	const [users, setUsers] = useState([]);
	const [mentors, setMentors] = useState([]);
	const [applications, setApplications] = useState([]);
	const [blogs, setBlogs] = useState([]);
	const [charts, setCharts] = useState([]);
	const [contacts, setContacts] = useState([]);
	const [faqs, setFaqs] = useState([]);
	const [features, setFeatures] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await Axios.get("http://localhost:4000/blogs");
				//setUsers(response.data);
				setBlogs(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []); // Empty dependency array ensures the effect runs once when the component mounts

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout></Layout>}></Route>
					<Route index element={<UserList />} />
					<Route path="/users" element={<UserList users={users} />} />
					<Route path="/mentors" element={<MentorList mentors={mentors} />} />
					<Route path="/blogs" element={<BlogList blogs={blogs} />} />
					<Route
						path="/applications"
						element={<ApplicationList applications={applications} />}
					></Route>
					<Route path="/faqs" element={<FAQList faqs={faqs} />}></Route>
					<Route
						path="/features"
						element={<FeatureList features={features} />}
					></Route>
					<Route path="/charts" element={<ChartList charts={charts} />}></Route>
					<Route
						path="/contacts"
						element={<ContactList contacts={contacts} />}
					></Route>
					{/* Add more routes for your other pages */}
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
