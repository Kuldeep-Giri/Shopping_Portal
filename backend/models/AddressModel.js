const mongoose = require("mongoose")

const AddressSchema = new mongoose.Schema({

   user_id:{ type:mongoose.ObjectId, ref:"users" },

    street1:{ type:String},

    street2:{ type:String},

    city:{ type:String, required:true},

    state:{ type:String, required:true},

    country:{ type:String, required:true },

    pincode : { type:Number ,required:true},

    phone:{ type:Number, required:true},
   
    is_default:{ type: Boolean, default: 0 }

    

},{timestamps:true})

const Address = mongoose.model('address',AddressSchema)

module.exports = Address