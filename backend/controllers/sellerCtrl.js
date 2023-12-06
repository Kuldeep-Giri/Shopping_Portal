const Seller = require("../models/sellerModel")

const createSeller = async(req,res)=>{
    try {
        const {company_name,average_rating,url,desc} = req.body
        const seller = await Seller({
            user_id:req.user._id,
            company_name:company_name,
            average_rating:average_rating,
            url:url,
            desc:desc
          }).save()
          res.status(201).send({
            success:true,
            msg:"Seller created",
            seller
          })
    } catch (error) {
        console.log(error)
        res.status(400).send({
            success:false,
            msg:error,
            
          })
    }
}

const fetchCompany = async(req,res)=>{
  try {
    const findCompany = await Seller.find({user_id:req.user._id})
    res.status(200).json({
      msg:"Get company",
      findCompany
    })
  } catch (error) {
    console.log(error)
    res.status(200).json({
      msg:"Get company",
     error
    })
  }
}

module.exports = {createSeller,fetchCompany}