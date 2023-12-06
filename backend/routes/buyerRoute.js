const express = require('express')
const { createBuyer } = require('../controllers/buyerCtrl');


const router = express.Router()

router.post('/create-buyer',createBuyer);






module.exports = router