

const express = require('express')

const {getFaqs, editFaq} = require('../controllers/faqController.js')

const router = express.Router();

router.get('/getFaqs', getFaqs)

// router.post('/edit-user', editUser)


module.exports = router