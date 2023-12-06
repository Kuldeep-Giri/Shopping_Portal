const Address = require("../models/AddressModel")

const AddAddress = async(req,res)=>{
    try {
        const {street1,street2,city,state,country,pincode,phone} = req.body
    
        const result = await Address({
            user_id:req.user._id ,
            street1,
            street2,
            city,
            state,
            country,
            pincode,
            phone
           
        }).save()

        res.status(201).send({
            msg:"Added",
            result
        })
    } catch (error) {
        console.log(error)
    }
}


const getAddress = async(req,res)=>{
    try {
        const result = await Address.find({user_id : req.user._id})
        res.status(200).json({
            msg:"get Address",
            result
        })
    } catch (error) {
        console.log(error)
    }
}



module.exports = {AddAddress,getAddress}