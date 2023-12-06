const mongoose = require("mongoose")

const sellerSchema = new mongoose.Schema({
    
      user_id:
      {
        type:mongoose.ObjectId,
        ref:"users"
      },
      company_name:
      {
        type:String,
        required:true,
        unique:true
      },
      average_rating:
      {
        type:Number,
      },
       url:{
        type:String,
        required:true
      },
      desc:{
        type:String,
        required:true
      }
      


},{timestamps:true})

const Seller = mongoose.model('sellers',sellerSchema)

module.exports = Seller