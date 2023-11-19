// server/routes/userRoutes.js
// const express = require("express");
// const router = express.Router();
// const User = require("../models/user.js");

// router.get("/users", async (req, res) => {
// 	try {
// 		const users = await User.find();
// 		res.json(users);
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).json({ error: "Internal Server Error" });
// 	}
// });

// module.exports = router;


const express = require('express')

const {getUsers, editUser} = require('../controllers/userController.js')

const router = express.Router();

router.get('/getUsers', getUsers)

// router.post('/edit-user', editUser)


module.exports = router