

const express = require('express')

const {getContacts, editContact} = require('../controllers/contactController.js')

const router = express.Router();

router.get('/getContacts', getContacts)

// router.post('/edit-user', editUser)


module.exports = router