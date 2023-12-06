const mongoose = require("mongoose")
const { v4: uuidv4 } = require('uuid');

const OrderSchema = new mongoose.Schema({
    
    user_id:{
        type:mongoose.ObjectId,
        ref:"users"
    },
    product_id:{
        type:mongoose.ObjectId,
        ref:"products"
    },
    product_price:{
        type:Number,
        required:true
    },
    product_dis:{
        type:Number,
        required:true
    },
    shipping_id:{
        type:mongoose.ObjectId,
        ref:"addresss"
    },
    transaction_id: {type: String,
        default: uuidv4,
        unique: true,
    }

      


},{timestamps:true})

const Orders = mongoose.model('orders',OrderSchema)

module.exports = Orders