const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    
    user_id:{
        type:mongoose.ObjectId,
        ref:"users"
    },
    product_id:{
        type:mongoose.ObjectId,
        ref:"products"
    }

      


},{timestamps:true})

const Cart = mongoose.model('carts',cartSchema)

module.exports = Cart