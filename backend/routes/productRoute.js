const express = require('express');
const { addProduct, findProduct, SearchProduct, findWithQuery, getSingleProduct, joins, Singlejoin } = require('../controllers/productCtrl');
const { requireSignIn } = require('../middlewares/authMdwr');


const router = express.Router()

router.post('/add-product',requireSignIn ,addProduct);
router.get('/all-product' ,findProduct);
router.get('/sin/:id',Singlejoin)
router.get('/search' ,SearchProduct);
router.get('/query' ,findWithQuery);
router.get('/all' ,joins);






module.exports = router