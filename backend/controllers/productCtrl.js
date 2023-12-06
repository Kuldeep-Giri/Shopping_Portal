const Product = require("../models/productModel")
const Image = require("../models/ProductImageModel")
const mongoose = require("mongoose")

const addProduct = async(req,res)=>{
    try {
        const {category_id,carrier_id,product_title,price,description,available_units,discount_percents,color,weight} = req.body
    const product = await Product({seller_id:req.user._id,category_id,carrier_id,product_title,price,description,available_units,discount_percents,color,weight}).save()
      res.status(201).send(product)
    } catch (error) {
        console.log(error)
    }
}

const findProduct = async(req,res) =>{
    try {
        const products = await Product.find({});
        res.json(products)
    } catch (error) {
        console.log(error)
    }
}


///search product 

const SearchProduct = async(req,res)=>{
    const searchItem = req.query.q;
    try {
        const results = await Product.aggregate([
            {
              $match: {
                $or: [
                  { product_title: { $regex: searchItem, $options: 'i' } }   
                ],
              },
            },
            {
              $lookup: {
                from: 'images',
                localField: '_id',
                foreignField: 'product_id',
                as: 'images',
              },
            },
          ]);
      
          res.json(results);
    } catch (error) {
        console.log(error)
    }
}

//sib=ngle product find


const findWithQuery = async(req,res)=>{
    try {

    const category_id = req.query.category_id;

    const result = await Product.aggregate([
      {
        $match: {
            category_id: category_id,
        },
      },
      {
        $lookup:{
            from:"images",
            localField:"_id",
            foreignField:"product_id",
            as:"images"

      }
      },
    ]);
 res.json(result)
    } catch (error) {
        console.log(error)
    }
 }

 //add two collectios

 const joins = async(req,res)=>{
    try {
        const product  = await Product.aggregate([{
            $lookup:{
                  from:"images",
                  localField:"_id",
                  foreignField:"product_id",
                  as:"images"

            }
        }])
        res.json(product)
    } catch (error) {
        console.log(error)
    }
 }


 const Singlejoin = async(req,res)=>{
    try {
        var {id} = req.params
      
        let product  = await Product.aggregate([

            {
                $match: { _id : new  mongoose.Types.ObjectId(id) }
              },
           
         {

           $lookup:{
                  from:"images",
                  localField:"_id",
                  foreignField:"product_id",
                  as:"images"

            }
        } 
    ])
        res.json(product[0])
    } catch (error) {
        console.log(error)
    }
 }

 

module.exports  ={addProduct,findProduct,SearchProduct,findWithQuery,joins,Singlejoin}




