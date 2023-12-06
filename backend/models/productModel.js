const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({

   seller_id:{ type:mongoose.ObjectId, ref:"users" },

  category_id:{ type:mongoose.ObjectId, ref:"categories"},

    carrier_id:{ type:mongoose.ObjectId, ref:"carriers"},

    product_title:{ type:String, required:true, unique:true},

    price:{ type:Number, required:true},

    rating:{ type:Number},

    rewiew_count:{ type:Number},

    description:{ type:String, required:true },

    discount_percents : { type:Number },

    available_units:{ type:Number, required:true},
     
    color:{ type:String, required:true },

    in_stock:{ type: Boolean, default: 1 },

    weight : { type : String }

},{timestamps:true})

const Product = mongoose.model('products',productSchema)

module.exports = Product