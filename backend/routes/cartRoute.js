const express = require('express');
const { AddToCart, FindToCart, deleteItem } = require('../controllers/cartCtrl');
const { requireSignIn } = require('../middlewares/authMdwr');


const router = express.Router()

router.post('/add-to-cart',requireSignIn,AddToCart);
router.get('/cart-items',requireSignIn,FindToCart);
router.delete('/delete-items/:id',deleteItem);


module.exports = router