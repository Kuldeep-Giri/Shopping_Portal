const express = require('express');
const { AddAddress, getAddress } = require('../controllers/addressCtrl');
const { requireSignIn } = require('../middlewares/authMdwr');

const router = express.Router()

router.post('/add-address',requireSignIn ,AddAddress);

router.get('/get-address',requireSignIn ,getAddress);


module.exports = router