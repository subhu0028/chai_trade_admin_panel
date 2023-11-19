
const express = require('express')

const {getMentors, editMentor} = require('../controllers/mentorController.js')

const router = express.Router();

router.get('/getMentors', getMentors)

// router.post('/edit-user', editUser)


module.exports = router