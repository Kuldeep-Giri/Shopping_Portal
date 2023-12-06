const express = require('express');
const { requireSignIn } = require('../middlewares/authMdwr');
const { AddOrder } = require('../controllers/orderCtrl');


const router = express.Router()

router.post('/add-order',requireSignIn,AddOrder)


module.exports = router