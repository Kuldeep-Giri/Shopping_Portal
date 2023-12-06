const mongoose = require("mongoose")

const imgSchema = new mongoose.Schema({
    product_id:{
        type:mongoose.ObjectId,
        ref:"products"
    },
    photo:{
        type:String,
        required:true
        
    }
},{timestamps:true})

const Image = mongoose.model('images',imgSchema)

module.exports = Image