const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const requireSignIn = async(req,res,next)=>{
    try {
        const decode = await jwt.verify(req.headers.authorization,process.env.SECRET_KEY)
        req.user = decode;
        next()
    } catch (error) {
        console.log(error)
    }
}


const isSeller = async(req,res,next)=>{
 const user = await User.findOne(req.user._id)
 if(!user.user_type === "seller"){
    return res.status(401).send({
        success: false,
        message: "Not a seller Access",
 })
}else{
    next()
}
}
module.exports = {requireSignIn,isSeller}