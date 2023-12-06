 const Orders = require("../models/OrderModel")
 const AddOrder = async(req,res) =>{
    try {
        const result = await Orders({
           user_id:req.user._id,
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




 module.exports={AddOrder}