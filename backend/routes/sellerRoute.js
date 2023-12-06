const express = require('express')
const { createSeller, fetchCompany } = require('../controllers/sellerCtrl')
const { requireSignIn, isSeller } = require('../middlewares/authMdwr')
const mongoose = require('mongoose')


const router = express.Router()



router.post('/create-seller',requireSignIn,createSeller);
router.get('/company',requireSignIn,fetchCompany)


router.get('/cat',async(req,res)=>{
    const data = await mongoose.connection.db.collection('categories')
    const find = await data.find().toArray()
    res.status(200).json(find)
})

router.get('/carriers',async(req,res)=>{
    const data = await mongoose.connection.db.collection('carries')
    const find = await data.find().toArray()
        res.status(200).json(find)
})

module.exports = router