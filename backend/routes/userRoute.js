const express = require('express')
const { Register, Login } = require('../controllers/userCtrl');
const { requireSignIn, isSeller } = require('../middlewares/authMdwr');


const router = express.Router()

router.post('/register',Register);
router.post('/login',Login)

router.get('/buyer-route',requireSignIn,(req,res)=>{
    res.status(200).json({ok:true})
}
)
router.get('/seller-route',requireSignIn,isSeller,(req,res)=>{
    res.status(200).json({ok:true})
}
)




module.exports = router