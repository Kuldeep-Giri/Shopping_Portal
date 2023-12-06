const mongoose = require("mongoose")

const buyerSchema = new mongoose.Schema({
    user_id:{
     type:mongoose.ObjectId,
     ref :"users"
    },
      is_prime:
      {
        type:Boolean,
        default:false
      },
      exp_prime:
      {
        type: String, 
        default:null
      }
      


},{timestamps:true})

const Buyer = mongoose.model('buyers',buyerSchema)

module.exports = Buyer