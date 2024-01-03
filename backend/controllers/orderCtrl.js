 const Orders = require("../models/OrderModel")
 const mongoose = require("mongoose")
 const AddOrder = async(req,res) =>{
    try {
        const result = await Orders({
           user_id:req.user._id,
           transaction_id:req.body.transaction_id,
           product_id:req.body.product_id,
           product_price:req.body.product_price,
           product_dis:req.body.product_dis,
           shipping_id:req.body.shipping_id,
        }).save()

        res.status(201).send({
            msg:"order SuccessFully",
            result
        })
    } catch (error) {
       console.log(error) 
    }
 }

const getOrder = async(req,res)=>{
   try {
      const user_id = req.user._id
      const pipeline = [
         {
           $match: {
             user_id: new mongoose.Types.ObjectId(user_id),
           },
         },
         {
            $lookup:{
               from: 'addresses',
               localField: 'shipping_id',
               foreignField: '_id',
               as: 'address',
            }
         },
         {
            $lookup:{
               from: 'products',
               localField: 'product_id',
               foreignField: '_id',
               as: 'orderProducts',
            }
         },
         {
            $lookup:{
               from: 'images',
               localField: 'product_id',
               foreignField: 'product_id',
               as: 'image',
            }
         }
       ];

       const result = await Orders.aggregate(pipeline)
       res.status(200).send(result)
   } catch (error) {
      console.log(error)
   }
}


 module.exports={AddOrder,getOrder}