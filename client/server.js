// server.js

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000; // Choose your desired port

// Connect to MongoDB
mongoose
	.connect('mongodb+srv://bennurdarshan:chaiTrade404@cluster0.psgtpad.mongodb.net/?retryWrites=true&w=majority', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((error) => {
		console.error("Error connecting to MongoDB:", error);
	});

// Define your API routes and other server logic here

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
