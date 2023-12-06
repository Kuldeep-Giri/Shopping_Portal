const express = require('express');
const { uploadImage,getImage, join, getJoin } = require('../controllers/ImageCtrl');
const upload = require('../middlewares/productImageMiddleware');

const router = express.Router()

router.post('/upload-image', upload.array('photo') ,uploadImage);
router.get('/images', getImage);
router.get('/show', join);
router.get('/:id', getJoin);

module.exports = router