 const Cart = require("../models/cartModel")
 const AddToCart = async(req,res)=>{
    try {
         const add = await Cart({
            user_id:req.user._id,
            product_id:req.body.product_id
         }).save();

         res.status(201).send({
            msg:"Add Successfully",
            add
         })
    } catch (error) {
        console.log(error)
    }
}

const FindToCart = async(req,res)=>{
    try {
         const items = await Cart.aggregate([
                {
                   $lookup :{
                    from:"products",
                    localField:"product_id",
                    foreignField:"_id",
                    as:"products"
                   },
              
                },
                  {

                   $lookup :{
                     from:"images",
                     localField:"product_id",
                     foreignField:"product_id",
                     as:"images"
                    } 
                }
    

                
              
            
        ]);

         res.status(200).send({
            item : items.length,
            msg:"Add Successfully",
            items
         })
    } catch (error) {
        console.log(error)
    }
}


const deleteItem =  async(req,res) =>{
    try {
        const {id} = req.params
        const dlitem = await Cart.findByIdAndDelete(id)
         res.status(200).send({
            msg:"Item deleted",
            dlitem
         })
    } catch (error) {
        console.log(error)
    }
}
module.exports = {AddToCart,FindToCart,deleteItem}
