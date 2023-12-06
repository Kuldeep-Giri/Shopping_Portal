const { hashPassword, comparePassword } = require("../helpers/authHlp");
const User = require("../models/userModel");
const jwt = require('jsonwebtoken')


const Register = async(req,res)=>{
    try {
        const {name,email,password,user_type} = req.body

        const findEmail = await User.findOne({email})
        if(!findEmail){
              const hashpassword = await hashPassword(password)
              const user = await User({
                name:name,
                email:email,
                password:hashpassword,
                user_type:user_type
              }).save()
              res.status(200).send({
                success:true,
                msg:"Registration Successfully ",
                user
              })
        }else{
            res.status(200).send({
                success:false,
                msg:"Email is Already Exist"
            })
        }
    } catch (error) {
        console.log(error)
        res.status(401).send({
            msg:"error",
            success:false
        })
    }
}

const Login = async(req,res)=>{
    try {
        const {email,password} = req.body
 
        if(!email || !password){
           res.status(401).send({
               message:"Email or Password Invalid"
           })
        }
 
        const user = await User.findOne({email})
        if(!user){
           res.status(401).send({
               message:"Email is not register"
           })
        }
        
        const match = await comparePassword(password,user.password);
        if(!match){
           res.status(401).send({
               message:"Enter a valid password"
           })
        }
 
        const token = await jwt.sign({_id:user._id},process.env.SECRET_KEY,{
           expiresIn:"7d"
        })
 
        res.status(201).json({
           success:true,
           message:"Login SuccessFully",
           user:{
               _id:user._id,
               name:user.name,
               email:user.email,
               user_type:user.user_type
              
           },
           token
        })
   } catch (error) {
       
   }
}


module.exports = {Register,Login}