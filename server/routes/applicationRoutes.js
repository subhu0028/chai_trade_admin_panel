
const express = require('express')

const {getApplications, editApplication} = require('../controllers/applicationController.js')

const router = express.Router();

router.get('/getApplications', getApplications)

// router.post('/edit-user', editUser)


module.exports = router