const Buyer = require("../models/buyerModel")


const createBuyer = async(req,res)=>{
  try {
    const {user_id} = req.body
    const buyer = await Buyer(user_id).save()
    res.json({
      msg:"add buyer Successfully",
      buyer
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {createBuyer}