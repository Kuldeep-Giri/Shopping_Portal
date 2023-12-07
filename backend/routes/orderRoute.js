const express = require('express');
const { requireSignIn } = require('../middlewares/authMdwr');
const { AddOrder, getOrder } = require('../controllers/orderCtrl');


const router = express.Router()

router.post('/add-order',requireSignIn,AddOrder)
router.get('/get-order',requireSignIn,getOrder)


module.exports = router